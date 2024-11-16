import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = () => (
    <div>
        <div>
            <h1>Project</h1>
            <hr/>
            <p>
                <Link to="project/like">찜한 프로젝트</Link>
            </p>
            <p>지원한 프로젝트</p>
            <p>참여한 프로젝트</p>
            <p>모집 중인 프로젝트</p>
        </div>

        <div>
            <h1>비법서</h1>
            <hr/>
            <p>구매 내역</p>
            <p>내가 공유한 비법서</p>
        </div>
    </div>
);

export default MenuList;