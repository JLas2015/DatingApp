using System.Collections.Generic;
using System.Threading.Tasks;
using Dating.API.Helpers;
using Dating.API.Models;

namespace Dating.API.Data
{
    public interface IDatingRepository
    {
         void Add<T>(T entity) where T : class;
         
         void Delete<T>(T entity) where T : class;

         Task<User> GetUser(int id);
         
         Task<bool> SaveAll();
         
         Task<PagedList<User>> GetUsers(UserParams userParams);

         Task<Photo> GetPhoto(int id);

         Task<Photo> GetMainPhotoForUser(int userId);

         Task<Like> GetLike(int userId, int recipientId);
    }
}