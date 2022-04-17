import React from "react";
import { Button } from "react-bootstrap";
import useUserAuth from "../context/UserAuthContextProvider";

const Home = () => {
  const { logOut } = useUserAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Welcome to home page
      </div>
      
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;