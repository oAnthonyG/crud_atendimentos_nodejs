import { Router } from "express";
import AtendimentoController from "../controllers/atendimentoController.js"
const router = Router();


//GET
router.get("/atendimentos", (req, res) => {
  const listaAtendimentos = AtendimentoController.buscar();
  listaAtendimentos
    .then(atendimentos => res.status(200).json(atendimentos))
    .catch(error => res.status(400).json(error.message));
})

//POST
router.post("/atendimentos", (req, res) => {
  const novoAtendimento = req.body;
  const atendimento = AtendimentoController.criar(novoAtendimento);
  atendimento
    .then((atendimentoCriado) => res.status(201).json(atendimentoCriado))
    .catch((error) => res.status(400).json(error.message));
})

//PUT
router.put("/atendimentos/:id", (req, res) => {
  const { id } = req.params;
  const atendimentoAtualizado = req.body;
  const atendimento = AtendimentoController.atualizar(atendimentoAtualizado, id);
  atendimento
    .then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado))
    .catch((error) => res.status(400).json(error.message));
})

//DELETE
router.delete("/atendimentos/:id", (req, res) => {
  const { id } = req.params;
  const resposta = AtendimentoController.deletar(id);
  resposta
    .then((resultAtendimentoDeletado) => res.status(200).json(resultAtendimentoDeletado))
    .catch((error) => res.status(400).json(error.message));

})


export default router