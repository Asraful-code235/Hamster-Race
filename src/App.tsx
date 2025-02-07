import { useState, useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import PlaceBetForm from './components/place-bet-form';
import RaceRat from './assets/race-rat.png';

interface Hamster {
  id: number;
  name: string;
  position: number;
  color: string;
}

function App() {
  const [hamsters, setHamsters] = useState<Hamster[]>([
    { id: 1, name: 'RED', position: 0, color: 'text-orange-400' },
    { id: 2, name: 'BLUE', position: 0, color: 'text-blue-800' },
    { id: 3, name: 'GREEN', position: 0, color: 'text-red-400' },
    { id: 4, name: 'YELLOW', position: 0, color: 'text-purple-400' },
    { id: 5, name: 'PINK', position: 0, color: 'text-purple-900' },
  ]);
  const [winner, setWinner] = useState<Hamster | null>(null);
  const [isRacing, setIsRacing] = useState(false);
  const [messages, setMessages] = useState<string[]>(['HELLOO']);
  const [countdown, setCountdown] = useState(30);
  const raceIntervalRef = useRef<number>();
  const hasWinnerRef = useRef(false);

  const trackColors = ['#FF0000', '#3699FF', '#00FFA3', '#DFFE00', '#E128FF'];

  const startRace = () => {
    if (isRacing) return;

    setIsRacing(true);
    setWinner(null);
    hasWinnerRef.current = false;
    setHamsters(hamsters.map((h) => ({ ...h, position: 0 })));
    setMessages((prev) => [...prev, 'NEW RACE STARTING! 🏁']);

    // Add 2-second delay before hamsters start moving
    setTimeout(() => {
      raceIntervalRef.current = window.setInterval(() => {
        setHamsters((prevHamsters) => {
          const newHamsters = prevHamsters.map((hamster) => {
            if (hamster.position >= 100) {
              return hamster; // Don't move if already at finish line
            }
            const speed = Math.random() * 1;
            const newPosition = Math.min(100, hamster.position + speed); // Cap at 100%
            return {
              ...hamster,
              position: newPosition,
            };
          });

          const winningHamster = newHamsters.find((h) => h.position >= 100);
          if (winningHamster && !hasWinnerRef.current) {
            hasWinnerRef.current = true;
            if (raceIntervalRef.current) {
              clearInterval(raceIntervalRef.current);
              raceIntervalRef.current = undefined;
            }
            setIsRacing(false);
            setWinner(winningHamster);
            setMessages((prev) => [
              ...prev,
              `${winningHamster.name} WINS THE RACE! 🎉`,
            ]);
            setCountdown(30);
          }

          return newHamsters;
        });
      }, 100);
    }, 2000); // 2-second delay
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isRacing) {
        setCountdown((prev) => {
          if (prev <= 1) {
            startRace();
            return 30;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      if (raceIntervalRef.current) {
        clearInterval(raceIntervalRef.current);
      }
    };
  }, [isRacing]);

  return (
    <div className='min-h-screen lg:p-4'>
      {/* Header */}
      <div className='border-b-2 border-orange-400 pb-4 mb-8'>
        <div className='flex items-center justify-center gap-2'>
          <h1 className='text-4xl font-pixel text-center mb-4'>
            {' '}
            HAMSTER RACING
          </h1>
        </div>
        <div className='w-full overflow-hidden'>
          <div className='animate-scroll whitespace-nowrap font-pixel text-xl'>
            🏁 RACE LIVE 🏁 RACE LIVE 🏁 RACE LIVE 🏁
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className='text-center mb-4 font-pixel'>
        {!isRacing && (
          <div className='text-xl'>
            NEXT RACE IN: <span className='text-gray-700'>{countdown}</span>s
          </div>
        )}
      </div>

      {/* Race Track */}
      <div className='mb-8 px-4'>
        {hamsters.map((hamster, index) => (
          <div key={hamster.id} className='mb-6 relative'>
            <div
              className='h-9 border-t border-b border-black relative'
              style={{
                backgroundColor: trackColors[index % trackColors.length],
              }}
            >
              <div
                className='absolute top-1/2 -translate-y-1/2 transition-all duration-200 w-8'
                style={{ left: `${Math.min(100, hamster.position)}%` }}
              >
                <img src={RaceRat} alt='Race Rat' />
              </div>
              <div className='absolute right-0 top-1/2 -translate-y-1/2'>
                <span className='text-sm'>🏁</span>
              </div>
            </div>
            <span
              className={`font-pixel ${hamster.color} absolute right-8 top-1/2 -translate-y-1/2`}
            >
              {hamster.name}
              {winner?.id === hamster.id && (
                <Trophy className='inline ml-2 h-4 w-4 text-gray-600' />
              )}
            </span>
          </div>
        ))}
      </div>

      <div>
        <PlaceBetForm />
      </div>

      {/* Chat Box */}
      <div className='border-2 border-black p-4 h-48 overflow-y-auto font-pixel'>
        {messages.map((message, index) => (
          <div key={index} className='mb-2'>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
