import styled from 'styled-components';
import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <DIV className="App">
      <Navbar/>
      <AllRoutes/>
    </DIV>
  );
}

export default App;

const DIV=styled.div`
height: 700px;
background-image: radial-gradient( circle 975px at 2.6% 48.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 99.7% );
`