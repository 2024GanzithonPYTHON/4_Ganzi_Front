import React, { useEffect, useState } from "react";
import { Seller, ProfileWrap, Pwrap, Email, Heart } from "./Profile.styled";
import profileImg from "./img/profileImg.svg";
import email from "./img/PaperEmail.svg";
import heart from "./img/PaperHeart.svg";
import { getUserSummary } from "../../../../server/user";

export const Profile = ({writer}) => {
  const [randomIntroduce, setRandomIntroduce] = useState("");
  const [data, setData] = useState({
    "email": "",
    "likes": 0,
    "nickname": "",
    "profileImg": ""
  });

  const introductions = [
    "재밌는 프로젝트를 기획해요",
    "열정 가득한 개발자입니다",
    "항상 새로운 아이디어를 생각해요",
    "사람들과 협업하는 걸 좋아해요",
    "기술과 창의성을 접목해요",
  ];

  useEffect(() => {
    if (writer === "") return;
    const fetchData = async () => {
      const result = await getUserSummary(writer);
      setData(result);
      setRandomIntroduce(introductions[Math.floor(Math.random() * introductions.length)]);
    }
    fetchData();
  }, [writer]);

  return (
    <Seller>
      <ProfileWrap>
        <img src={profileImg} alt="profileImg" />
        <Pwrap>
          <div className="name"> {data.nickname}</div>
          <div className="introduce">{randomIntroduce}</div>
        </Pwrap>
      </ProfileWrap>
      <Email>
        <div className="img">
          <img src={email} alt="email" />
        </div>
        <div className="adress">{data.email}</div>
      </Email>
      <Heart>
        <div className="img">
          <img src={heart} alt="heart" />
        </div>
        <div className="heartCount">{data.likes}</div>
      </Heart>
    </Seller>
  );
};
