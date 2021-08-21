
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="./1.png" className="imgg" alt="" />
      <p className="para">Connect with Us!</p>
      <br /><br />
      <div className="rect">
        <p className="mail">Mail for Collaboration</p>
        <p>
          <label></label>
          <input class="w3-input" type="text" /></p>
        <button class="button">Mail</button>
      </div>
      <a href="https://www.youtube.com" target="_blank"> <img src="/y.png" className="link1" alt="" /></a>
      <a href="https://www.linkedin.com" target="_blank">  <img src="/l.png" className="link2" alt="" /></a>
      <a href="https://www.telegram.com" target="_blank"><img src="/t.png" className="link3" alt="" /></a>
      <a href="https://www.whatsapp.com" target="_blank"><img src="/w.png" className="link4" alt="" /></a>

    </div>
  );
}

export default App;
