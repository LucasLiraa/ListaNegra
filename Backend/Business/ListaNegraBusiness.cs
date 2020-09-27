using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Business
{
    public class ListaNegraBusiness
    {
        Database.ListaNegraDatabase db = new Database.ListaNegraDatabase();
        public Models.TbListaNegra Salvar(Models.TbListaNegra ln)
        {
            if (ln.NmPessoa == string.Empty)
                throw new  Exception("Nome é obrigatório.");
            if (ln.DsMotivo == string.Empty)
                throw new  Exception("Motivo é obrigatório.");
            if (ln.DsLocal == string.Empty)
                throw new  Exception("Local é obrigatório.");

            return db.Salvar(ln);
        }

        public List<Models.TbListaNegra> Listar()
        {
            return db.Listar();
        }

        public Models.TbListaNegra Deletar(int Id)
        {
            return db.Deletar(Id);
        }

        public Models.TbListaNegra Alterar(int Id, Models.TbListaNegra Novo)
        {
            if (Novo.NmPessoa == string.Empty)
                throw new  Exception("Nome é obrigatório.");
            if (Novo.DsMotivo == string.Empty)
                throw new  Exception("Motivo é obrigatório.");
            if (Novo.DsLocal == string.Empty)
                throw new  Exception("Local é obrigatório.");

            return db.Alterar(Id, Novo);
        }
    }
}