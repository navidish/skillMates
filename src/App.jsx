import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';
import OwnerLayout from './features/owner/OwnerLayout';
import DashboardLayout from './features/owner/DashboardLayout';
import Projects from './pages/Projects';
import Project from './pages/Project';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardLayout />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
