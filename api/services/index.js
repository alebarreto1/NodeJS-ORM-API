const PessoasServices = require('./PessoasServices')
const TurmasServices = require('./TurmasServices')
const NiveisServices = require('./NiveisServices')
const MatriculasServices = require('./MatriculasServices')

module.exports = {
    PessoasServices: PessoasServices,
    TurmasServices: TurmasServices,
    NiveisServices: NiveisServices,
    MatriculasServices: MatriculasServices
}

// O INDEX.JS QUE VAI SER A PORTA DE ENTRADA DA PASTA DE SERVIÇOS
// vai distribuir os arquivos conforme forem chamados.
