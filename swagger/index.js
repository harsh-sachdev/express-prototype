'use strict';
module.exports = function (app) {
    const swaggerJSDoc = require('swagger-jsdoc'),
        config = require('config'),
        appConfig = config.get('appConfig');

    const swaggerDefinition = {
        info: {
            title: `API Documentation for ${appConfig.env} environment`,
            version: '1.0.0',
            description: 'Demonstrating cover singers RESTful API with Swagger',
        },
        host: appConfig.host,
        basePath: '/'
    };

    const options = {
        swaggerDefinition: swaggerDefinition,
        apis: ['./swagger/*.js'],
    };

    const swaggerSpec = swaggerJSDoc(options);

    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}