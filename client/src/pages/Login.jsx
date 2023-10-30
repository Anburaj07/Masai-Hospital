import { Button, FormControl, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [status, setStatus] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    console.log(status);
    console.log(obj);
    if (status == "signup") {
      if (password != confirmPassword) {
        toast({
          title: "Please enter same password and confirm password",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      } else {
        axios
          .post(`https://hospital-601o.onrender.com/user/signup`, obj)
          .then((res) => {
            console.log(res.data);
            if (res.data.msg == "The new user has been Registered") {
              toast({
                title: "Registeration Successful!",
                description: "Please Login",
                status: "success",
                duration: 6000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Please enter vaild email and password",
                status: "error",
                duration: 6000,
                isClosable: true,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      axios
        .post(`https://hospital-601o.onrender.com/user/login`, obj)
        // .post(`http://localhost:8080/user/login`, obj)
        .then((res) => {
          console.log(res.data);
          if (res.data.msg == "Login Successfull!") {
            localStorage.setItem('token',res.data.token)
            toast({
              title: "Login Successfull!",
              status: "success",
              duration: 6000,
              isClosable: true,
            });
            navigate("/onboard");
          } else {
            toast({
              title: "Invalid email or password",
              status: "error",
              duration: 6000,
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <DIV>
      <BUTTONDIV>
        <Button onClick={() => setStatus("signup")}>Signup</Button>
        <Button onClick={() => setStatus("login")}>Login</Button>
      </BUTTONDIV>
      {status == "signup" ? (
        <div>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <FormControl></FormControl>
            <FormControl>
              <Input
                type="submit"
                value="Signup"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "#3949AB",
                  fontWeight: "bold",
                  color: "white",
                }}
              />
            </FormControl>
          </form>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="submit"
                value="Login"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "#3949AB",
                  fontWeight: "bold",
                  color: "white",
                }}
              />
            </FormControl>
          </form>
        </div>
      )}
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
  background-color: whitesmoke;
  width: 35%;
  margin: auto;
  margin-top: 80px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  input {
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px;
    width: 98%;
  }
`;

const BUTTONDIV = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin-bottom: 10px;
  button {
    width: 50%;
    padding: 10px;
    background-color: blue;
    border-radius: 10px;
    color: white;
  }
  button:hover {
    cursor: pointer;
  }
`;
