import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Ticker } from './components/BrahmaUI';
import Home from './pages/Home';
import LatestNews from './pages/LatestNews';
import CategoryPage from './pages/CategoryPage';
import VideoNews from './pages/VideoNews';
import SingleArticle from './pages/SingleArticle';
import About from './pages/About';
import Contact from './pages/Contact';
import LiveUpdatesPage from './pages/LiveUpdatesPage';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative flex flex-col">
      {/* Background Atmospheric Glows - Persistent */}
      <div className="fixed top-0 left-1/4 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />

      <div className="flex-1 pt-20 md:pt-24 z-10 w-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<LatestNews />} />
          <Route path="/raipur" element={<CategoryPage title="Raipur" />} />
          <Route path="/chhattisgarh" element={<CategoryPage title="Chhattisgarh" />} />
          <Route path="/national" element={<CategoryPage title="National" />} />
          <Route path="/crime" element={<CategoryPage title="Crime" />} />
          <Route path="/politics" element={<CategoryPage title="Politics" />} />
          <Route path="/sports" element={<CategoryPage title="Sports" />} />
          <Route path="/videos" element={<VideoNews />} />
          <Route path="/article/:id" element={<SingleArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live" element={<LiveUpdatesPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
