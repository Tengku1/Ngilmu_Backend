const express = require('express');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const timeout = require('connect-timeout');

const models = require('./models');
const routes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.app.use(morgan('combined'));
        this.app.use(timeout(process.env.SET_TIMEOUT));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use('/public', express.static(__dirname + "/public"));

        this.app.use('/', (req, res) => {
            res.send('Hello World');
        });

        routes.forEach(route => this.app.use(route));
    }

    async listen(baseUrl, port) {
        models.sequelize.authenticate().then(() => {
            console.log('Koneksi Berhasil Terhubung.');
        }).catch(err => {
            console.error('Database Gagal Terhubung.', err);
        });

        return new Promise((resolve) => {
            this.server = this.app.listen(port || 3306, baseUrl, () => {
                console.log(`$Berjalan Di http://${baseUrl}:${port}`);
                return resolve();
            });
        });
    }
}

module.exports = Server;