import { HeroSection, FeaturedSection, SearchTour, ImageGallery } from './components';
import { Footer } from '../../components';
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SearchTour />
      <ImageGallery />
      <FeaturedSection />
      <Footer />
    </>
  );
};

export default LandingPage;
