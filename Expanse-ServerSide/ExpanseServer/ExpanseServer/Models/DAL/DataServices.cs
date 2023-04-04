using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Configuration;

namespace ExpanseServer.Models.DAL
{
    public class DataServices
    {
        private SqlConnection Connect()
        {
            // read the connection string from the web.config file
            string connectionString = WebConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;

            // create the connection to the db
            SqlConnection con = new SqlConnection(connectionString);

            // open the database connection
            con.Open();

            return con;
        }



        //----------------Valid and login user----------------------------------------
        public User validLoginFromDB(String mail, String password)
        {
            SqlConnection con = Connect();

            try
            {
                String selectSTR = "SELECT * FROM Users WHERE userEmail =" + "'" + mail + "'" + " and password = " + "'" + password + "' ";
                SqlCommand cmd = new SqlCommand(selectSTR, con);

                //get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);// CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
                User user = new User();

                while (dr.Read())
                {
                    //read till the end of the data per row
                    user.UserEmail = (String)dr["userEmail"];
                    user.Password = (String)dr["password"];
                    user.FirstName = (String)dr["firstName"];
                    user.LastName = (String)dr["lastName"];
                }
                return user;
            }
            catch (Exception ex)
            {
                //write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }
            }
        }




        public int Insert(User user)
        {
            SqlConnection con = Connect();

            // Create Command
            SqlCommand command = CreateInsertCommand(con, user);

            // Execute
            int numAffected = command.ExecuteNonQuery();

            // Close Connection

            con.Close();

            return numAffected;

        }
        private SqlCommand CreateInsertCommand(SqlConnection con, User user)
        {

            SqlCommand command = new SqlCommand();

            command.Parameters.AddWithValue("@userEmail", user.UserEmail);
            command.Parameters.AddWithValue("@password", user.Password);
            command.Parameters.AddWithValue("@firstName", user.FirstName);
            command.Parameters.AddWithValue("@lastName", user.LastName);

            command.CommandText = "spInsertUsers";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }




        public Expanse Insert(Expanse expanse)
        {
            SqlConnection con = Connect();

            // Create Command
            SqlCommand command = CreateInsertCommand(con, expanse);

            // Execute
            int numAffected = command.ExecuteNonQuery();

            string query = @" SELECT MAX(expensesId) FROM [dbo].[Expenses] ";
            SqlCommand myCommand2 = new SqlCommand(query, con);
            int expensesId = (Int32)myCommand2.ExecuteScalar();

            expanse.ExpensesId = expensesId;

            /*string query1 = $"INSERT INTO [dbo].[UserExpens] ([userEmail],[expensesId]) VALUES (@userEmail,@expensesId)";
            SqlCommand command3 = new SqlCommand(query1, con);
            command3.Parameters.AddWithValue("@userEmail", expanse.Email);
            command3.Parameters.AddWithValue("@expensesId", expensesId);
            command3.ExecuteNonQuery();*/

            


            // Close Connection
            con.Close();

            return expanse;

        }
        private SqlCommand CreateInsertCommand(SqlConnection con, Expanse expanse)
        {

            SqlCommand command = new SqlCommand();

            command.Parameters.AddWithValue("@date", expanse.Date);
            command.Parameters.AddWithValue("@name", expanse.Name);
            command.Parameters.AddWithValue("@sum", expanse.Sum);
            command.Parameters.AddWithValue("@description", expanse.Description);
            command.Parameters.AddWithValue("@email", expanse.Email);
            command.Parameters.AddWithValue("@category", expanse.Category);


            command.CommandText = "spInsertExpanse";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }



        //-------------Get expanses by Email----------------

        public List<Expanse> GetUser_Expanses(String email)
        {

            SqlConnection con = Connect();
            List<Expanse> userExpansesList = new List<Expanse>();

            SqlCommand cmd = CreateGetUser_Expanses(con, email);

            //get a reader
            SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);// CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end


            while (dr.Read())
            {
                //read till the end of the data per row
                Expanse userExpanses = new Expanse();

                userExpanses.ExpensesId = Convert.ToInt16(dr["expensesId"]);
                userExpanses.Date = (String)dr["date"];
                userExpanses.Name = (String)dr["name"];
                userExpanses.Sum = Convert.ToInt16(dr["sum"]);
                userExpanses.Description = (String)dr["description"];
                userExpanses.Email = (String)dr["email"];
                userExpanses.Category = (String)dr["category"];

                userExpansesList.Add(userExpanses);
            }
            con.Close();
            return userExpansesList;


        }

        private SqlCommand CreateGetUser_Expanses(SqlConnection con, String email)
        {

            SqlCommand command = new SqlCommand();

            command.Parameters.AddWithValue("@email", email);

            command.CommandText = "SPGetExpansesByEmail";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }



        public int Delete1(int Id)
        {
            SqlConnection con = Connect();

            // Create Command
            SqlCommand command = CreateDeleteProduct(con, Id);

            int numAffected = command.ExecuteNonQuery();

            con.Close();

            return numAffected;
        }
        private SqlCommand CreateDeleteProduct(SqlConnection con, int Id)
        {

            SqlCommand command = new SqlCommand();

            command.Parameters.AddWithValue("@expensesId", Id);

            command.CommandText = "SPDeleteExpanse_byId";
            command.Connection = con;
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.CommandTimeout = 10; // in seconds

            return command;
        }



















    }



}
