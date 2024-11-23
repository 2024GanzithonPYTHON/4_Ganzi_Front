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

export const Content = ({data}) => {
  return (
    <PageContainer>
      <Intro>
        <div className="title">소개</div>
        <IntroText>
          {data.bodyTitle}
        </IntroText>
      </Intro>
      <Goal>
        <div className="title">목표</div>
        <GoalText>
          {data.bodyGoal}
        </GoalText>
      </Goal>
      <Plan>
        <div className="title">계획</div>
        <PlanText>
          {data.bodyPlan}
        </PlanText>
      </Plan>
      <Progress>
        <div className="title">진행형태</div>
        <ProgressText>
          {data.bodyStyle}
        </ProgressText>
      </Progress>
    </PageContainer>
  );
};
