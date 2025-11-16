
import styled from "styled-components";

const Buttond = styled.button`
  background-color: ${(prop)=>prop.primary ? "blue" : 'green'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
let Button = styled.button({
  backgroundColor: "violet",
  color: "black",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  margin: "10px"
});

let Para = styled.p`
font-size : 25px;
width : 280px;
padding : 20px ;
border-bottom : 2px solid
`

function StyledComp() {
  return (
    <div>
      <Button>LogIn</Button>
      <Button>Signup</Button>
      <Buttond>LogIn</Buttond>
      <Buttond primary>LogIn</Buttond>
      <Para>Enter essential information.</Para>
    </div>
  );
}

export default StyledComp;
