import { useQuery } from "react-query";
import styled from "styled-components";
import { contentsApi } from "../../api";
import ContentsItem from "./contentsItem";

interface Contents {
  data: {
    businessPrice: number;
    companyPrice: number;
    enterprisePrice: number;
    freePointDiscount: number;
    images: [
      {
        name: string;
        size: number;
        thumbnail: string;
        url: string;
      }
    ];
    individualPrice: number;
    interest: number;
    isActive: boolean;
    isFreePoint: boolean;
    isPick: boolean;
    isWatermark: boolean;
    personalPrice: number;
    title: string;
    userinfo: { _id: string; accentUser: string; username: string };
    view: number;
    _id: string;
  };
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentList = () => {
  const { data } = useQuery<any>("contents", contentsApi.getContents);

  return (
    <List>
      {data &&
        data.data
          .slice(0, 5)
          .map((content: any) => (
            <ContentsItem key={content?._id} content={content} />
          ))}
    </List>
  );
};

export default ContentList;
