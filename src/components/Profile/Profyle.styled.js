import styled from "styled-components";

export const UserCard = styled.div`
  width: 900px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
`;
export const ImgWrapper = styled.div`
  width: 300px;
  height: 200px;
  margin-right: 50px;
`;
export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled.div``;

const TextStyle = styled.p`
  font-size: 20px;
  font-weight: 700;
  width: 200px;
`;

export const Name = TextStyle;
export const Tag = TextStyle;
export const Location = TextStyle;

export const Stats = styled.ul`
  padding-left: 0;
  margin-top: 0;
  list-style-type: none;
  display: flex;
`;
export const StatsItem = styled.li`
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
`;

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
