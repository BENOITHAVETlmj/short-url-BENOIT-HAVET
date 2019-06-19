import React, { Component } from "react";
import AdressList from "./Components/AdressList";
import InputAdress from "./Components/InputAdress";
import axios from "axios";
import "../src/index.css";
import Alert from "../src/Components/Alert";

class App extends Component {
  state = {
    adressList: "",
    originalUrl: "",
    shortUrl: "",
    isLoading: true,
    visits: 0,
    status: null
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ originalUrl: e.target.value });
    console.log(this.state.originalUrl);
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.originalUrl);
    if (this.state.originalUrl) {
      await axios
        .post("http://localhost:3001/create/url", {
          originalUrl: this.state.originalUrl
        })
        .then(response => {
          // on spread le tableau de la data et push dans ce tableau les newURL
          // Pour ne pas avoir à rafraîchir la page
          const listUrl = [...this.state.adresslist];
          const newUrl = {
            originalUrl: response.data.originalUrl,
            shortUrl: response.data.shortUrl,
            visits: response.data.visits
          };
          listUrl.push(newUrl);
          this.setState({ adresslist: listUrl, status: 200 }, () =>
            this.setState({ status: null })
          );
        })
        .catch(error =>
          this.setState({ status: error.response.status }, () =>
            this.setState({ status: null })
          )
        );
    } else {
      alert(this.state.status);
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Alert {...this.state} />
        <InputAdress
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <AdressList {...this.state} />
      </div>
    );
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/");
    console.log(response.data);

    this.setState({
      adressList: response.data,
      isLoading: false
    });
  }
}

export default App;
