import { Link } from 'react-router';
import HamsterLogo from '../assets/hamster-logo.png';

export default function HomePage() {
  const redirectButtons = [
    {
      text: (
        <>
          <span className='text-purple-500'>Ai</span> Hamster <br /> Races
        </>
      ),
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-600',
      url: '/ai-hamster-races',
    },
    {
      text: (
        <>
          Pre-recorded <br /> Hamster Races
        </>
      ),
      bgColor: 'bg-yellow-50',

      borderColor: 'border-yellow-600',
      url: '/pre-recorded-hamster-races',
    },
    {
      text: (
        <>
          Live-streamed <br /> Hamster <br /> championships
        </>
      ),
      bgColor: 'bg-green-50',

      borderColor: 'border-green-600',
      url: '/live-streamed-hamster-championships',
    },
  ];
  return (
    <div className='py-20 mt-10 lg:mt-20 lg:px-0 px-2'>
      <div className='text-center space-y-10'>
        <div className='text-2xl lg:text-7xl font-bold font-pixel'>
          Are You <br />
          Even Degen?
        </div>
        <button className='font-pixel'>Press Play</button>
        <div>
          <button className='relative pl-[70px] pr-8 py-4 bg-black text-white rounded-lg text-2xl flex gap-5 items-center justify-center mx-auto'>
            <div className='absolute left-2 bg-green-400/20 p-2 border border-green-500 rounded'>
              <img className='w-8' src={HamsterLogo} alt='hamster logo' />
            </div>
            Pump fun token launch
          </button>
        </div>
      </div>
      <div>
        {redirectButtons.map((button, index) => (
          <div key={index} className='text-center mt-10'>
            <Link to={button.url}>
              <button
                className={`w-full lg:w-4/12 h-[460px] rounded-lg border ${button.bgColor} ${button.borderColor} font-pixel text-xl/7 lg:text-3xl/10 uppercase leading-`}
              >
                {button.text}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
