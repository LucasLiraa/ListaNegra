using System;
using System.Collections.Generic;

namespace Backend.Utils
{
    public class ListaNegraConversor
    {
         public Models.TbListaNegra ParaTabela(Models.Request.ListaNegraRequest request)
         {
             Models.TbListaNegra ln = new Models.TbListaNegra();
             ln.NmPessoa = request.Nome;
             ln.DsMotivo = request.Motivo;
             ln.DsLocal = request.Local; 
             ln.DtInclusão = request.Inclusão;

             return ln;
         }

        public Models.Response.ListaNegraResponse ParaResponse(Models.TbListaNegra ln)
        {
            Models.Response.ListaNegraResponse resp = new Models.Response.ListaNegraResponse();
            resp.Id = ln.IdListaNegra;
            resp.Nome = ln.NmPessoa;
            resp.Motivo = ln.DsMotivo;
            resp.Local = ln.DsLocal;
            resp.Inclusão = ln.DtInclusão;
                
            return resp;
        }

        public List<Models.Response.ListaNegraResponse> ParaResponse(List<Models.TbListaNegra> lns)
        {
            List<Models.Response.ListaNegraResponse> resp = new List<Models.Response.ListaNegraResponse>();
            foreach (Models.TbListaNegra item in lns)
            {
                resp.Add(
                    this.ParaResponse(item));
            }
            return resp;
        }
    }
}
