import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  height: 20vh;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 40rem;
  height: 10rem;
`;

const Img = styled.img`
  width: 18rem;
  height: 100%;
`;

const Item = styled.li`
  padding: 1rem;
`;

const ContentsItem = ({ content }: any) => {
  return (
    <ItemContainer>
      <Img src={content.images[0].thumbnail} />
      <Item>{content.title}</Item>
    </ItemContainer>
  );
};

export default ContentsItem;
