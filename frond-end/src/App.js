import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import NavBar from './components/NavBar'
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react'
function App() {

  const [sideToggle , setSideToggle] = useState(false)

  return (
    <Router>
      <NavBar click={() => setSideToggle(true)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
      {/*Home Screen*/}
      {/*ProductScreenr*/}
      {/*CartScreen*/}
    </Router>
    
  );
}

export default App;
