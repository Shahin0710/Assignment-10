import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Product from './components/Product';
import Report from './components/Report';
import Support from './components/Support';
import Team from './components/Team';

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
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
