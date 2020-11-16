import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import LastImage from './components/LastImage.js';
import SearchImage from './components/SearchImage.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link exact={true} to="/">Home</Link>
          <Link to="/lastphotos">Ultime Immagini Caricate</Link>
        </nav>
        <SearchImage />
        <Switch>
          <Route exact={true} path="/" ></Route>
          <Route path="/lastphotos" children={<LastImage/>}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )

}

export default App;
