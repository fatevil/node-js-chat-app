const express = require('express');
const app = express();
app.use(express.static('.'));

app.listen(8000, function() {
    console.log('Client Server started (8000)');
});