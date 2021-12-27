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

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  font-size: 0.9rem;
`;

const Img = styled.img`
  width: 18rem;
  height: 100%;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const ContentsItem = ({ content }: any) => {
  const price = [
    content.businessPrice,
    content.companyPrice,
    content.enterprisePrice,
    content.individualPrice,
    content.personalPrice,
  ];

  console.log(content?.userinfo?.profile.thumbnail);

  return (
    <ItemContainer>
      <Img src={content?.images[0].thumbnail} />
      <Item>
        <div>{content.title}</div>
        <User>
          <UserImg src={content?.userinfo?.profile.thumbnail} />
          <span>{content?.userinfo?.username}</span>
        </User>
        <div>{`${Math.max(...price)} P`}</div>
      </Item>
    </ItemContainer>
  );
};

export default ContentsItem;
