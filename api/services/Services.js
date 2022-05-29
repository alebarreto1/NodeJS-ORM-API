//os métodos de CONEXÃO com o mysql são comuns a todos os modelos, LOGO, a classe Services tem que trabalhar com vários modelos.

const database = require('../models')

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } })
  }

  async pegaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } })
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModelo].create(dados)
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo]
      .update(dadosAtualizados, { where: { id: id } }, transacao)
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModelo]
      .update(dadosAtualizados, { where: { ...where } }, transacao)
  }

  async apagaRegistro(id) {
    return database[this.nomeDoModelo].destroy({ where: { id: id } })
  }

  async restauraRegistro(id) {
    return database[this.nomeDoModelo].restore({ where: { id: id } })
  }

  async consultaRegistroApagado(id) {
    return database[this.nomeDoModelo]
      .findOne({ paranoid: false, where: { id: Number(id) } })
  }

  async encontraEContaRegistros(where = {}, agregadores) {
    return database[this.nomeDoModelo]
      .findAndCountAll({ where: { ...where }, ...agregadores })
  }

}

module.exports = Services

// CONTROLADORES PODEM CONTINUAR CUIDANDO DA VALIDAÇÃO, RECEBER AS REQUISIÇÕES HTTP, RECEBER OS DADOS. 
// ENTÃO OS CONTROLADORES ENVIAM ISSO PARA UM SERVIÇO E RETORNA A RESPOSTA DO SERVIÇO.

// OS SERVIÇOS SE CONECTAM COM A DATABASE, PROCESSAM OS DADOS COM OS MÉTODOS SEQUELIZE E MANDAM DE VOLTA PARA QM PEDIU NO CONTROLADOR.
