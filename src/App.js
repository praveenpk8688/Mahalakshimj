import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 
import MainNavbar from './Components/Navbar/MainNavbar';
import MainSlider from './Components/Sliders/MainSlider';
import ProductCard from './Components/MainCards/ProductCard';
// import MainCarousel from './Components/Sliders/MainCarousel';

function App() {
  return (
    <div className="App">
   
      <MainNavbar/>
      <MainSlider/>
      <ProductCard/>
      
    </div>
  );
}

export default App;
