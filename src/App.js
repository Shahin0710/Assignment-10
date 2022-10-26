import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Courses from './components/Courses';
import Faq from './components/Faq';
import Home from './components/Home';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageSignUp from './components/PageSignUp';
import Product from './components/Product';
import Report from './components/Report';
import Support from './components/Support';
import Team from './components/Team';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<PageLogin />} /> 
          <Route path="/signup" element={<PageSignUp />} />
          {/* ProtectedRoute */}
              <Route path="/faq" element={<ProtectedRoute><Faq /></ProtectedRoute>} /> 
              <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} /> 
              <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} /> 
              <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} /> 
              <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} /> 
              <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} /> 
              <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} /> 
          {/* ProtectedRoute */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
