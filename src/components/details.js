const { useState, useEffect } = React;

const Details = () => {
    
    const [username, setUserName] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [currentDir, setCurrentDir] = useState('');

    //hook for componentDidMount
    useEffect(() => {
        getUserNameFromDB();
        getCurrentDateTime();
        getDirectoryPath();
    });

    // methods
    const getCurrentDateTime = async () => {
        try {
            const returnedPromise = await fetch('/api/date-time', { method: 'GET' });
            const response = await returnedPromise.json();
            setDateTime(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getDirectoryPath = async () => {
        try {
            const returnedPromise = await fetch('/api/directory', { method: 'GET' });
            const resolvedPromise = await returnedPromise.json();
            setCurrentDir(resolvedPromise.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getUserNameFromDB = async () => {
        try {
            const response = await fetch('/api/user', { method: 'GET' });
            const user = await response.json();
            setUserName(user.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogOut = async () => {
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(username)
        }

        try {
            const response = await fetch('/api/logout', options);
            if (response.status === 200) {
                redirectToLoginPage();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const redirectToLoginPage = () => {
        window.location.assign('/');
    }

    return (
        <div>
            <h3>Username</h3>
            <p>{username}</p>
            <h3>Current Time</h3>
            <p>{dateTime}</p>
            <h3>Directory</h3>
            <p>{currentDir}</p>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Details />, domContainer);