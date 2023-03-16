
import { Route, Routes } from 'react-router-dom'
import './App.scss';
import Home from './components/Home'
import Layout from './components/Layout/'

function App() {
  return (
     <>  
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <h1>checking why components are not rendering</h1>
            {/* <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Route>
       </Routes>    
     </>
  );
}

export default App;
