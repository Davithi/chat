import { BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbarr from './components/Navbar';
import Loder from './components/Loder';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';

function App() {

  const { auth } = useContext(Context);
  const  [, loader ,  ]  = useAuthState(auth);
  
  if (loader) {
    return <Loder/>
  }

  return (
    <BrowserRouter>
        <Navbarr/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
