import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FloatingContainer } from "./components/floatingContainer/FloatingContainer";
import { Content } from "./components/contentContainer/Content";
import {
  PageContainer,
  Title,
  TitleText,
  Wrap,
  Left,
  ClubImg,
  ClubTitle,
  Floating,
} from "./DetailClub.styled";
import backBtn from "./img/back.svg";
import sampleImg from "./img/sampleImg.svg";
import { readProject } from "../../server/project";

const DetailClub = () => {
  const [data, setData] = useState(mock);
  const navigate = useNavigate();
  const clubId = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      const result = await readProject(clubId);
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <PageContainer>
      <Title>
        <button>
          <img src={backBtn} alt="backBtn" onClick={() => navigate(-1)} />
        </button>
        <TitleText>상세페이지</TitleText>
      </Title>
      <Wrap>
        <Left>
          <ClubTitle>{data.title}</ClubTitle>
          <ClubImg src={data.thumbnail !== "" ? data.thumbnail : sampleImg} alt="sampleImg"/>
          <Content data={data} />
        </Left>
        <Floating>
          <FloatingContainer data={data}/>
        </Floating>
      </Wrap>
    </PageContainer>
  );
};

export default DetailClub;

const mock = {
  "id": 0,
  "writerNickname": "",
  "title": "",
  "memberCount": 0,
  "memberCountMax": 0,
  "dateEnd": "",
  "thumbnail": "",
  "viewCount": 0,
  "createdAt": "",
  "bodyTitle": "",
  "bodyGoal": "",
  "bodyPlan": "",
  "bodyStyle": "",
  "bodyRequirement": "",
  "aiDescription": ""
}