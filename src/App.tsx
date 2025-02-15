import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import LandingPage from './pages/landing-page';
import MemeGenerator from './pages/meme-generator';
import WojoRoadMap from './pages/wojo-roadmap';
import WojoUtilities from './pages/wojo-utilities';
import MemeGallery from './pages/meme-gallery';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/meme-generator" element={<MemeGenerator />} />
          <Route path="/wojo-roadmap" element={<WojoRoadMap />} />
          <Route path="/wojo-utilities" element={<WojoUtilities />} />
          <Route path="/meme-gallery" element={<MemeGallery />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
