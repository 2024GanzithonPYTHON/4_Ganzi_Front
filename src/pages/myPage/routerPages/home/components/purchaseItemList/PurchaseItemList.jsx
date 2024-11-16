import React from 'react';
import { useState } from 'react';
import { TabMenu } from './PurchaseItemList.styled'

const PurchaseItemList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHandler=(index)=>{
    setActiveIndex(index);
    }

    const tabContArr=[
        {
            tabTitle: '지원 내역', 
            tabCont: (
                <div>
                    <p>지원 내역1</p>
                    <p>지원 내역2</p>
                </div>
            )
        },
        {
            tabTitle: '모집 내역',
            tabCont: (
                <div>
                    <p>모집 내역1</p>
                    <p>모집 내역2</p>
                </div>
            )
        },
        {
            tabTitle: '비법서',
            tabCont: (
                <div>
                    <p>비법서1</p>
                    <p>비법서2</p>
                </div>
            )
        }
    ];

    return (
        <div>
            <TabMenu>
                {tabContArr.map((section, index) => (
                    <li className={index === activeIndex ? "focused" : ""}
                    onClick={() => tabClickHandler(index)}>{section.tabTitle}</li>
                ))}
            </TabMenu>
            <div>
                {tabContArr[activeIndex].tabCont}
            </div>
        </div>
    );
}

export default PurchaseItemList;