import express from 'express';
import config from './config';

const app = express();

app.get('/users', (request, response) : void => {
    console.log('Lista de Usuários');

    // JSON

    response.json([
        'Eric',
        'Alessandra',
        'Kawan',
        'Leo'
    ]);
})

app.listen(config.port, (error) => {
    if (error) {
        process.exit(1);
        return;
    }
    console.log("Servidor Iniciado");
});
