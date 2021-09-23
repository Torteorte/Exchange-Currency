import './App.scss';
import Head from './components/Head/Head.jsx'
import Money from './components/Money/Money.jsx'
import {Redirect, Route} from "react-router-dom";
import DetailedConverter from "./components/DetailedConverter/DetailedConverter";

function App() {

  return (
    <div className="money-converter-container">
        <Head />
        <main className="mainContainer">
            <Route exact path='/' render={() => <Redirect from="/" to="/mainpage" />} />
            <Route path='/mainpage' render={() => <Money />} />
            <Route path='/detailedconverter' render={() => <DetailedConverter />} />
        </main>


    </div>
  );
}

export default App;
