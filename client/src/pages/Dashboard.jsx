import { Box, Select, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DoctorCard from "../components/DoctorCard";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [specialization, setSpecialization] = useState("");

  useEffect(() => {
    // getData()
    setLoading(true);
    if (specialization) {
      // fetch(`https://hospital-601o.onrender.com/doctors?specialization=${specialization}`, {
      fetch(`http://localhost:8080/doctors?specialization=${specialization}`, {
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
    } else {
      // fetch(`https://hospital-601o.onrender.com/doctors`, {
      fetch(`http://localhost:8080/doctors`, {
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
    }
  }, [status, specialization]);

  const handleDelete = (id) => {
    fetch(`https://hospital-601o.onrender.com/doctors/delete/${id}`, {
      // fetch(`http://localhost:8080/doctors/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStatus(true);
      })
      .catch((err) => console.log(err));
  };
  console.log(data, "data");
  return (
    <div>
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

        <SELECTDIV>
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
        </SELECTDIV>
      <DIV>
        {data.map((el) => {
          return (
            <DoctorCard key={el._id} {...el} handleDelete={handleDelete} />
          );
        })}
      </DIV>
    </div>
  );
};

export default Dashboard;

const DIV = styled.div`
  display: grid;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const SELECTDIV=styled.div`
 width: 60%;
 margin: auto;
 margin-top: 15px;
 font-size: 18px;
 background-color: white;
 select{
     border-radius: 15px;
 }
 border-radius: 15px;
`
