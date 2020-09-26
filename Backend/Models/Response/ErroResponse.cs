namespace Backend.Models.Response
{
    public class ErroResponse
    {
         public int Código {get; set;}
         public string Erro {get; set;}

         public ErroResponse(int código, string erro)
         {
             this.Código = código;
             this.Erro = erro;
         }
    }
}