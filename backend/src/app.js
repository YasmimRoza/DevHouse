import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import routes from './routes';

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb://localhost:27017/devhouse', {
            useNewUrlParser: true, useUnifiedTopology: true
        });

        this.middlewares();
        this.routes();
    }

    middlewares(){

        //Isto permite a visualização da imagem
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;