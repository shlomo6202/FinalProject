using ExpanseServer.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExpanseServer.Models
{
    public class Expanse
    {

        int expensesId;
        string date;
        string name;
        int sum;
        string description;
        string email;
        string category;

        public Expanse() { }

        public Expanse(int expensesId, string date, string name, int sum, string description, string email, string category)
        {
            this.ExpensesId = expensesId;
            this.Date = date;
            this.Name = name;
            this.Sum = sum;
            this.Description = description;
            this.Email = email;
            this.Category = category;
        }

        public int ExpensesId { get => expensesId; set => expensesId = value; }
        public string Date { get => date; set => date = value; }
        public string Name { get => name; set => name = value; }
        public int Sum { get => sum; set => sum = value; }
        public string Description { get => description; set => description = value; }
        public string Email { get => email; set => email = value; }

       

        public string Category { get => category; set => category = value; }


        public Expanse Insert()
        {
            DataServices ds = new DataServices();
            Expanse expanse = ds.Insert(this);
            return expanse;

        }

        public List<Expanse> GetUser_Expanses(String email)
        {
            DataServices DB = new DataServices();
            return DB.GetUser_Expanses(email);
        }


        public int Delete(int id)
        {
            DataServices ds = new DataServices();           
            return ds.Delete1(id);

        }



    }
}