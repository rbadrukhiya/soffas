import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header';
import Items from './item';
import Slider from './slider';
import './Media.css'
import Arrivals from './arrivals';
import Shop from './shop';
import Ourstore from './ourstore';
import Logo from './logo';
import Footer  from './footer';
import Latestblog from './latestblog';
import Bottom from './bottom-menu';

function App() {
  return (
    <>
    <Header></Header>
    <Slider></Slider>
    <Items></Items>
    <Shop></Shop>
    <Arrivals></Arrivals>
    <Ourstore></Ourstore>
    <Latestblog></Latestblog>
    <Logo></Logo>
    <Footer></Footer>
    <Bottom></Bottom>
    
    </>
  );
}

export default App;
