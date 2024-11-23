import React, { useState } from "react";
import {
    Container,
    Header,
    Title,
    SortOptions,
    CardContainer,
    SubTitle,
    TitleSection,
} from "./PaperShared.styled";
import Card from "./Card";

export default function PaperShared() {

    return (
        <Container>
            <Header>
                <TitleSection>
                    <Title>비법서</Title>
                    <SubTitle>내가 공유한 비법서</SubTitle>
                </TitleSection>
                <SortOptions>
                    <span>최신순</span> | <span>오래된 순</span>
                </SortOptions>
            </Header>
            <CardContainer>
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <Card key={index}/>
                    ))
                }
            </CardContainer>
        </Container>
    );
}