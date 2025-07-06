import conexao from "../infraestrutura/conexao.js";

class AtendimentoModel {
  static executaQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          reject(error);
        }
        resolve(resposta);
      });
    });
  }
  static listar() {
    const sql = 'SELECT * FROM atendimentos';
    return this.executaQuery(sql);
  }
  static criar(novoAtendimento) {
    const sql = 'INSERT INTO atendimentos SET ?';
    return this.executaQuery(sql, novoAtendimento)
  }
  static atualizar(atendimentoAtualizado, id) {
    const sql = 'UPDATE atendimentos SET ? WHERE id = ?';
    return this.executaQuery(sql, [atendimentoAtualizado, id]);
  }
  static deletar(id) {
    const sql = 'DELETE FROM atendimentos WHERE id = ?';
    return this.executaQuery(sql, id)
  }
}




export default AtendimentoModel;