import { useQuery } from "react-query";
import styled from "styled-components";
import { contentsApi, userApi } from "../../api";
import ContentsItem from "./contentsItem";
import ContentsUser from "./contentsUser";

interface Contents {
  data: {
    businessPrice: number;
    companyPrice: number;
    enterprisePrice: number;
    freePointDiscount: number;
    images: string;
    individualPrice: number;
    interest: number;
    isActive: boolean;
    isFreePoint: boolean;
    isPick: boolean;
    isWatermark: boolean;
    personalPrice: number;
    title: string;
    userinfo: {
      _id: string;
      accentUser: string;
      username: string;
      profile: string;
    };
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
  const { data: contentsData, isLoading: contentsLoading } = useQuery<any>(
    "contents",
    contentsApi.getContents
  );

  const { data: userData, isLoading: userLoading } = useQuery<any>(
    "user",
    userApi.getUser
  );

  console.log(userData && userData);

  return (
    <List>
      {userLoading ? "Loading..." : <ContentsUser user={userData.data} />}

      {contentsLoading
        ? "Loading..."
        : contentsData.data
            .slice(0, 5)
            .map((content: any) => (
              <ContentsItem key={content?._id} content={content} />
            ))}
    </List>
  );
};

export default ContentList;
