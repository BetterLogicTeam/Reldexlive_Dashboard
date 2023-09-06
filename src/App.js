import logo from "./logo.svg";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Canva from "./Components/Canva/Canva";

function App() {
  return (
    <div className="App" ng-app="MyApp">
      <Landing />
      <Canva />
    </div>
  );
}

export default App;
