const CarouselSection = ({ backgroundImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className='bg-center bg-no-repeat bg-cover h-full'
    >
      {/* Header */}

      <div className='flex items-end pb-[50px] justify-center h-screen'>
        <h1 className='text-white text-[4vw]'>Welcome to Polar Adventure</h1>
      </div>
    </div>
  );
};

export default CarouselSection;
