import React from "react";
import {
  PageContainer,
  Intro,
  IntroText,
  Goal,
  GoalText,
  Plan,
  PlanText,
  Progress,
  ProgressText,
} from "./Content.styled";

export const Content = () => {
  return (
    <PageContainer>
      <Intro>
        <div className="title">소개</div>
        <IntroText>
          우리프로젝트는 어쩌구 우리프로젝트는 어쩌구우리프로젝트는
          어쩌구우리프로젝트는 어쩌구 우리프로젝트는 어쩌구 우리프로젝트는
          어쩌구우리프로젝트는 어쩌구우리프로젝트는 어쩌구 우리프로젝트는 어쩌구
          우리프로젝트는 어쩌구우리프로젝트는 어쩌구우리프로젝트는 어쩌구{" "}
        </IntroText>
      </Intro>
      <Goal>
        <div className="title">목표</div>
        <GoalText>
          우리프로젝트는 어쩌구/ 유튜브 구독자 1000명 돌파까지 하겠다~어쩌고
        </GoalText>
      </Goal>
      <Plan>
        <div className="title">계획</div>
        <PlanText>
          ㅁㅇㅇㅇㅇㅇㄹㅇㄹㅇㅁㄴㅇㄹㅇㄹㄹㄹ ㅁㄴㅇㄹㅇㄻㅇㄹㄹㅇㄹㅇ
          ㅁㅇㄹㄹㄹㄹㄹ’’’ ㅁㄻㅇㅇㅇㅇ ㅇㅇㅇㅇㅇ
        </PlanText>
      </Plan>
      <Progress>
        <div className="title">진행형태</div>
        <ProgressText>
          우리프로젝트는 어쩌구 주로 온라인으로 하는지, 대면으로 할건지~대면으로
          한다면 어느 지역 어느 쪽에서 만날건지~ 등
        </ProgressText>
      </Progress>
    </PageContainer>
  );
};
