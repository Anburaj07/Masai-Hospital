import { Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const DoctorCard = ({_id,image,name,specialization,experience,location,date,slots,fee,handleDelete}) => {


  return (
    <DIV>
        <Image src={image}></Image>
        <Heading as='h3' size='lg'>{name}</Heading>
        <Text>Specialization : {specialization}</Text>
        <Text>Experience : {experience}</Text>
        <Text>Location : {location}</Text>
        <Text>Date : {date}</Text>
        <Text>Slots : {slots}</Text>
        <Text>Fee : {fee}</Text>
        <BUTTONDIV>
            <Button id='edit' >Edit</Button>
            <Button id='delete' onClick={()=>{handleDelete(_id)}}>Delete</Button>
        </BUTTONDIV>
    </DIV>
  )
}

export default DoctorCard

const DIV=styled.div`
    img{
        width: 100%;
    }
    padding-bottom:15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 10px;
`
const BUTTONDIV = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  button {
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    color: white;
  }
  #edit{
    background-color: green;
  }
  #delete{
    background-color: red;
  }
  button:hover {
    cursor: pointer;
  }
`;