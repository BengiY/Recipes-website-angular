using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication1.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]

    public class UsersController : ApiController
    {
        public IHttpActionResult GettAllUsers()
        {
            return Ok(DB.userList);
        }
        [HttpPost]
        public IHttpActionResult UserFound(User u)
        {
            foreach (var i in DB.userList)
            { 
                if (i.UserName == u.UserName)
                {
                    if (i.Password == u.Password)

                        return Ok(true);

                    return Ok(u.Password);
                }
            }
            return Ok(false);

        }
        [HttpPost]
        public IHttpActionResult AddUser(User u)
        {
            DB.userList.Add(new User {UserName=u.UserName,Adress=u.Adress,Email=u.Email,Password=u.Password});
            return Ok(u.UserName);
        }
    }
}
