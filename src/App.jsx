import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CVEs from './pages/CVEs';
import Contact from './pages/Contact';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cves" element={<CVEs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
