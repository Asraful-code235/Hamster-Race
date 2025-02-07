import { useState } from 'react';
import hamsterButtonImage from '../assets/hamster-button.png';
import solanaIcon from '../assets/solana-svg.png';

export default function PlaceBetForm() {
  const [betAmount, setBetAmount] = useState<number>(0);
  const [selectedHamster, setSelectedHamster] = useState<string>('');

  const hamsterButtons = [
    { color: 'bg-[#FF0000]', name: 'red_hamster' },
    { color: 'bg-[#3699FF]', name: 'blue_hamster' },
    { color: 'bg-[#00FFA3]', name: 'green_hamster' },
    { color: 'bg-[#DFFE00]', name: 'yellow_hamster' },
    { color: 'bg-[#E128FF]', name: 'pink_hamster' },
  ];

  const betAmounts = [0.1, 0.5, 1, 10];

  const handleSubmit = () => {
    const payload = {
      selectedHamster,
      betAmount,
    };
    console.log({ payload });
  };

  return (
    <div className='text-center space-y-8 py-10'>
      <h2 className='text-3xl font-pixel'>PLACE YOUR BETS</h2>
      {hamsterButtons.map((hamster) => (
        <button
          key={hamster.name}
          onClick={() => setSelectedHamster(hamster.name)}
          className={`px-4 py-2 m-2 rounded w-[100px] h-9 border-black text-black relative transition-all duration-300
            ${hamster.color} 
            ${
              selectedHamster === hamster.name
                ? 'border-2 border-white scale-110'
                : ''
            }`}
        >
          <div className='absolute top-1/2 -translate-y-1/2 left-0'>
            <img src={hamsterButtonImage} alt='hamsterButtonIcon' />
          </div>
        </button>
      ))}
      <div className='border-2 border-black px-4 py-12 w-full lg:w-2/6 mx-auto space-y-5'>
        <div className='flex justify-between gap-6 flex-wrap '>
          {betAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setBetAmount(amount)}
              className='px-6 py-2 border-2 border-black flex gap-2 items-center rounded'
            >
              <img src={solanaIcon} alt='solanaIcon' />
              {amount}
            </button>
          ))}
          <button className='px-6 py-2 border-2 border-black flex gap-2 items-center rounded'>
            <img src={solanaIcon} alt='solanaIcon' />
            Preset
          </button>
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
              value={betAmount}
              onChange={(e) => setBetAmount(parseFloat(e.target.value) || 0)}
            />
          </div>
          <button
            dir='rtl'
            onClick={handleSubmit}
            className='bg-red-500 text-white w-[110px] h-10 rounded-s border-2 border-black'
          >
            Place Bet
          </button>
        </div>
      </div>
    </div>
  );
}
