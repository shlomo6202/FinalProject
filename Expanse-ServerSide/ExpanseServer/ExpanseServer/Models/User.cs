using ExpanseServer.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExpanseServer.Models
{
    public class User
    {
        string userEmail;
        string password;
        string firstName;
        string lastName;
        //int []

        public User() { }

        public User(string userEmail, string password, string firstName, string lastName)
        {
            this.UserEmail = userEmail;
            this.Password = password;
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public string UserEmail { get => userEmail; set => userEmail = value; }
        public string Password { get => password; set => password = value; }
        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }


        public int Insert()
        {
            DataServices ds = new DataServices();
            int numInserted = ds.Insert(this);
            return numInserted;
        }

       /* public List<User> Read()
        {
            DataServices ds = new DataServices();
            List<User> uList = ds.ReadAllRecipes();
            return uList;
        }*/






    }
}