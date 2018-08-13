import ReactDom from "react-dom";
import React from "react";
import PropTypes from 'prop-types'
import Home from "./components/app";
import AboutPage from './components/about/aboutPage';
import Header from './components/common/header'
import Authors from './components/authors/authorPage'
import 'bootstrap/dist/css/bootstrap.min.css'


  class App extends React.Component {
    render() {
      var Child;
      switch(this.props.route) {
        case 'about': Child = AboutPage; break;
        case 'home': Child = Home; break;
        case 'authors': Child = Authors; break;
        default: Child = Home;
      }
      return (
          <div>
            <Header />
            <Child />
          </div>
      );
    }
  }

  function render() {
    var route = window.location.hash.substr(1);
    ReactDom.render(
      <App route={route} />,
      document.getElementById('root')
    );
  }

  window.addEventListener('hashchange', render);
  render();

  if(module.hot) {
    module.hot.accept();
  }

  App.propTypes = {
    route: PropTypes.string
  }
