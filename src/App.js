import React from 'react';
import Form from './components/Form';

const appStyle = {
    height: '250px',
    display: 'flex'
};

const App = () => {
    return (
        <div style={appStyle} className='App'>
            <Form />
        </div>
    );
};

export default App;