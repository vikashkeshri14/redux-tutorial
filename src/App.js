import "./App.css";
import HomeController from "./container/HomeContainer";
import HeaderContainer from "./container/HeaderContainer";
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeController />
    </div>
  );
}

export default App;
