import { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";

import useUserAuth from '../context/UserAuthContextProvider';

const Login = () => {
  const { logIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    logIn({ 
      "email": email,
      "password": pwd
    });
  };

  return (
    <>
      <div className="p-4">
        <h2 className="mb-3 text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
      </div>
      
      <div className="p-4 mt-3 text-center">
        Create an account. <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;