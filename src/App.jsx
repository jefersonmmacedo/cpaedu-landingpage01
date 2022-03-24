import './Global.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000} theme="colored" /> 
    <Router />
    </BrowserRouter>
  );
}

export default App;