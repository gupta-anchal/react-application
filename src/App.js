import './App.css';
import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success")
    }
  }

  const toggleRedMode = () => {
      setMode('danger');  
      document.body.style.backgroundColor = '#660101';
      showAlert("Red Mode has been Enabled", "success")
  }

  const toggleBlueMode = () => {
      setMode('primary');  
      document.body.style.backgroundColor = '#042743';
      showAlert("Blue Mode has been Enabled", "success")
  }

  const toggleGreenMode = () => {
      setMode('success');  
      document.body.style.backgroundColor = '#1a3301';
      showAlert("Green Mode has been Enabled", "success")
  }

  return (
    <div className="App">
  <Header mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode} toggleGreenMode={toggleGreenMode} toggleRedMode={toggleRedMode} alert={alert} />
  <Main mode={mode} showAlert={showAlert} />
  {/* <Footer/> */}
    </div>
  );
}

export default App;
