using ExpanseServer.Models;
using ExpanseServer.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ExpanseServer.Controllers
{
    public class ExpanseController : ApiController
    {
        // GET api/<controller>
        public int Get()
        {
            /*Expanse e = new Expanse();
            return e.Read();*/
            return 1;
        }

        // GET api/<controller>/5
        public List<Expanse> Get(String email)
        {
            DataServices ds = new DataServices();
            List<Expanse> userExpanses = ds.GetUser_Expanses(email);
            return userExpanses;
        }

        // POST api/<controller>
        public Expanse Post([FromBody] Expanse expanse)
        {
            return expanse.Insert();
            
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        
        [HttpDelete]
        [Route("api/Expanse/DeleteExpanse")]
        // DELETE api/<controller>/5
        public int Delete([FromBody] int id)
        {
            Expanse e = new Expanse();
            return e.Delete(id);
           
        }
    }
}