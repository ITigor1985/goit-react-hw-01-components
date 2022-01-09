import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
  width: 1024px;
  margin: 0 auto;
`;

export const Friends = styled.ul`
  width: 900px;
  padding-left: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  & > :not(:nth-child(odd)) {
    margin-left: auto;
  }
`;
