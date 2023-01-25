const ImageGallery = () => {
  return (
    <div className='bg-slate-100 text-black mx-4 pb-5 mt-[100px]'>
      <h3
        className='pt-[80px] text-center leading-[45px] font-[300] text-[30px] whitespace-normal'
        style={{
          fontFamily: 'Playfair Display SC,serif',
        }}
      >
        ADVENTURE ACTIVITIES
      </h3>
      <div className='mx-auto bg-black w-[90px] h-[1px] mt-[15px]'></div>

      <p className='mx-auto text-center mt-5' style={{ maxWidth: '800px' }}>
        What is your passion? Do you want to kayak among the icebergs in Antarctica? Climb a
        mountain? Snorkel in the Arctic ocean? Search cruises with Adventure Activities by clicking
        below or refine in our search tool
      </p>

      {/* Image Gallery */}
      <div className='flex mx-auto mt-[45px] w-[60%] bg-white flex-wrap p-1'>
        <div className='flex flex-col md:flex-row'>
          <div className='h-[250px]  w-full md:h-[500px]'>
            <img
              className='w-full h-full object-cover'
              src='https://polaradventure.com/assets/media/highlights/hiking.jpg'
              alt='Polar Adventure'
            />
          </div>
          <div className='flex flex-wrap'>
            <div className='flex flex-col md:flex-row'>
              <div className='h-[250px] w-full'>
                <img
                  className='w-full h-full object-cover'
                  src='https://polaradventure.com/assets/media/highlights/kayaking.jpg'
                  alt='Polar Adventure'
                />
              </div>
              <div className='h-[250px] w-full'>
                <img
                  className='w-full h-full object-cover'
                  src='	https://polaradventure.com/assets/media/highlights/photo-workshops.jpg'
                  alt='Polar Adventure'
                />
              </div>
            </div>
            <div className='h-[250px]  w-full'>
              <img
                className='w-full h-full object-cover'
                src='https://polaradventure.com/assets/media/highlights/helicopter-tours.jpg'
                alt='polarAdventure'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-wrap'>
            <div className='flex flex-col md:flex-row'>
              <div className='h-[250px]  w-full'>
                <img
                  className='w-full h-full object-cover'
                  src='https://polaradventure.com/assets/media/highlights/todd-diemer-EdheZKM8JXs-unsplash.jpg'
                  alt='Polar Adventure'
                />
              </div>
              <div className='h-[250px]   w-full'>
                <img
                  className='w-full h-full object-cover'
                  src='	https://polaradventure.com/assets/media/highlights/skiing.jpg'
                  alt='Polar Adventure'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div className='h-[250px]  w-full'>
                <img
                  className='w-full h-full object-cover'
                  src='https://polaradventure.com/assets/media/highlights/pexels-flo-maderebner-869258.jpg'
                  alt='Polar Adventure'
                />
              </div>
              <div className='h-[250px]  w-full'>
                <img
                  className='w-full h-full object-cover'
                  src='https://polaradventure.com/assets/media/highlights/snowshoeing.jpg'
                  alt='Polar Adventure'
                />
              </div>
            </div>
          </div>
          <div className='h-[250px]  w-full md:h-[500px]'>
            <img
              className='w-full h-full object-cover'
              src='https://polaradventure.com/assets/media/highlights/snorkeling.jpg'
              alt='Polar Adventure'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
