import { Dropdown, Button } from 'flowbite-react';

const SearchTour = () => {
  return (
    <div>
      <h2
        style={{
          fontFamily: 'Playfair Display SC,serif',
        }}
        className='mt-20 whitespace-normal leading-[45px] font-[300] text-center text-[30px]'
      >
        FIND YOUR TOUR OF A LIFETIME
      </h2>

      <div className='my-5 mx-10 flex items-center justify-center flex-col md:flex-row   '>
        <div className='shadow-md mx-2 px-5 py-2  border-b-2 border-b-neutral-800 w-full'>
          <Dropdown label='DESTINATION' inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='shadow-md mx-2 my-5 px-5 py-2 border-b-2 border-b-neutral-800 w-full md:my-0 '>
          <Dropdown label='REGION' inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='shadow-md mx-2 my-5 px-5 py-2 border-b-2 border-b-neutral-800 w-full md:my-0'>
          <Dropdown label='DEPARTS' inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className='shadow-md mx-2 my-5 px-5 py-2 border-b-2 border-b-neutral-800 w-full md:my-0 '>
          <Dropdown style={{ width: '100%' }} label='SHIPS' inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>

        <Button className='w-full px-5 py-2 my-5 rounded-none md:my-0'>Search</Button>
      </div>
    </div>
  );
};

export default SearchTour;
