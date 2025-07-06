import routerAtendimento from './atendimentoRoute.js';


export default (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerAtendimento);
}
