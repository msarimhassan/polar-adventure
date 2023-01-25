import { FooterData, SocialData } from '../common';

const Footer = () => {
  const IconCard = ({ icon }) => {
    return (
      <div className='cursor-pointer m-1 rounded-[50px] border-[1px] border-white  justify-center items-center flex h-[50px] w-[50px] hover:bg-[#00679a]'>
        <div className='w-[20px]'>{icon}</div>
      </div>
    );
  };

  const ListItem = ({ title }) => {
    return (
      <li className=' cursor-pointer flex items-center hover:text-[#00679a]'>
        <div className='w-[15px]'>
          <svg
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
            ></path>
          </svg>
        </div>
        <div>{title}</div>
      </li>
    );
  };

  const FooterColumn = ({ title, links }) => {
    return (
      <div className='flex flex-col ml-4 pt-10 md:ml-0 pt-0'>
        <div className='flex flex-row items-center'>
          <div className='w-[3px] h-[30px] bg-white'></div>
          <h1 className='ml-1'>{title}</h1>
        </div>
        <ul className='mt-2'>
          {links.map((item) => {
            return <ListItem title={item} />;
          })}
        </ul>
      </div>
    );
  };

  const Content = ({ content }) => {
    return (
      <p className='mx-auto text-center mt-5 text-[12px] px-3 md:px-0 max-w-[1000px]'>{content}</p>
    );
  };
  return (
    <div className='bg-black text-[#cdcdcd] pb-3'>
      <div className='w-[100px] mx-auto pt-10'>
        <img
          className='h-full w-full object-cover'
          src='https://polaradventure.com/assets/svg/logo/Polar_logo_grey-03.svg'
          alt='footer'
        />
      </div>
      <Content
        content='The Polar Adventure Company - with 30 years of polar experience our Arctic and Antarctic
        experts will help you find your voyage of a lifetime. From the North Pole, to the Antarctic
        Circle, we have over 500 polar cruises to choose from, on the world’s finest small ships.
        We’re here to make your polar dreams come true.'
      />
      <Content content='Toll Free North America: 833-332-0888 or +1-709-800-8003' />
      <Content content=' Office Hours: 9:00 a.m. - 5:00 p.m. EST, Monday to Friday' />
      <div className='flex items-center justify-center flex-row mt-5'>
        {SocialData.map(({ Icon }, index) => {
          return <IconCard key={index} icon={Icon} />;
        })}
      </div>
      <div className='flex justify-around mt-10  flex-col md:flex-row'>
        {FooterData.map(({ title, links }) => {
          return <FooterColumn links={links} title={title} />;
        })}
      </div>
      <p className='mt-5 ml-10 text-[16px]'>Copyright © 2021. The Polar Adventure Company Ltd</p>
    </div>
  );
};

export default Footer;
