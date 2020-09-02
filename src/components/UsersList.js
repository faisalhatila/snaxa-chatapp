import React from "react";

const UsersListComponent = (props) => {
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
  return (
    <div>
      <div className="col-12">
        <h3>Users list</h3>
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
                  <img alt={item.name} src={item.avatar} className="avatar" />
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
                      <label className="noMargin shortText">{item.name}</label>
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
    </div>
  );
};

export default UsersListComponent;
