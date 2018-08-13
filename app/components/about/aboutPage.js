import React from "react";

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>EsLint</li>
            <li>Node</li>
            <li>NPM</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    )
  }
}
export default AboutPage;
