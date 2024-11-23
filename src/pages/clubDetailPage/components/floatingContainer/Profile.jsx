import React from "react";
import { Seller, ProfileWrap, Pwrap, Email, Heart } from "./Profile.styled";
import profileImg from "./img/profileImg.svg";
import email from "./img/PaperEmail.svg";
import heart from "./img/PaperHeart.svg";

export const Profile = () => {
  return (
    <Seller>
      <ProfileWrap>
        <img src={profileImg} alt="profileImg" />
        <Pwrap>
          <div className="name"> 파사삭</div>
          <div className="introduce">재밌는 프로젝트를 기획해요</div>
        </Pwrap>
      </ProfileWrap>
      <Email>
        <div className="img">
          <img src={email} alt="email" />
        </div>
        <div className="adress">vktktkr@gmail.com</div>
      </Email>
      <Heart>
        <div className="img">
          <img src={heart} alt="heart" />
        </div>
        <div className="heartCount">100</div>
      </Heart>
    </Seller>
  );
};
