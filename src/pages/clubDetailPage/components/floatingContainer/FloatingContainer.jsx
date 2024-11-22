import React from "react";
import { Buy } from "./Buy";
import { Profile } from "./Profile";
import { PageContainer } from "./FloatingContainer.styled";

export const FloatingContainer = () => {
  return (
    <PageContainer>
      <Buy />
      <Profile />
    </PageContainer>
  );
};
