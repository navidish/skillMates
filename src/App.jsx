import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
