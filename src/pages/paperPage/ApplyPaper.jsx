import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  PTinput1,
  PTinfo2,
  PTinput2,
  PTwrap2,
  PIntro,
  PItext,
  PIt1,
  PIt2,
  PIwrap,
  PIwrap1,
  PIwrap2,
  PIinfo1,
  PIinput1,
  PIinput2,
  PTHumnail,
  PTHtext,
  PTHt1,
  PTHt2,
  PTHwrap,
  PFile,
  PFtext,
  PFt1,
  PFt2,
  PFwrap,
  Label,
  FileList,
  FileItem,
  DeleteButton,
  ApplyBtn,
  ModalOverlay,
  ModalContent,
  RealApplyButton,
} from "./ApplyPaper.styled";
import backBtn from "./img/back.svg";
import asterisk from "./img/asterisk.svg";
import pptitlepreview from "./img/pptitlepreview.svg";
import ppshorttitlepreview from "./img/shortpreview.svg";
import shortinfopreview from "./img/shortinfopreview.svg";
import fileupload from "./img/file-upload.svg";
import close from "./img/close.svg";

const ApplyPaper = () => {
  /* 카테고리 */
  const [selectedFilter, setSelectedFilter] = useState(null);
  const filters = [
    "홈/리빙",
    "예술",
    "의류",
    "출판",
    "캐릭터/굿즈",
    "파티/행사",
    "디자인 문구",
  ];
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    console.log("선택된 필터:", filter); // 데이터 연결 로직 추가 가능
  };

  /* 뒤로가기 */
  const navigate = useNavigate();
  const onClickBackBtn = () => {
    navigate(-1);
  };

  /* 파일 드래그 앤 드롭 */
  const [thumbnailFiles, setThumbnailFiles] = useState([]); // PTHwrap용
  const [paperFiles, setPaperFiles] = useState([]); // PFwrap용

  // 입력 상태 관리
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [shortIntro, setShortIntro] = useState("");
  const [detailedIntro, setDetailedIntro] = useState("");

  // PTHwrap 파일 관리
  const handleThumbnailDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setThumbnailFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };
  const handleThumbnailChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setThumbnailFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };
  const handleThumbnailDelete = (index) => {
    setThumbnailFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // PFwrap 파일 관리
  const handlePaperDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setPaperFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };
  const handlePaperChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setPaperFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };
  const handlePaperDelete = (index) => {
    setPaperFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  /* Apply 버튼 활성화 조건*/
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isApplyButtonEnabled =
    selectedFilter &&
    title &&
    subtitle &&
    shortIntro &&
    detailedIntro &&
    thumbnailFiles.length > 0 &&
    paperFiles.length > 0;

  const handleRealApply = () => {
    // 데이터 제출
    const formData = {
      category: selectedFilter,
      title,
      subtitle,
      shortIntro,
      detailedIntro,
      thumbnailFiles,
      paperFiles,
    };
    console.log("폼 데이터:", formData);

    // 모달 닫기
    setIsModalOpen(false);
  };

  // Apply 버튼 클릭
  const handleApply = () => {
    setIsModalOpen(true);
  };
  // 모달에서 close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <Title>
        <button>
          <img src={backBtn} alt="backBtn" onClick={onClickBackBtn} />
        </button>
        <TitleText>비법서 등록 신청하기</TitleText>
      </Title>
      <Back>
        <Wrap>
          {/* 카테고리 */}
          <PCategory>
            <PCtext>
              <PCt1>
                <div className="title"> 비법서 카테고리</div>
                <img src={asterisk} alt="asterisk" />
              </PCt1>
              <PCt2>
                비법서의 성격과 가장 일치하는 카테고리를 선택해주세요.
              </PCt2>
            </PCtext>
            <FilterContainer>
              {filters.map((filter, index) => (
                <FilterButton
                  key={index}
                  isSelected={selectedFilter === filter}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </FilterButton>
              ))}
            </FilterContainer>
          </PCategory>

          {/* 제목 */}
          <PTitle>
            <PTtext>
              <PTt1>
                <div className="title"> 비법서 제목</div>
                <img src={asterisk} alt="asterisk" />
              </PTt1>
              <PTt2>
                비법서의 주제, 내용이 명확하게 드러나는 멋진 제목을 붙여주세요.
              </PTt2>
            </PTtext>
            <PTWrap>
              <PTwrap1>
                <div className="title">제목</div>
                <PTinfo1>
                  <div className="text">
                    제목은
                    <br />
                    어디에 쓰이나요
                  </div>
                  <img src={pptitlepreview} alt="titlepreview" />
                </PTinfo1>
                <PTinput1
                  placeholder="프로젝트 제목을 입력하세요"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </PTwrap1>
              <PTwrap2>
                <div className="title">소제목</div>
                <PTinfo2>
                  <div className="text">
                    소제목은
                    <br />
                    어디에 쓰이나요
                  </div>
                  <img src={ppshorttitlepreview} alt="titlepreview" />
                </PTinfo2>
                <PTinput2
                  placeholder="프로젝트 소제목을 입력하세요"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </PTwrap2>
            </PTWrap>
          </PTitle>

          {/* 소개 */}
          <PIntro>
            <PItext>
              <PIt1>
                <div className="title">비법서 소개</div>
                <img src={asterisk} alt="asterisk" />
              </PIt1>
              <PIt2>비법서의 주제와 내용에 대해 자세히 소개해주세요.</PIt2>
            </PItext>
            <PIwrap>
              <PIwrap1>
                <div className="title">짧은 소개</div>
                <PIinfo1>
                  <div className="text">
                    짧은 소개는
                    <br /> 어디에 쓰이나요?
                  </div>
                  <img src={shortinfopreview} alt="shortinfopreview" />
                </PIinfo1>
                <PIinput1
                  placeholder="비법서의 짧은 소개를 입력해주세요."
                  value={shortIntro}
                  onChange={(e) => setShortIntro(e.target.value)}
                />
              </PIwrap1>
              <PIwrap2>
                <div className="title">소개</div>
                <PIinput2
                  placeholder="비법서의 주제, 내용 등을 상세히 작성해주세요."
                  value={detailedIntro}
                  onChange={(e) => setDetailedIntro(e.target.value)}
                />
              </PIwrap2>
            </PIwrap>
          </PIntro>

          {/* PTHwrap: 섬네일 파일 */}
          <PTHumnail>
            <PTHtext>
              <PTHt1>
                <div className="title">섬네일 사진</div>
                <img src={asterisk} alt="asterisk" />
              </PTHt1>
              <PTHt2>비법서를 소개할 수 있는 섬네일 사진을 등록해주세요.</PTHt2>
            </PTHtext>
            <PTHwrap
              onDrop={handleThumbnailDrop}
              onDragOver={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
            >
              <Label htmlFor="thumbnailInput">
                <img src={fileupload} alt="fileupload" />
                <div className="title">
                  파일을 드래그하거나 여기를 클릭하여 추가하세요.
                </div>
              </Label>
              <input
                id="thumbnailInput"
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={handleThumbnailChange}
              />
              <FileList>
                {thumbnailFiles.map((file, index) => (
                  <FileItem key={index}>
                    <span>{file.name}</span>
                    <DeleteButton onClick={() => handleThumbnailDelete(index)}>
                      삭제
                    </DeleteButton>
                  </FileItem>
                ))}
              </FileList>
            </PTHwrap>
          </PTHumnail>

          {/* PFwrap: 비법서 파일 */}
          <PFile>
            <PFtext>
              <PFt1>
                <div className="title">비법서 파일</div>
                <img src={asterisk} alt="asterisk" />
              </PFt1>
              <PFt2>비법서 파일을 업로드 해주세요.</PFt2>
            </PFtext>
            <PFwrap
              onDrop={handlePaperDrop}
              onDragOver={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
            >
              <Label htmlFor="paperInput">
                <img src={fileupload} alt="fileupload" />
                <div className="title">
                  파일을 드래그하거나 여기를 클릭하여 추가하세요.
                </div>
              </Label>
              <input
                id="paperInput"
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={handlePaperChange}
              />
              <FileList>
                {paperFiles.map((file, index) => (
                  <FileItem key={index}>
                    <span>{file.name}</span>
                    <DeleteButton onClick={() => handlePaperDelete(index)}>
                      삭제
                    </DeleteButton>
                  </FileItem>
                ))}
              </FileList>
            </PFwrap>
          </PFile>

          {/* 등록 신청 버튼 */}
          <ApplyBtn
            disabled={!isApplyButtonEnabled}
            onClick={isApplyButtonEnabled ? handleApply : undefined}
          >
            등록 신청하기
          </ApplyBtn>
        </Wrap>
      </Back>
      {/* 모달 */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <button className="close">
              <img src={close} alt="close" onClick={closeModal} />
            </button>
            <div className="text1">
              <span className="bold-text">비법서 등록 신청</span>을 <br />{" "}
              하시겠습니까?
            </div>
            <div className="text2">
              비법서는 내부 심사를 거쳐 등록이 완료됩니다.
              <br />
              심사 탈락시 등록이 거부될 수 있음을 알려드립니다.
            </div>
            <RealApplyButton onClick={(handleRealApply, onClickBackBtn)}>
              등록 신청 하기
            </RealApplyButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default ApplyPaper;
