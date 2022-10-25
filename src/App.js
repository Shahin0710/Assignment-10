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

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<PageLogin />} /> 
          <Route path="/signup" element={<PageSignUp />} /> 
          <Route path="/faq" element={<Faq />} /> 
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/report" element={<Report />} /> 
          <Route path="/product" element={<Product />} /> 
          <Route path="/team" element={<Team />} /> 
          <Route path="/support" element={<Support />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
