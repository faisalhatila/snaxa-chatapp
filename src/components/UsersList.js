import React, { useState } from "react";

const UsersListComponent = (props) => {
  const [isUserListAvtive, setIsUserListAvtive] = useState(true);
  const [isRestaurantListAvtive, setIsRestaurantListAvtive] = useState(false);
  const usersList = [
    {
      id: 0,
      name: "Faisal",
      lastMessage: "Thankx",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 3,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/1.png",
    },
    {
      id: 1,
      name: "Muzzammil",
      lastMessage: "There???",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 1,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/2.png",
    },
    {
      id: 2,
      name: "Arvin",
      lastMessage: "Ok",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "25m",
      isFavourite: false,
      avatar: "assets/img/avatars/3.jpg",
    },
    {
      id: 4,
      name: "Ahmed",
      lastMessage: "Rates???",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "1hr",
      isFavourite: false,
      avatar: "assets/img/avatars/4.png",
    },
    {
      id: 5,
      name: "Saad",
      lastMessage: "Hello!!!",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 2,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/5.png",
    },
    {
      id: 6,
      name: "Faisal",
      lastMessage: "Thankx",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 3,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/1.png",
    },
    {
      id: 7,
      name: "Muzzammil",
      lastMessage: "There???",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 1,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/2.png",
    },
    {
      id: 8,
      name: "Arvin",
      lastMessage: "Ok",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "25m",
      isFavourite: false,
      avatar: "assets/img/avatars/3.jpg",
    },
    {
      id: 9,
      name: "Ahmed",
      lastMessage: "Rates???",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "1hr",
      isFavourite: false,
      avatar: "assets/img/avatars/4.png",
    },
    {
      id: 10,
      name: "Saad",
      lastMessage: "Hello!!!",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 2,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/5.png",
    },
    {
      id: 11,
      name: "Faisal",
      lastMessage: "Thankx",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 3,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/1.png",
    },
    {
      id: 12,
      name: "Muzzammil",
      lastMessage: "There???",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 1,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/2.png",
    },
    {
      id: 13,
      name: "Arvin",
      lastMessage: "Ok",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "25m",
      isFavourite: false,
      avatar: "assets/img/avatars/3.jpg",
    },
    {
      id: 14,
      name: "Ahmed",
      lastMessage: "Rates???",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "1hr",
      isFavourite: false,
      avatar: "assets/img/avatars/4.png",
    },
    {
      id: 15,
      name: "Saad",
      lastMessage: "Hello!!!",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 2,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/avatars/5.png",
    },
  ];
  const restaurantList = [
    {
      id: 0,
      name: "KFC",
      lastMessage: "Thankx",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 3,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/1.jpg",
    },
    {
      id: 1,
      name: "Food In",
      lastMessage: "There???",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 1,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/2.jpg",
    },
    {
      id: 2,
      name: "Ridan",
      lastMessage: "Ok",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "25m",
      isFavourite: false,
      avatar: "assets/img/restaurantAvatars/3.jpg",
    },
    {
      id: 4,
      name: "House of mandi",
      lastMessage: "Rates???",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "1hr",
      isFavourite: false,
      avatar: "assets/img/restaurantAvatars/4.jpg",
    },
    {
      id: 5,
      name: "Pizza Max",
      lastMessage: "Hello!!!",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 2,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/5.jpg",
    },
    {
      id: 6,
      name: "Broadway Pizza",
      lastMessage: "Thankx",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 3,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/6.jpg",
    },
    {
      id: 7,
      name: "Quetta Hotel",
      lastMessage: "There???",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 1,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/7.jpg",
    },
    {
      id: 8,
      name: "Agha Juice",
      lastMessage: "Ok",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "25m",
      isFavourite: false,
      avatar: "assets/img/restaurantAvatars/8.jpg",
    },
    {
      id: 9,
      name: "Mcdonals",
      lastMessage: "Rates???",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "1hr",
      isFavourite: false,
      avatar: "assets/img/restaurantAvatars/9.jpg",
    },
    {
      id: 10,
      name: "Al-Baik",
      lastMessage: "Hello!!!",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 2,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/10.jpg",
    },
    {
      id: 11,
      name: "Mazaidar Haleem",
      lastMessage: "Thankx",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 3,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/1.jpg",
    },
    {
      id: 12,
      name: "AA Foods",
      lastMessage: "There???",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 1,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/2.jpg",
    },
    {
      id: 13,
      name: "Indian Kitchen",
      lastMessage: "Ok",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "25m",
      isFavourite: false,
      avatar: "assets/img/restaurantAvatars/3.jpg",
    },
    {
      id: 14,
      name: "Monal",
      lastMessage: "Rates???",
      isOnline: false,
      isUnreadMessage: false,
      unreadMessages: 0,
      lastSeen: "1hr",
      isFavourite: false,
      avatar: "assets/img/restaurantAvatars/4.jpg",
    },
    {
      id: 15,
      name: "Al Sajjad",
      lastMessage: "Hello!!!",
      isOnline: true,
      isUnreadMessage: true,
      unreadMessages: 2,
      lastSeen: "Just Now",
      isFavourite: true,
      avatar: "assets/img/restaurantAvatars/5.jpg",
    },
  ];
  const handleActiveUserList = () => {
    setIsUserListAvtive(!isUserListAvtive);
    setIsRestaurantListAvtive(!isRestaurantListAvtive);
  };
  const handleActiveReataurantList = () => {
    setIsUserListAvtive(!isUserListAvtive);
    setIsRestaurantListAvtive(!isRestaurantListAvtive);
  };
  return (
    <div>
      <div className="col-12">
        <div
          className="d-flex justify-content-between align-items-center listTitleDiv mb-3"
          onClick={handleActiveUserList}
        >
          <label className="noMargin">Users list</label>
          <i class="fas fa-chevron-down"></i>
        </div>
        {isUserListAvtive && (
          <div>
            <div class="align-items-center d-flex form-group userSearchDiv">
              <input
                type="email"
                class="form-control userSearchInput"
                placeholder="Search User"
              />
              <i class="fas fa-search"></i>
            </div>
            <div>
              {usersList.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="d-flex align-items-center mt-3 userListItemDiv"
                    onClick={() => props.handleCurrentUser(item)}
                  >
                    <div className="mr-2">
                      <img
                        alt={item.name}
                        src={item.avatar}
                        className="avatar"
                      />
                      <div
                        className={`avatarActiveStatus ${
                          item.isOnline
                            ? "avatarActiveStatusColor"
                            : "avatarInactiveStatus"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="d-flex flex-column">
                          <label className="noMargin shortText">
                            {item.name}
                          </label>
                          <label className="noMargin smallFont">
                            {item.lastMessage}
                          </label>
                        </div>
                        <div className="d-flex align-items-center">
                          <label className="smallFont noMargin">
                            {item.lastSeen}
                          </label>
                          {item.isFavourite ? (
                            <i class="fas fa-star smallFont ml-1 favColor"></i>
                          ) : (
                            <i class="far fa-star smallFont ml-1"></i>
                          )}
                        </div>
                      </div>
                      <div className="d-flex align-items-center"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div
          className="d-flex justify-content-between align-items-center listTitleDiv mb-3"
          onClick={handleActiveReataurantList}
        >
          <label className="noMargin">Restaurant list</label>
          <i class="fas fa-chevron-down"></i>
        </div>
        {isRestaurantListAvtive && (
          <div>
            {" "}
            <div class="align-items-center d-flex form-group userSearchDiv">
              <input
                type="email"
                class="form-control userSearchInput"
                placeholder="Search Restaurant"
              />
              <i class="fas fa-search"></i>
            </div>
            <div>
              {restaurantList.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="d-flex align-items-center mt-3 userListItemDiv"
                    onClick={() => props.handleCurrentUser(item)}
                  >
                    <div className="mr-2">
                      <img
                        alt={item.name}
                        src={item.avatar}
                        className="avatar"
                      />
                      <div
                        className={`avatarActiveStatus ${
                          item.isOnline
                            ? "avatarActiveStatusColor"
                            : "avatarInactiveStatus"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-start justify-content-between">
                        <div className="d-flex flex-column">
                          <label className="noMargin shortText">
                            {item.name}
                          </label>
                          <label className="noMargin smallFont">
                            {item.lastMessage}
                          </label>
                        </div>
                        <div className="d-flex align-items-center">
                          <label className="smallFont noMargin">
                            {item.lastSeen}
                          </label>
                          {item.isFavourite ? (
                            <i class="fas fa-star smallFont ml-1 favColor"></i>
                          ) : (
                            <i class="far fa-star smallFont ml-1"></i>
                          )}
                        </div>
                      </div>
                      <div className="d-flex align-items-center"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersListComponent;
