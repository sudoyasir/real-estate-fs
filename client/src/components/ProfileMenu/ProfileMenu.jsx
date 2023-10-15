import React from "react";
import { Avatar, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import "@mantine/core/styles.css";

const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"xl"} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Favourites</Menu.Item>

        <Menu.Item>Bookings</Menu.Item>

        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
