import { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div className="mt-5 bg-warning mw-25  d-flex flex-column align-items-center justify-content-center">
        <h1 className="mb-5 mt-2">Welcome to myOnlineShop</h1>
        <h3>
          Luca's Book Shop <span>since 1256</span>
        </h3>
        <p>This Book Shop was created in 1256 from my Grandfather </p>
      </div>
    );
  }
}

export default Jumbotron;
