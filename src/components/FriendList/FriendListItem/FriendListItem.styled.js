import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  padding-left: 25px;
  display: flex;

  align-items: center;
  width: 250px;
  height: 100px;
  box-shadow: 10px 5px 5px grey;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    translate: transformY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => (props.isOnline ? "green" : "red")};
  }
`;

export const Image = styled.img`
  width: 80px;
  margin-right: 20px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
