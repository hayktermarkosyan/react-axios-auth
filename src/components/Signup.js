import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import useUserAuth from "../context/UserAuthContextProvider";

const Signup = () => {
  const { signUp } = useUserAuth();

  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState(""); 
  const [pwdConfirm, setPwdConfirm] = useState();
  const [educStart, setEducStart] = useState();
  const [educEnd, setEducEnd] = useState();
  const [terms, setTerms] = useState();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ 
      "name": name,
      "email": email,
      "password": pwd,
      "password_confirmation": pwdConfirm,
      "education_start_date": educStart,
      "education_end_date": educEnd,
      "terms": terms
    });
  };

  return (
    <>
      <div className="p-4">
        <h2 className="mb-3 text-center">Signup</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
            <Form.Control
              type="password"
              placeholder="Password Confirmation"
              onChange={(e) => setPwdConfirm(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEducationStartDate">
            <label className="mb-1">Education Start Date</label>
            <Form.Control
              type="date"
              onChange={(e) => setEducStart(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEducationEndDate">
            <label className="mb-1">Education End Date</label>
            <Form.Control
              type="date"
              onChange={(e) => setEducEnd(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTerms">
            <input
              type="checkbox"
              style={{marginRight: "5px"}}
              onChange={(e) => setTerms(e.target.value)}
              required
            />
            <label>Agree to terms of use</label>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;