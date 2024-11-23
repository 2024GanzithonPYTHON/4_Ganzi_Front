import React from "react";
import { Buy } from "./Buy";
import { Profile } from "./Profile";
import { PageContainer } from "./FloatingContainer.styled";

export const FloatingContainer = ({data}) => {
  return (
    <PageContainer>
      <Buy data={data}/>
      <Profile writer={data.writerNickname}/>
    </PageContainer>
  );
};
