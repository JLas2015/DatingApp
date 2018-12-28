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
                            })
                    .ForMember(dest => dest.Age, option => {
                        option.MapFrom(d => d.DateOfBirth.CalculateAge());
                    });
            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<MessageForCreationDto, Message>().ReverseMap();
            CreateMap<Message, MessageToReturnDto>()
                                            .ForMember(m => m.SenderPhotoUrl, opt => opt.MapFrom(u => u.Sender.Photos.FirstOrDefault(p => p.IsMain).Url))
                                            .ForMember(m => m.RecipientPhotoUrl, opt => opt.MapFrom(u => u.Recipient.Photos.FirstOrDefault(p => p.IsMain).Url));
        }
    }
}