const CarouselSection = ({ backgroundImage, content, color }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className='bg-center bg-no-repeat bg-cover h-full'
    >
      {/* Header */}

      <div className='flex items-end pb-[50px] justify-center h-screen whitespace-pre'>
        <div className={`text-${color} text-center font-bold text-[5vw] md:text-[3vw]`}>{content}</div>
      </div>
    </div>
  );
};

export default CarouselSection;
