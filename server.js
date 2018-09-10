const express = require('express');
const next = require('next');

const app = next({dev: process.env.NODE_ENV !== 'production'});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/good-page', (req, res) => {
            const page = '/GoodPage';
            app.render(req, res, page);
        });

        server.get('/bad-page', (req, res) => {
            const page = '/BadPage';
            app.render(req, res, page);
        });

        server.get('/numbers/:number', (req, res) => {
            const page = '/Number';
            const queryParams = {number: req.params.number};
            app.render(req, res, page, queryParams);
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3002, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3002')
        })
    })
    .catch((e) => {
        console.error(e.stack);
        process.exit(1)
    });
