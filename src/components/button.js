
'use strict';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {
     return (
      <button onClick={() => this.setState({ isLoggedIn: true }) }>Login</button>
    );
  }
}

const domContainer = document.querySelector('#login-button');
ReactDOM.render(<Button/>, domContainer);