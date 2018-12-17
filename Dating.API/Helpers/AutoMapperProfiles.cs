using System;
using System.Linq;
using AutoMapper;
using Dating.API.DTO;
using Dating.API.Models;

namespace Dating.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                    .ForMember(dest => dest.PhotoUrl, option => {
                        option.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                    })
                    .ForMember(dest => dest.Age, option => {
                        option.MapFrom(d => d.DateOfBirth.CalculateAge());
                    });
            CreateMap<User, UserForDetailedDto>()
                    .ForMember(dest => dest.PhotoUrl, option => {
                                option.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                            });
            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}