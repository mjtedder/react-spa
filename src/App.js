import React from 'react';
import Form from './components/Form';
import Details from './components/Details';
import { BrowserRouter, Route } from 'react-router-dom';

const appStyle = {
    height: '250px',
    display: 'flex'
};

const App = () => {
    return (
        <BrowserRouter>
            <div style={appStyle} className='App'>
                <Route exact path="/" component={Form} />
                <Route path="/details" component={Details} />
            </div>
        </BrowserRouter>  
    );
};

export default App;