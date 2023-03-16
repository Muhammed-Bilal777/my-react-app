
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout/'
import './App.scss';

function App() {
  return (
     <>    <h1>checking why components are not rendering</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
           
            {/* <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Route>
       </Routes>    
     </>
  );
}

export default App;
