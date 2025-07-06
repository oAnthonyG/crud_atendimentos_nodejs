import AtendimentoModel from "../models/atendimentoModel.js";

class AtendimentoController {
  static buscar(req, res) {
    const listaAtendimentos = AtendimentoModel.listar();
    listaAtendimentos
      .then(atendimentos => res.status(200).json(atendimentos))
      .catch(error => res.status(400).json(error.message));
  }
  static criar(req, res) {
    const novoAtendimento = req.body;
    const atendimento = AtendimentoModel.criar(novoAtendimento);
    atendimento
      .then((atendimentoCriado) => res.status(201).json(atendimentoCriado))
      .catch((error) => res.status(400).json(error.message));
  }
  static atualizar(req, res) {
    const { id } = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = AtendimentoModel.atualizar(atendimentoAtualizado, id);
    atendimento
      .then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }
  static deletar(req, res) {
    const { id } = req.params;
    const atendimento = AtendimentoModel.deletar(id);
    atendimento
      .then((resultAtendimentoDeletado) => res.status(200).json(resultAtendimentoDeletado))
      .catch((error) => res.status(400).json(error.message));
  }
}

export default AtendimentoController;