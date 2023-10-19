import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='background-container'>
        <div className='background-image maruti'></div>
        <div className='background-image logo'></div>
        <div className='welcome-dot'>
          <div className='welcome'>WELCOME TO</div>
          <div className='background-image dot'></div>
        </div>
        
        <div className='heading1'>COMMERCIAL CHANNEL</div>
        <div className='heading2'>SALES MAPPING</div>
        <div className='background-image rect'></div>
        
        <div className='button1-container'>
          <button className='button'>
            <span className='button_icon'>
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </span>
            <span className='button_text'>Login as Dealer</span>
          </button>
          <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </div>
        
        <div className='button2-container'>
          <button className="button">
            <span className='button_icon'>
              <ion-icon name="arrow-forward-circle-outline" ></ion-icon>
            </span>
            <span className='button_text'>Login as Employee</span>
          </button>
          <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </div>

      </div>

    </div>
  );
}

export default App;
