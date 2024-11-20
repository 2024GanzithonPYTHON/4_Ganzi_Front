import { AIBannerContainer, BannerHighlight, BannerText } from "./AIBanner.styled";


export const AIBanner = () => {
    return (
        <AIBannerContainer>
            <BannerText>AI와 함께하는 ⌜SidEGo⌟</BannerText>
            <BannerHighlight>모든 게시물을 일일이 확인하기 힘드신가요? </BannerHighlight>
            <BannerHighlight>SidEGo 서비스의 AI 한 줄 요약 서비스를 통해 간단하게 내용을 확인해보세요!</BannerHighlight>
        </AIBannerContainer>
    );
}