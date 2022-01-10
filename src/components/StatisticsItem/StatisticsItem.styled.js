import styled from "styled-components";

export const StatItem = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  flex: 1;
  background-color: ${getRangomColor};
  color: ${getRangomColor};
  transition: all 0.5s ease-out;

  :hover {
    background: black;
    color: white;
  }
`;

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
