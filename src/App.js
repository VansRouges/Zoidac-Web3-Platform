import './App.css';
import { Route, Routes } from "react-router"

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
