import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks';
import { Icons } from '../common';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const { BI, RX } = Icons;
  return (
    <div
      className={`fixed transition ease-in-out delay-150 w-screen z-[999] ${
        scrollPosition > 0 ? 'bg-zinc-900/[.9]' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center justify-between py-[10px] px-[30px]'>
        <div className='block lg:hidden'>
          <RX.RxHamburgerMenu size={35} color='white' />
        </div>
        <div className='w-[150px] h-[60px] object-cover hidden lg:block'>
          <img
            src='https://polaradventure.com/assets/svg/logo/Polar_logo_white-04.svg'
            alt='Polar Adventure'
          />
        </div>
        <div className='hidden flex items-center lg:flex'>
          {Array(5)
            .fill(0)
            .map((index) => {
              return (
                <div
                  className='text-[12px] rounded-3xl py-[10px] px-[15px] mx-[10px] my-[0px] text-white text-[13.5px] hover:bg-slate-300 hover:text-black'
                  key={index}
                >
                  <Link to='#'>HOME</Link>
                </div>
              );
            })}
          <div className='text-[12px] text-white border-[2px] border-white px-2 py-2 cursor-pointer'>
            ASK US ANYTHING
          </div>
        </div>
        <div className='border-[1px] text-[13px] font-[200] border-white rounded-[50px] py-2 px-4  text-white cursor-pointer hidden lg:block'>
          Login/Sign-Up
        </div>
        <div className='block lg:hidden'>
          <BI.BiUserCircle color='white' size={35} />
        </div>
      </div>
    </div>
  );
};

export default Header;
