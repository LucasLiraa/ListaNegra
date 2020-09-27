using System;
namespace Backend.Models.Request
{
    public class ListaNegraRequest
    {
        public string Nome {get; set;}
        public string Motivo {get; set;}
        public string Local {get; set;}
        public DateTime? Inclusão {get; set;}
    }
}