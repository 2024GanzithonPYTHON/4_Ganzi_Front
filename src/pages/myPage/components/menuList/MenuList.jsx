import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = () => (
    <div>
        <div>
            <h1>Project</h1>
            <hr/>
            <p>
                <Link to="/my/project/like">찜한 프로젝트</Link>
            </p>
            <p>
                <Link to="/my/project/apply">지원한 프로젝트</Link>
            </p>
            <p>
                <Link to="/my/project/involved">참여한 프로젝트</Link>
            </p>
            <p>
                <Link to="my/project/recruit">모집 중인 프로젝트</Link>
            </p>
        </div>

        <div>
            <h1>비법서</h1>
            <hr/>
            <p>
                <Link to="/my/paper/purchases">구매 내역</Link>
            </p>
            <p>
                <Link to="/my/paper/shared">내가 공유한 비법서</Link>
            </p>
        </div>
    </div>
);

export default MenuList;