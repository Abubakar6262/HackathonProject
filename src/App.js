import './App.scss';
import AuthContextProvider from './contexts/AuthContext';
import HandlePath from './pages/Routes';
//css file for tostify
import 'react-toastify/dist/ReactToastify.css';
//bootstrap js file
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { ToastContainer } from "react-toastify"
function App() {
  return (
    <>
      <AuthContextProvider>
          <HandlePath />
      </AuthContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
