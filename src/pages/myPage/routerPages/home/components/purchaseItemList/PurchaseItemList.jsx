import React, { useEffect, useState } from 'react';
import { DateComponent, LinkContainer, StateBox, TabCont, TabContainer, TabContBox, TabContList, TabMenu, PeopleBox } from './PurchaseItemList.styled'
import arrow from '../../assets/mypage-arrow.svg'
import more from '../../assets/mypage-more-icon.svg'
import profile from '../../../../../../assets/profileIcon.png'
import { Link } from 'react-router-dom';
import { getHistoriesOfApplicantProjects, getHistoriesOfPapers, getHistoriesOfRecruitProjects } from '../../../../../../server/user';

const PurchaseItemList = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [linkEndpoint, setLinkEndpoint] = useState('apply')
    const [ applyed, setApplyed ] = useState([]);
    const [ recruit, setRecruit ] = useState([]);
    const [ papers, setPapers ] = useState([]);

    const tabClickHandler=(index)=>{
    setActiveIndex(index);
    }

    useEffect(() => {
        setLinkEndpoint(tabContArr[activeIndex].tabLink)
    }, [activeIndex])

    useEffect(() => {
        getHistoriesOfApplicantProjects().then((response) => setApplyed(response))
    }, [linkEndpoint]);

    useEffect(() => {
        getHistoriesOfRecruitProjects().then((response) => setRecruit(response))
    }, [linkEndpoint]);

    useEffect(() => {
        getHistoriesOfPapers().then((response) => setPapers(response))
    }, [linkEndpoint]);

    const tabContArr=[
        {
            tabTitle: '지원 내역', 
            tabLink: 'apply',
            tabCont: (
                <TabContList>
                    {applyed.map((item) => (
                        <TabCont>
                            <TabContBox key={item.projectId}>
                                <p>{item.shortTitle}</p>
                                <StateBox bgColor={item.status}></StateBox>
                                <img src={arrow} alt="화살표" />
                            </TabContBox>
                            <DateComponent>{item.applyDate}</DateComponent>
                        </TabCont>
                    ))}
                </TabContList>
            )
        },
        {
            tabTitle: '모집 내역',
            tabLink: 'recruit',
            tabCont: (
                <TabContList>
                    {recruit.map((item) => (
                        <TabCont>
                            <TabContBox>
                                <p>{item.shortTitle}</p>
                                <StateBox bgColor="승인">모집중</StateBox>
                                <PeopleBox>
                                    <img src={profile} alt="사람 아이콘" />
                                    <span>{item.memberCount}/{item.maxMemberCount}</span>
                                </PeopleBox>
                                <img src={arrow} alt="화살표" />
                            </TabContBox>
                            <DateComponent>{item.createdAt}</DateComponent>
                        </TabCont>
                    ))}
                </TabContList>
            )
        },
        {
            tabTitle: '비법서',
            tabLink:'purchases',
            tabCont: (
                <TabContList>
                    {papers.map((item) => (
                        <TabCont>
                            <TabContBox>
                                <p className='margin'>{item.title}</p>
                                <img src={arrow} alt="화살표" />
                            </TabContBox>
                        </TabCont>
                    ))}
                    
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
                    <div className={index === activeIndex ? "focused-div" : ""}>1</div>
                    </li>
                ))}
            </TabMenu>
            {tabContArr[activeIndex].tabCont}
            <Link to={`/my/project/${linkEndpoint}`}>
                <LinkContainer>
                    <img src={more} alt="더보기 아이콘" />
                    {tabContArr[activeIndex].tabTitle}&nbsp;전체보기
                </LinkContainer>
            </Link>
        </TabContainer>
    );
}

export default PurchaseItemList;