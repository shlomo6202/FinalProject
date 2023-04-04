using ExpanseServer.Models;
using ExpanseServer.Models.DAL;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ExpanseServer.Controllers
{
    public class UserController : ApiController
    {
        // GET api/<controller>
        public int Get()
        {
            /*User u = new User();
            return u.Read();*/
            return 1;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }


        // POST api/<controller>
        [HttpPost]
        [Route("api/User")]
        public int Post([FromBody] User user)
        {
             user.Insert();
             return 2;
        }


        [HttpPost]
        [Route("api/User/VerifyUser")]
        public int VerifyUser([FromBody] JObject userEP)
        {
            string email = userEP["email"].ToString();
            string password = userEP["password"].ToString();

            DataServices ds = new DataServices();
            User user = ds.validLoginFromDB(email, password);
            if (user.UserEmail == email && user.Password == password)
            {
                return 1;

            }
            return 0;
        }


        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
