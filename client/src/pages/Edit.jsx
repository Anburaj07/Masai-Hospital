import { Box, FormControl, Heading, Input, Select, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const {id}=useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [slots, setSlots] = useState("");
  const [fee, setFee] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const [data,setData]=useState({})

  useEffect(() => {
    // getData()
    setLoading(true);
    fetch(`https://hospital-601o.onrender.com/doctors`, {
    // fetch(`http://localhost:8080/doctors/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    let obj = {
      name,
      image,
      specialization,
      experience,
      location,
      date: date.toLocaleDateString(),
      slots,
      fee,
    };
    console.log(obj);
    setLoading(true);
    // fetch(`https://hospital-601o.onrender.com/doctors/appointments`, {
        fetch(`http://localhost:8080/doctors/appointments`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate('/dashboard')
      })
      .catch((err) => console.log(err));
  };
  return (
    <DIV>
      <Heading as="h3" size="lg">
        Onboard Doctor
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Select
            placeholder="Select Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist ">Psychiatrist </option>
          </Select>
        </FormControl>
        <FormControl>
          <Input
            type="number"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(+e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="number"
            placeholder="Slots"
            value={slots}
            onChange={(e) => setSlots(+e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            type="number"
            placeholder="Fee"
            value={fee}
            onChange={(e) => setFee(+e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Input
            type="submit"
            value="Submit"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#3949AB",
              fontWeight: "bold",
              color: "white",
            }}
          />
        </FormControl>
      </form>
      {loading && (
        <Box>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )}
    </DIV>
  );
};

export default Edit;

const DIV = styled.div`
  background-color: whitesmoke;
  width: 35%;
  margin: auto;
  margin-top: 80px;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  input {
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px;
    width: 98%;
  }
  select {
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px;
    width: 98%;
  }
  h3 {
    color: #1a237e;
  }
`;
