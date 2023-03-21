import { useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);
  const inCrease = () => {
    setNumber(number + 1);
  };
  const deCrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const done = () => {
    if (number <= 1) {
      alert("2 이상을 선택해주세요");
    } else {
      setShow(true);
    }
  };
  return (
    <ConDiv>
      <MainDiv>
        <NumP>{number}</NumP>
        <ButtonDiv>
          <PMButton onClick={inCrease}>+</PMButton>
          <PMButton onClick={deCrease}>-</PMButton>
          <DButton onClick={done}>확인</DButton>
        </ButtonDiv>
        {show ? <div>{number}</div> : null}
      </MainDiv>
    </ConDiv>
  );
};

export default Main;

const ConDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDiv = styled.div`
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const NumP = styled.p`
  text-align: center;
  font-size: 5rem;
  margin: 0;
`;

const ButtonDiv = styled.div`
  display: flex;
  /* justify-content: space-around; */
`;
const PMButton = styled.button`
  width: 30px;
  height: 30px;
`;

const DButton = styled.button`
  width: 50px;
  height: 30px;
`;
