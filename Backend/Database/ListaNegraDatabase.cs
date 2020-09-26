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
    }
}