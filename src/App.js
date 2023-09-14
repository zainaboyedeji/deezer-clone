import ArtistDetails from './pages/artistdetails/artistdetails';
import LandingPage from './pages/landingpage/landingpage';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage/>} />
          <Route path="/artist/:id" element={<ArtistDetails/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
