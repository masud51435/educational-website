import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/header/Header';
import About from './component/header/navbar/about/About';
import Home from './component/home/Home';
import Error from './component/error/Error';
import Catagories from './component/catagories/Catagories';
import Footer from './component/footer/Footer';
import Contract from './component/contract/Contract';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Catagories></Catagories>
          </Route>
          <Route path="/contract">
            <Contract></Contract>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
