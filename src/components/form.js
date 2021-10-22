class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
}

const domContainer = document.querySelector('#login-form');
ReactDOM.render(<Form />, domContainer);