import './App.css';
import { Footer, Header } from './components/templates';
import Routes from './pages/Routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
