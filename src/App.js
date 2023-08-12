
import './App.css';
import {BrowserRouter,Route ,Routes} from 'react-router-dom' ;
import Header from './components/Header'
import Homepage from './Pages/HomePage';
import Coinpage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';

function App() {
  
  const useStyles = makeStyles(()=>({
    App: {
       backgroundColor : "#14161a",
       color: "white",
       minHeight:"100vh",
    }
  })) ;
  
  const classes = useStyles() ;



  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<Coinpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
