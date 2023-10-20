import { useEffect } from 'react';
import {
  BrowserRouter,
  Routers,
  Route,
  useLocation
} from 'react-route-dom';
import Home from "./scenes/home/Home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return <div className="app">
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
