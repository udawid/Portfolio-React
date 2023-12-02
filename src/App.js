import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Components/Create'
import BlogDetails from './Components/BlogDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/blog/:id' element={<BlogDetails/>}/>

          </Routes>
      </div>
    </Router>
  );
}

export default App;
