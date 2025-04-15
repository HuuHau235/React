
import './cooki.css';

function One() {
  return <div>Chào bạn đã đến với trang chủ React</div>
}

function cook() {
  return (
    <div className="cook">
      <header className="App-header">
        <One></One>
        <h1><One/></h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default cook;

