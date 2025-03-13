
import './App.css';
import  MainBanner from './components/common/MainBanner';
import Home from './components/home';
import Menu from './components/common/Menu'

function App() {
  return (
    <div>
     <MainBanner img="assets/imgs/bannerMain/banner1.jpg"></MainBanner>
      <Home></Home>
      <Menu></Menu>
    </div>
  );
}

export default App;
