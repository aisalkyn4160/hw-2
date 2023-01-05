import './App.css';

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
      <img className="logo" src={obj.logo} alt='img' />
      <div className='btns'>
        <select className='lang-btn'>
          <option>{obj.btns.sel.opt1}</option>
          <option>{obj.btns.sel.opt2}</option>
        </select>
        <button className='header-btn'>{obj.btns.btn}</button>
      </div>
    </div>
  );
}

export default App;
