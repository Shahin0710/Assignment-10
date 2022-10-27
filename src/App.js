import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Checkout from './components/Courses/Checkout';
import CourseDetails from './components/Courses/CourseDetails';
import Courses from './components/Courses/Courses';
import ReactToPdf from './components/Courses/ReactToPdf';
import Home from './components/Home';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageSignUp from './components/PageSignUp';
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
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/courses/detail" element={<CourseDetails />} /> 
          {/* ProtectedRoute */}
              <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} /> 
              <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} /> 
              <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} /> 
              <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} /> 
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} /> 
              <Route path="/react_to_pdf" element={<ProtectedRoute><ReactToPdf /></ProtectedRoute>} /> 
          {/* ProtectedRoute */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
