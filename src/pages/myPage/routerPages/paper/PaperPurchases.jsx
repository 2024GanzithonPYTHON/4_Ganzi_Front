import React from "react";
import { FaDownload } from "react-icons/fa";
import { Author, Button, ButtonGroup, Buttons, Card, CardGrid, Container, Content, Header, SortOptions, SubTitle, Thumbnail, Title, TitleSection, TitleText } from "./PaperPurchases.styled";

export default function PaperPurchases() {
    return (
        <Container>
            <Header>
                <TitleSection>
                    <Title>비법서</Title>
                    <SubTitle>내 구매내역</SubTitle>
                </TitleSection>
                <SortOptions>
                    <span>최신순</span> | <span>오래된 순</span> | <span>좋아요순</span>
                </SortOptions>
            </Header>
            <CardGrid>
                {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index}>
                        <Thumbnail
                            src="https://sitem.ssgcdn.com/41/97/19/item/1000279199741_i2_750.jpg"
                        />
                        <Content>
                            <div>
                                <TitleText>달력 제작부터 펀딩까지 A to Z 로드맵</TitleText>
                                <Author>간지톤짱 님</Author>
                            </div>
                            <Buttons>
                                <Button className="download">
                                    <FaDownload /> 다운받기
                                </Button>
                                <ButtonGroup>
                                    <Button className="view">보러가기</Button>
                                    <Button className="review">후기</Button>
                                </ButtonGroup>
                            </Buttons>
                        </Content>
                    </Card>
                ))}
            </CardGrid>
        </Container>
    );
}