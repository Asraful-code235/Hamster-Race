import { Link } from 'react-router';
import hamsterLogo from '../assets/hamster-logo.png';

export default function Navbar() {
  return (
    <div className=' bg-gray-400 px-5 lg:px-14 py-2 rounded-b-3xl lg:rounded-b-full mb-10 flex justify-between items-center'>
      <div>
        <Link to='/'>
          <img src={hamsterLogo} alt='hamster racing logo' />
        </Link>
      </div>
      <div>
        <button className='border border-black rounded px-2 lg:px-6 py-2 font-pixel text-xs'>
          Conned Wallet
        </button>
      </div>
    </div>
  );
}
