import { Suspense } from 'react';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import TripSearch from './pages/tripSearch';
import { Header } from './components';

const Routes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/find-a-cruise',
      element: <TripSearch />,
    },
  ]);
  return element;
};

const App = () => {
  return (
    <Suspense>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Suspense>
  );
};

export default App;
