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
    mystate: '거절'
  },
  {
    id: 3,
    title: "캠핑 동호회",
    summary: "매월 캠핑 떠날 동호회 회원 모집!",
    image: "https://via.placeholder.com/150",
    totalMembers: 20,
    currentMembers: 15,
    date: '2024.10.30',
    mystate: '수락'
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

export const getMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}