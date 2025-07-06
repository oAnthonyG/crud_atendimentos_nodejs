import conexao from "../infraestrutura/conexao.js";

class AtendimentoModel {
  static listar() {
    const sql = 'SELECT * FROM atendimentos';
    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, resposta) => {
        if (error) {
          console.lohg("Deu erro no listar...");
          reject(error);
        }
        console.log("Deu certo no listar...");
        resolve(resposta);
      });
    })
  }
  static criar(novoAtendimento) {
    const sql = 'INSERT INTO atendimentos SET ?';
    return new Promise((resolve, reject) => {
      conexao.query(sql, novoAtendimento, (error, resposta) => {
        if (error) {
          console.log("Deu erro no criar...");
          reject(error);
        }
        console.log("Atendimento criado com sucesso!");
        resolve(resposta);
      })
    })
  }
  static atualizar(atendimentoAtualizado, id) {
    const sql = 'UPDATE atendimentos SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
        if (error) {
          console.log("Deu erro no criar...");
          reject(error);
        }
        console.log("Atendimento atualizado com sucesso!");
        resolve(resposta);
      })
    })
  }
  static deletar(id) {
    const sql = 'DELETE FROM atendimentos WHERE id = ?';
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, resposta) => {
        if (error) {
          console.log("Deu erro no deletar...");
          reject(error);
        }
        console.log("Atendimento deletado com sucesso!");
        resolve(resposta);
      })
    })
  }
}




export default AtendimentoModel;