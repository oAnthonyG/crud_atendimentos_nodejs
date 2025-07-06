import AtendimentoModel from "../models/atendimentoModel.js";

class AtendimentoController {
  static buscar() {
    return AtendimentoModel.listar();
  }
  static criar(novoAtendimento) {
    return AtendimentoModel.criar(novoAtendimento);
  }
  static atualizar(atendimentoAtualizado, id) {
    return AtendimentoModel.atualizar(atendimentoAtualizado, id);
  }
  static deletar(id) {
    return AtendimentoModel.deletar(id);
  }
}

export default AtendimentoController;