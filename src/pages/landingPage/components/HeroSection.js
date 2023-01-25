import { Carousel } from 'flowbite-react';
import CarouselSection from './CarouselSection';
import { Header } from '../../../components';

const HeroSection = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Carousel className='rounded-none'>
        <CarouselSection
          backgroundImage={
            'https://cms.polaradventure.com/res/65.21.55.51:3031/settings/main-paul-carroll-erxur1fahc4-unsplash.jpg'
          }
        />
        <CarouselSection
          backgroundImage={
            'https://cms.polaradventure.com/res/65.21.55.51:3031/settings/main-66-north-pkfcbicurue-unsplash.jpg'
          }
        />

        <CarouselSection backgroundImage='	https://cms.polaradventure.com/res/65.21.55.51:3031/settings/main-paul-carroll-swlyfhlch_k-unsplash.jpg' />
      </Carousel>
    </div>
  );
};

export default HeroSection;
