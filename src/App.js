import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='background-container'>
        <div className='background-image login-background-image'></div>
        <div className='background-image login-marutisuzuki-logo'></div>
        <div className='login-welcome'>
          <div className='login-welcome-text'>WELCOME TO</div>
          <div className='background-image login-welcome-image'></div>
        </div>
        
        <div className='login-heading1'>COMMERCIAL CHANNEL</div>
        <div className='login-heading2'>SALES MAPPING</div>
        <div className='background-image login-rect-image'></div>

      </div>

      <div className='button-container'>
        <div className='button1-container'>
          <button className='button'>
            <span className='button_icon'>
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </span>
            <span className='button_text'>Login as Dealer</span>
          </button>
        </div>
        
        <div className='button2-container'>
          <button className="button">
            <span className='button_icon'>
              <ion-icon name="arrow-forward-circle-outline" ></ion-icon>
            </span>
            <span className='button_text'>Login as Employee</span>
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
