const Services = require('./Services.js')

class NiveisServices extends Services {
    constructor() {
        super('Niveis')
    }
    //métodos específicos do controlador de Niveis

}

module.exports = NiveisServices

// CADA SERVIÇO HERDA A PARTIR DO SERVIÇO PRINCIPAL E SE ALGUM CONTROLADOR PRECISAR DE ALGUM SERVIÇO ESPECÍFICO EU ADICIONO APENAS NO ARQUIVO CORRESPONDENTE.