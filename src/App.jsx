
import './App.css';
import Header from './components/Header/Header';
import Brands from './components/Brands/Brands';
import Features from './components/Features/Features';
import Softwares from './components/Softwares/Softwares';
import WhyTractian from './components/WhyTractian/WhyTractian';

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <Features />
      <Softwares />
      <WhyTractian />
    </div>
  );
}

export default App;
