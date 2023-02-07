import "./App.css";
import BookCardsFantasy from "./Components/BookCardsFantasy";
import BookCardsHistory from "./Components/BookCardsHistory";
import Jumbotron from "./Components/Jumbotron";

import MainNav from "./Components/MainNav";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Jumbotron />
      <div className="w-100 d-flex flex-wrap mt-3  justify-content-around">
        <BookCardsFantasy />
        <BookCardsHistory />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
