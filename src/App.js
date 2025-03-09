
import './App.css';
import  MainBanner from './components/common/MainBanner';
import Home from './components/home/home';


function App() {
  return (
    <div>
     <MainBanner img="assets/imgs/bannerMain/banner1.jpg"></MainBanner>
      <Home></Home>
    </div>
  );
}

export default App;
