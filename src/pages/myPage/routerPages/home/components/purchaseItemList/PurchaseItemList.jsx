import React from 'react';
import { useState } from 'react';
import { DateComponent, LinkContainer, StateBox, TabCont, TabContainer, TabContBox, TabContList, TabMenu, PeopleBox } from './PurchaseItemList.styled'
import arrow from '../../assets/mypage-arrow.svg'
import more from '../../assets/mypage-more-icon.svg'
import profile from '../../../../../../assets/profileIcon.png'

const PurchaseItemList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHandler=(index)=>{
    setActiveIndex(index);
    }

    const tabContArr=[
        {
            tabTitle: '지원 내역', 
            tabCont: (
                <TabContList>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트1</p>
                            <StateBox bgColor="#00C400">승인</StateBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트2</p>
                            <StateBox bgColor="#EE5648">반려</StateBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트2</p>
                            <StateBox>대기</StateBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트2</p>
                            <StateBox bgColor="#EE5648">반려</StateBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                </TabContList>
            )
        },
        {
            tabTitle: '모집 내역',
            tabCont: (
                <TabContList>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트1</p>
                            <StateBox bgColor="#00C400">모집중</StateBox>
                            <PeopleBox>
                                <img src={profile} alt="사람 아이콘" />
                                <span>4/5</span>
                            </PeopleBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트2</p>
                            <StateBox bgColor="#EE5648">신고 접수됨</StateBox>
                            <PeopleBox>
                                <img src={profile} alt="사람 아이콘" />
                                <span>4/5</span>
                            </PeopleBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트2</p>
                            <StateBox>모집 완료</StateBox>
                            <PeopleBox>
                                <img src={profile} alt="사람 아이콘" />
                                <span>4/5</span>
                            </PeopleBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p>프로젝트2</p>
                            <StateBox>모집완료</StateBox>
                            <PeopleBox>
                                <img src={profile} alt="사람 아이콘" />
                                <span>4/5</span>
                            </PeopleBox>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                        <DateComponent>2일 전</DateComponent>
                    </TabCont>
                </TabContList>
            )
        },
        {
            tabTitle: '비법서',
            tabCont: (
                <TabContList>
                    <TabCont>
                        <TabContBox>
                            <p className='margin'>비법서1</p>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p className='margin'>비법서1</p>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p className='margin'>비법서1</p>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p className='margin'>비법서1</p>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                    </TabCont>
                    <TabCont>
                        <TabContBox>
                            <p className='margin'>비법서1</p>
                            <img src={arrow} alt="화살표" />
                        </TabContBox>
                    </TabCont>
                </TabContList>
            )
        }
    ];

    return (
        <TabContainer>
            <TabMenu>
                {tabContArr.map((section, index) => (
                    <li className={index === activeIndex ? "focused" : ""}
                    onClick={() => tabClickHandler(index)}>{section.tabTitle}
                    <div className={index === activeIndex ? "focused-div" : ""}>4</div>
                    </li>
                ))}
            </TabMenu>
            {tabContArr[activeIndex].tabCont}
            <LinkContainer>
                <img src={more} alt="더보기 아이콘" />
                {tabContArr[activeIndex].tabTitle}&nbsp;전체보기
            </LinkContainer>
        </TabContainer>
    );
}

export default PurchaseItemList;