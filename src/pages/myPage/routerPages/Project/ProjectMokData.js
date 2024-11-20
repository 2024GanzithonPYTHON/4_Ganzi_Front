const mockData = [
  {
    id: 1,
    title: "React 스터디 모집",
    summary: "React 기초부터 고급까지 함께 공부해요!",
    image: "https://via.placeholder.com/150",
    totalMembers: 10,
    currentMembers: 5,
    date: '2024.11.13',
    mystate: '대기'
  },
  {
    id: 2,
    title: "알고리즘 스터디",
    summary: "코딩 테스트 준비를 위한 알고리즘 스터디",
    image: "https://via.placeholder.com/150",
    totalMembers: 8,
    currentMembers: 4,
    date: '2024.11.03',
    mystate: '반려'
  },
  {
    id: 3,
    title: "캠핑 동호회",
    summary: "매월 캠핑 떠날 동호회 회원 모집!",
    image: "https://via.placeholder.com/150",
    totalMembers: 20,
    currentMembers: 15,
    date: '2024.10.30',
    mystate: '승인'
  },
  {
    id: 4,
    title: "헬스 트레이닝 그룹",
    summary: "함께 운동하며 건강을 챙길 분들 모집합니다.",
    image: "https://via.placeholder.com/150",
    totalMembers: 12,
    currentMembers: 9,
    date: '2024.11.13',
    mystate: '취소'
  },
  {
    id: 5,
    title: "독서 모임",
    summary: "매주 책 한 권 읽고 이야기 나눠요!",
    image: "https://via.placeholder.com/150",
    totalMembers: 15,
    currentMembers: 7,
    date: '2024.11.13',
    mystate: '대기'
  }
];

const mockRecruitData = [
  {
    id: 1,
    userId: '파사삭',
    comment: '대학교 2학년 마치고 휴학 중인 학생입니다. 심심해서 파티를 한 번 기획해보고 싶어요. 다같이 즐거운 시간을 보내고 싶습니다. 대학 생활에 의미 있는 추억 한번 만들 고 싶어요. 현재 서울 거주 중이고 평일 오전 알바 제외 아무 일정 없으니 편하게 만나서 파티를 기획할 수도 있을 것 같습니다. 긍정적인 답변 기다릴게요.',
    resume: '1. 대학 내 축제 기획 및 운영\n2. 창의적인 테마 행사 기획\n3. 팀 프로젝트 경험\n4. 소셜 미디어 및 홍보'
  },
  {
    id: 2,
    userId: '파사삭',
    comment: '대학교 2학년 마치고 휴학 중인 학생입니다. 심심해서 파티를 한 번 기획해보고 싶어요. 다같이 즐거운 시간을 보내고 싶습니다. 대학 생활에 의미 있는 추억 한번 만들 고 싶어요. 현재 서울 거주 중이고 평일 오전 알바 제외 아무 일정 없으니 편하게 만나서 파티를 기획할 수도 있을 것 같습니다. 긍정적인 답변 기다릴게요.',
    resume: '1. 대학 내 축제 기획 및 운영\n2. 창의적인 테마 행사 기획\n3. 팀 프로젝트 경험\n4. 소셜 미디어 및 홍보'
  }
]

export const getMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}

export const getMockRecruitData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRecruitData);
    }, 1000);
  });
}
