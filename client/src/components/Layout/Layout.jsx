import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";

const Layout = () => {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
    onError: (error) => {
      console.error("An error occurred during mutation:", error);
      // Handle the error appropriately
    },
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        const res = await getAccessTokenWithPopup({
          audience: "http://localhost:8080",
          scope: "openid profile email",
        });
        localStorage.setItem("access_token", res); // Store the access token in local storage
        setUserDetails((prev) => ({ ...prev, token: res }));
        mutate(res);
        console.log(res);
      } catch (error) {
        console.error("Error occurred while fetching access token:", error);
        // Handle the error here or throw it for the parent component to handle
      }
    };
  
    isAuthenticated && getTokenAndRegister()
  }, [isAuthenticated]);
  

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
