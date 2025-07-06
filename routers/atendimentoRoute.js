import { Router } from "express";
import AtendimentoController from "../controllers/atendimentoController.js"
const router = Router();

//GET
router.get("/atendimentos", AtendimentoController.buscar)

//POST
router.post("/atendimentos", AtendimentoController.criar)

//PUT
router.put("/atendimentos/:id", AtendimentoController.atualizar)

//DELETE
router.delete("/atendimentos/:id", AtendimentoController.deletar)

export default router