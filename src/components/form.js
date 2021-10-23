const { useState } = React;

const Form = () => {

    const [field, setField] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        validateUserCreds();
        sendUserData();
    };

    const validateUserCreds = () => {
        if (field.username === 'Fabric' && field.password === 'password1') {
            return true;
        } else {
            alert('Invalid User Credentials!');
        }
    }

    const sendUserData = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(field)
        }
        try {
            const response = await fetch('/api', options);
            if (response.status === 200) {
                redirectAuthenticatedUser();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const redirectAuthenticatedUser = () => {
        window.location.assign('/info');
    };

    return (
        <div>
            <form>
                <label>Username:</label>
                <input type="text" name="username" value={field.username} onChange={handleChange} />
                <label>Password:</label>
                <input type="text" name="password" value={field.password} onChange={handleChange} /> 
                <button onClick={handleFormSubmit}>Login</button>
            </form>
        </div>
    )
}

const domContainer = document.querySelector('#login-form');
ReactDOM.render(<Form />, domContainer);