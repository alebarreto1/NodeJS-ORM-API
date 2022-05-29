const { PessoasServices } = require('../services/index.js')
const pessoasServices = new PessoasServices()

class PessoaController {
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
            return res.status(200).json(pessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //findOne()
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await pessoasServices.pegaUmRegistro({ id })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //create(): Creates an object that has the specified prototype
    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //update() retorna zero ou um
    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await pessoasServices.atualizaRegistro(novasInfos, Number(id))
            return res.status(200).json({ mensagem: `id ${id} atualizado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //destroy()
    static async apagaPessoa(req, res) {
        const { id } = req.params
        try {
            await pessoasServices.apagaRegistro(Number(id))
            return res.status(200).json({ mensagem: `O id ${id} foi deletado com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //restaurar pessoa
    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            const registroRestaurado = await pessoasServices
                .restauraRegistro(Number(id))
            return res.status(200).json(registroRestaurado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //pega matrícula
    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const matriculas = await pessoasServices
                .pegaMatriculasPorEstudante({ id: Number(estudanteId) })
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //cancela pessoa
    //qnd o cadastro de um estudante -> desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.

    static async cancelaPessoa(req, res) {  
        const { estudanteId } = req.params
        try {
          await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
          return res
            .status(200)
            .json({message: `matrículas ref. estudante ${estudanteId} canceladas`}) 
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

    // MATRICULAS
    // static async pegaUmaMatricula(req, res) {
    //     const { estudanteId, matriculaId } = req.params
    //     try {
    //         const umaMatricula = await database.Matriculas.findOne({
    //             where: {
    //                 id: Number(matriculaId),
    //                 estudante_id: Number(estudanteId)
    //             }
    //         })
    //         return res.status(200).json(umaMatricula)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }
    // // CRIAR MATRICULA
    // static async criaMatricula(req, res) {
    //     const { estudanteId } = req.params //vai receber um id através dos params da requisição
    //     const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    //     try {
    //         const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
    //         return res.status(200).json(novaMatriculaCriada)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }
    // //ATUALIZA MATRICULA (precisa id da pessoa e id da matricula)
    // static async atualizaMatricula(req, res) {
    //     const { estudanteId, matriculaId } = req.params
    //     const novasInfos = req.body
    //     try {
    //         await database.Matriculas.update(novasInfos, {
    //             where: {
    //                 id: Number(matriculaId),
    //                 estudante_id: Number(estudanteId)
    //             }
    //         })
    //         //primeiro atualizou com o update
    //         //agora pedir para voltar o registro atualizado
    //         //o metodo update não volta o registro atualizado, apenas 0 ou 1
    //         const matriculaAtualizada = await database.Matriculas.findOne({
    //             where: {
    //                 id: Number(matriculaId)
    //             }
    //         })
    //         return res.status(200).json(matriculaAtualizada)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }
    // //DELETAR MATRICULA
    // static async apagaMatricula(req, res) {
    //     const { estudanteId, matriculaId } = req.params
    //     try {
    //         await database.Matriculas.destroy({ where: { id: Number(matriculaId) } })
    //         return res.status(200).json({ mensagem: `O id ${matriculaId} foi deletado` })
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }
    // //scope: { status: 'confirmado' }
    // static async pegaMatricula(req, res) {
    //     const { estudanteId } = req.params
    //     try {
    //         const pessoa = await database.Pessoas.findOne({
    //             where: { id: Number(estudanteId) }
    //         })
    //         const matriculas = await pessoa.getAulasMatriculadas()
    //         return res.status(200).json(matriculas)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }
    // //EXIBIR MATRICULAS POR TURMA
    // static async pegaMatriculasPorTurma(req, res) {
    //     const { turmaId } = req.params
    //     try {
    //         const todasAsMatriculas = await database.Matriculas
    //             .findAndCountAll({
    //                 where: {
    //                     turma_id: Number(turmaId),
    //                     status: 'confirmado'
    //                 },
    //                 limit: 10,
    //                 order: [['estudante_id', 'DESC']]
    //             });
    //         return res.status(200).json(todasAsMatriculas)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }
    // //TURMAS LOTADAS -> 2 matriculas/turma -> teste
    // static async pegaTurmasLotadas(req, res) {
    //     //passar a qtd de registros que faz com q uma turma seja considerada lotada
    //     const lotacaoTurma = 2
    //     try {
    //         const turmasLotadas = await database.Matriculas
    //             .findAndCountAll({
    //                 where: {
    //                     status: 'confirmado'
    //                 },
    //                 attributes: ['turma_id'], //passando em attrib. só o modelo do que vou trabalhar
    //                 group: ['turma_id'], // qual attrib. vai ser usado para agrupar
    //                 having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
    //             })
    //         return res.status(200).json(turmasLotadas.count)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }


}
module.exports = PessoaController