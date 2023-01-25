import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/landingPage';

const Routes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <LandingPage />,
    },
  ]);
  return element;
};

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
