import { useState } from 'react';
import HamsterCard from '../assets/hamster-card.png';
import solanaIcon from '../assets/solana-svg.png';

export default function HamsterBetCard() {
  const [betAmounts, setBetAmounts] = useState<{ [key: string]: number }>({});
  const [selectedHamster, setSelectedHamster] = useState<string | null>(null);

  const hamsters = [
    { title: 'Theo', name: 'red_hamster', position: 1, win: 3, losses: 78 },
    {
      title: 'Charlotte',
      name: 'blue_hamster',
      position: 2,
      win: 5,
      losses: 44,
    },
    { title: 'Banksy', name: 'green_hamster', position: 3, win: 7, losses: 34 },
    {
      title: 'Pookie',
      name: 'yellow_hamster',
      position: 4,
      win: 4,
      losses: 62,
    },
    {
      title: 'Whiskers',
      name: 'pink_hamster',
      position: 5,
      win: 9,
      losses: 56,
    },
  ];

  const betValues = [0.1, 0.5, 1, 10];

  const handleBetAmountChange = (hamsterName: string, amount: number) => {
    setBetAmounts((prev) => ({ ...prev, [hamsterName]: amount }));
  };

  const handleSubmit = (hamsterName: string) => {
    const payload = {
      hamsterName,
      betAmount: betAmounts[hamsterName] || 0,
    };
    console.log('Submitting Bet:', payload);
  };

  return (
    <div className='text-center space-y-8 py-10'>
      <h2 className='text-3xl font-pixel'>PLACE YOUR BETS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {hamsters.map((hamster) => (
          <div
            key={hamster.name}
            className={`p-4 border-2 rounded-lg space-y-3 ${
              selectedHamster === hamster.name
                ? 'border-red-500'
                : 'border-black'
            }`}
            onClick={() => setSelectedHamster(hamster.name)}
          >
            <div className='relative text-left'>
              <img className='w-full' src={HamsterCard} alt='hamster-card' />
              <div className='absolute bottom-0 flex gap-2 bg-black bg-opacity-50 text-white px-4 py-2 justify-between items-end rounded-r-full'>
                <div className='text-xs'>
                  Proudly <br /> Sponsored by
                </div>
                <div className='font-semibold'>Perion</div>
              </div>
            </div>
            <div className='space-y-3'>
              <h3 className='text-left text-xl font-pixel'>{hamster.title}</h3>
              <div className='flex justify-between'>
                <span className='font-pixel text-sm'>{hamster.win} Wins</span>
                <span className='font-pixel text-sm'>
                  {hamster.losses} Losses
                </span>
              </div>
            </div>
            <div className='py-6 w-full space-y-5'>
              <div className='flex justify-center gap-2 flex-wrap'>
                {betValues.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleBetAmountChange(hamster.name, amount)}
                    className='px-2.5 py-1.5 border border-black flex gap-2 items-center rounded'
                  >
                    <img src={solanaIcon} alt='solanaIcon' />
                    {amount}
                  </button>
                ))}
              </div>
              <div className='flex gap-3 items-center'>
                <div className='w-full flex gap-2 items-center border-2 border-black h-10 pl-2'>
                  <img src={solanaIcon} alt='solanaIcon' className='h-5 w-5' />
                  <input
                    type='number'
                    className='w-full outline-none'
                    placeholder='Enter Amount'
                    step='0.1'
                    min='0'
                    value={betAmounts[hamster.name] || ''}
                    onChange={(e) =>
                      handleBetAmountChange(
                        hamster.name,
                        parseFloat(e.target.value) || 0
                      )
                    }
                  />
                </div>
                <button
                  onClick={() => handleSubmit(hamster.name)}
                  className='bg-red-500 text-white w-[110px] h-10 rounded-r border-2 border-black text-xs'
                >
                  Place Bet
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
