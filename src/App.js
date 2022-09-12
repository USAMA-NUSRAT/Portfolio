
import './App.css';
import Profile from './Components/Home/Profile';
import { BrowserRouter} from "react-router-dom";
import Components from './Components/Components';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Components />
     </BrowserRouter>
    </div>
  );
}

export default App;
