
import './App.css';
import Historia from './components/Historia';
import MainTitle from './components/MainTitle';
import TopBar from './components/TopBar';
import Menu from './components/Menu';
import Donde from './components/Donde';
import Reservas from './components/Reservas';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <div>
        <div>
          <TopBar />
          {/* <MainTitle /> */}
          <Historia />
          <Menu />
        </div>

        <div>
          <Donde />
          <Reservas />
          <Footer />

        </div>
      </div>
    </>

  );
}

export default App;
