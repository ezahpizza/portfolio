import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route path="/GalleryPage" element={<GalleryPage />} />
            </Routes>
        </Router>
    );
}

export default App;
