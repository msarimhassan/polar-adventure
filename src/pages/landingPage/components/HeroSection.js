import { Carousel } from 'flowbite-react';
import CarouselSection from './CarouselSection';
import { Header } from '../../../components';

const HeroSection = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Carousel className='rounded-none'>
        <CarouselSection
          content={'2-for-1 and 50% off Antartica deals\nClick here for more info!'}
          color='white'
          backgroundImage={
            'https://cms.polaradventure.com/res/65.21.55.51:3031/settings/main-paul-carroll-erxur1fahc4-unsplash.jpg'
          }
        />
        <CarouselSection
          content={'Solo Traveller Deals\n Click here'}
          color='white'
          backgroundImage='https://cms.polaradventure.com/res/65.21.55.51:3031/settings/main-paul-carroll-swlyfhlch_k-unsplash.jpg'
        />
        <CarouselSection
          content={'Check out our Polar Specials\nClick here'}
          color='black'
          backgroundImage={
            'https://cms.polaradventure.com/res/65.21.55.51:3031/settings/main-66-north-pkfcbicurue-unsplash.jpg'
          }
        />
      </Carousel>
    </div>
  );
};

export default HeroSection;
