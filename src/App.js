import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Notfound from './components/Notfound';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Makepayment from './components/Makepayment';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1
        >Welcom to Sokogarden</h1>
      </header>
      <nav>
        <Link to="/" className='btn btn-primary btn-sm m-2'>Home</Link>
        <Link to="/addproducts" className='btn btn-primary btn-sm m-2'>Add Products</Link>
        <Link to="/signin" className='btn btn-primary btn-sm m-2'>Signin</Link>
        <Link to="/signup" className='btn btn-primary btn-sm m-2'>Sign up</Link>
        
      </nav>
      {/*Below are our different routes together with the rendered components*/}
      <Routes>
        <Route path='/' element= {<Getproducts />} />
        <Route path='/addproducts' element= {<Addproducts/>} />
        <Route path='/signin' element= {<Signin/> } />
        <Route path='/signup' element= {<Signup />} />
        <Route path='/makepayment' element={<Makepayment/>} />
        <Route path='*' element= {<Notfound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
