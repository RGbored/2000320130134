import './App.css';
import axios from "axios";
import Train from './Train';
function App() {
  var trains;
  axios.get('http://localhost:8080/trains').then((res)=>{trains = res.data; console.log(trains);}).catch(console.log);
  return (
    <div className="App">
      {trains}
      {/* {trains.array.forEach(element => {
        // <Train trian = {element}/>
      })} */}
    
      {/* {trains.map((trian)=>{<Train trian = {trian}/>})} */}
    </div>
  );
}

export default App;
