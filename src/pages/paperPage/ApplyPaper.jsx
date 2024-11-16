import React from "react";
import {
  PageContainer,
  Title,
  TitleText,
  Back,
  Wrap,
  PCategory,
  PCtext,
  PCt1,
  PCt2,
  FilterContainer,
  FilterButton,
  PTitle,
  PTtext,
  PTt1,
  PTt2,
  PTWrap,
  PTwrap1,
  PTinfo1,
  PTinfo2,
  PTwrap2,
  PIntro,
  PItext,
  PFile,
  PFtext,
} from "./ApplyPaper.styled";
import backBtn from "./img/back.svg";
import asterisk from "./img/asterisk.svg";
import pptitlepreview from "./img/pptitlepreview.svg";
import ppshorttitlepreview from "./img/shortpreview.svg";
const ApplyPaper = () => {
  return (
    <PageContainer>
      <Title>
        <img src={backBtn} alt="backBtn" />
        <TitleText>비법서 등록 신청하기</TitleText>
      </Title>
      <Back>
        <Wrap>
          {/* 카테고리 */}
          <PCategory>
            <PCtext>
              <PCt1>
                <div class="title"> 비법서 카테고리</div>
                <img src={asterisk} alt="asterisk" />
              </PCt1>
              <PCt2>
                비법서의 성격과 가장 일치하는 카테고리를 선택해주세요.
              </PCt2>
            </PCtext>
            <FilterContainer>
              {[
                "홈/리빙",
                "예술",
                "의류",
                "출판",
                "캐릭터/굿즈",
                "파티/행사",
                "디자인 문구",
              ].map((filter, index) => (
                <FilterButton key={index}>{filter}</FilterButton>
              ))}
            </FilterContainer>
          </PCategory>
          {/* 제목 */}
          <PTitle>
            <PTtext>
              <PTt1>
                <div class="title"> 비법서 제목</div>
                <img src={asterisk} alt="asterisk" />
              </PTt1>
              <PTt2>
                비법서의 주제, 내용이 명확하게 드러나는 멋진 제목을 붙여주세요.
              </PTt2>
            </PTtext>
            <PTWrap>
              <PTwrap1>
                <div class="title">제목</div>
                <PTinfo1>
                  <div class="text">
                    제목은
                    <br />
                    어디에 쓰이나요
                  </div>
                  <img src={pptitlepreview} alt="titlepreview" />
                </PTinfo1>
              </PTwrap1>
              <PTwrap2>
                <div class="title">소제목</div>
                <PTinfo2>
                  <div class="text">
                    소제목은
                    <br />
                    어디에 쓰이나요
                  </div>
                  <img src={ppshorttitlepreview} alt="titlepreview" />
                </PTinfo2>
              </PTwrap2>
            </PTWrap>
          </PTitle>
          <PIntro>
            <PItext></PItext>
          </PIntro>
          <PFile>
            <PFtext></PFtext>
          </PFile>
        </Wrap>
      </Back>
    </PageContainer>
  );
};

export default ApplyPaper;
