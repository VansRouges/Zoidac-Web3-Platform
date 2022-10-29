import './App.css';
import { Route, Routes } from "react-router"
import Index from './pages/Index'
import Navbar from './components/Layout'
import NotFound from './components/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Index />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
