const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ['http://localhost:8080'];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));
app.use(express.static('src'));
app.use(express.json({ limit: '1mb' }));

require('./routes')(app);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
});