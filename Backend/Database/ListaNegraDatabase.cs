using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Backend.Database
{
    public class ListaNegraDatabase
    {
        Models.listanegradbContext db = new Models.listanegradbContext();
        public Models.TbListaNegra Salvar(Models.TbListaNegra ln)
        {
             db.Add(ln);
             db.SaveChanges();

             return ln;
        }

        public List<Models.TbListaNegra> Listar()
        {
             List<Models.TbListaNegra> lns = db.TbListaNegra.ToList();
             return lns;
        }

        public Models.TbListaNegra Deletar(int Id)
        {
             Models.TbListaNegra ln = db.TbListaNegra.FirstOrDefault( x => x.IdListaNegra == Id);
                if(ln != null)
                {
                    db.TbListaNegra.Remove(ln);
                    db.SaveChanges();
                }
             return ln;
        }

        public Models.TbListaNegra Alterar(int Id, Models.TbListaNegra Novo)
        {
             Models.TbListaNegra ln = db.TbListaNegra.FirstOrDefault( x => x.IdListaNegra == Id);
                if(ln != null)
                {
                    ln.NmPessoa = Novo.NmPessoa;
                    ln.DsMotivo = Novo.DsMotivo;
                    ln.DsLocal = Novo.DsLocal;
                    ln.DtInclusão = Novo.DtInclusão;

                    db.SaveChanges();
                }
             return ln;
        }
    }
}