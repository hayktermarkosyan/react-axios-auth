import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import useUserAuth from "./context/UserAuthContextProvider";

function App() {
  const { user } = useUserAuth();

  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
            <Routes>
              <Route
                exact
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route 
                exact 
                path="/" 
                element={user ? <Navigate to="/home" /> : <Login />}
              />
              <Route 
                exact
                path="/signup" 
                element={user ? <Navigate to="/home" /> : <Signup />} 
              />
            </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;