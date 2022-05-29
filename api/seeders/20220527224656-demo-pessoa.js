'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Jorge Pereira',
        ativo: true,
        email: 'jorge@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mariana Lima',
        ativo: true,
        email: 'mariana@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cássio Arnes',
        ativo: true,
        email: 'cassio@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sabrina Vedruna',
        ativo: false,
        email: 'sabrina@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ivone Marta',
        ativo: true,
        email: 'ivone@marta.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fabiano Monteiro',
        ativo: true,
        email: 'fabiano@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
