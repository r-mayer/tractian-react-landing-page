
import './App.css';
import Header from './components/Header/Header';
import Brands from './components/Brands/Brands';
import Features from './components/Features/Features';
import Softwares from './components/Softwares/Softwares';
import WhyTractian from './components/WhyTractian/WhyTractian';
import Stats from './components/Stats/Stats';
import Solutions from './components/Solutions/Solutions';
import Footer from './components/Footer/Footer';
import ScheduleDemo from './components/ScheduleDemo/ScheduleDemo';

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <Solutions />
      <Softwares />
      <Features />
      <Stats />
      <WhyTractian />
      <ScheduleDemo />
      <Footer />
    </div>
  );
}

export default App;
