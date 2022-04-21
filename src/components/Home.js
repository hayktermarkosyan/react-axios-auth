import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import useUserAuth from "../context/UserAuthContextProvider";

const Home = () => {
  const { user, list, logOut, getList } = useUserAuth();

  useEffect(() => {
    getList();
  }, [])
  
  return (
    <>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={logOut}>
          Log out
        </Button>
      </div>

      <div className="p-4 box mt-3 text-center">
        Welcome to home page <br/> {user.email}
      </div>

      {list && list.map(item => {
        return(
          <div key={item.id} className="p-4 box mt-3 text-center">
            <h1>{item.name}</h1>
            <br />
            <img src={item.picture} alt={item.name} width="300" height="300" />
            <br />
            <p>{item.description}</p>
            <hr />
            <h4>{item.price}$</h4>
            <hr />
          </div>
        )
      })}
    </>
  );
};

export default Home;