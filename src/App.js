import './App.css';
import HeaderBtn from './components/HeaderBtn';
import LangBtn from './components/LangBtn';
import Logo from './components/Logo';

const obj = {
  logo: 'https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png',
  btns: {
    sel: {
      opt1: 'Russian',
      opt2: 'ENglish'
    },
    btn: 'Войти'
  }
}

function App() {
  
  return (
    <div className="App">
      <Logo logo = {obj.logo}/>
      <div className='btns'>
        <LangBtn opt1 = {obj.btns.sel.opt1} opt2 = {obj.btns.sel.opt2}/>
        <HeaderBtn btn = {obj.btns.btn}/>
      </div>
    </div>
  );
}

export default App;
