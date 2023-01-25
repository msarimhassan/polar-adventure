import { Button } from 'flowbite-react';

const FeaturedSection = () => {
  const TourCard = ({ img, title, departure, arrival, startDate, endDate, ship }) => {
    return (
      <div className='border-[1px] drop-shadow-lg w-[300px] m-3 md:w-[400px]'>
        <div>
          <img
            className='w-full h-[200px] object-cover'
            alt='trip'
            src='https://polarweb.s3.ca-central-1.amazonaws.com/hurtigruten-expeditions/760620760639/main-tender-boat-excursion-neko-harbour-antarctica--hgr-129231_1920-_photo_karsten_bidstrup.jpg'
          />
        </div>
        <div className='p-5'>
          <p className='font-bold '>Crossing the Circle: Southern Expedition</p>
        </div>
        <div className='bg-[#eee] p-5 flex items-center justify-center'>
          <div className='w-[180px] text-[14px]'> Departure: Ushuaia </div>
          <div className='w-[180px] text-[14px]'>Arrival: Ushuaia</div>
        </div>
        <div className='p-5 flex items-center justify-center'>
          <div className='w-[180px] text-[14px]'>Start date: Feb 5, 2023</div>
          <div className='w-[180px] text-[14px]'>End date: Feb 17, 2023</div>
        </div>
        <div className='bg-[#eee] p-5 flex text-[14px]'>
          <p>Ship: World Explorer 13 Days, From $15,895</p>
        </div>
        <Button className='w-full h-[50px] md:h-[50px]' style={{ borderRadius: '0px' }}>
          Show Cruise
        </Button>
      </div>
    );
  };
  return (
    <div>
      <h3
        className='pt-[40px] text-center leading-[45px] font-[300] text-[30px] whitespace-normal'
        style={{
          fontFamily: 'Playfair Display SC,serif',
        }}
      >
        FEATURED ADVENTURES
      </h3>
      <p className='mx-auto text-center mt-1 max-w-[800px]'>
        Need somewhere to start? These are some of our most popular Polar Cruises.
      </p>

      <div className='flex flex-wrap flex-row justify-center mb-[100px]'>
        {Array(6)
          .fill(0)
          .map((index) => {
            return <TourCard key={index} />;
          })}
      </div>
    </div>
  );
};

export default FeaturedSection;
