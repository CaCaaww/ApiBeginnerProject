import './App.css';
import FetchData from './FetchData.js'
function App() {
  console.log("Chom");
  return (
    <body>
      <div className='App'>
        <h1>Latest Average:</h1>
        <p> <FetchData/> </p>
      </div>
    </body>
  );
}

export default App;
