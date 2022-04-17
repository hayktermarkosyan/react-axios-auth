import React from "react";
import { Button } from "react-bootstrap";
import useUserAuth from "../context/UserAuthContextProvider";

const Home = () => {
  const { user, logOut } = useUserAuth();

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Welcome to home page <br/> {user.email}
      </div>
      
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={logOut}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;