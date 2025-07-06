class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.createTabelaAtendimentos();
  }

  createTabelaAtendimentos() {
    const sql = `
    create table if not exists atendimentos(
	  id int not null auto_increment primary key,
	  data date,
	  servico varchar(100),
	  cliente varchar(100),
	  status enum("pendente", "realizado", "cancelado") default "pendente"
  );
    `;
      this.conexao.query(sql, (error) =>{
        if(error) {
          console.log('Error creating atendimentos table:');
          return;
        }
        console.log('Atendimentos table created successfully!');
      })
  }
}


export default new Tabelas();