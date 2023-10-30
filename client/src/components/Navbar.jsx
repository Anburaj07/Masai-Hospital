import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <DIV>
        <Link to={'/'}>
        <Text>Masai Hospital</Text>
        </Link>
        <Link to={'/onboard'}>
        <Text>Onboard</Text>
        </Link>
        <Link to={'/dashboard'}>
        <Text>Dashboard</Text>
        </Link>
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
    display: flex;
    justify-content: space-around;
    background-image: linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );
    color: whitesmoke;
    font-size: 20px;
    padding: 1%;
`