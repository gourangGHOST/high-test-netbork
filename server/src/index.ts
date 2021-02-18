import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

const app = express();
let port = process.env.PORT || 3000;
let httpServer = http.createServer(app);

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});

httpServer.listen(port, () => {
    console.log(`Server listening on *:${port}`);
});