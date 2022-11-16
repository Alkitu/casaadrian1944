import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Menu } from './screens';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu/:id" element={<Menu/>}/>
      </Routes>
      
    </>
  );
}

export default App;
