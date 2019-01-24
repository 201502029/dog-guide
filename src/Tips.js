import React from 'react';
import './Tips.css';

const Tips = () => {
    return (
        <div className="bodyline">
            <div className="maindisplay">
                <div className="tipsballoon">
                    <p className="subfont">오늘의 팁!</p>
                    <p>시추는 게으른 성격입니다. 그래서 비만이 되기 쉽지요.. 힘들다고 멈추면 안아주지 말고 강하게 걷게 합시다!!</p>

                </div>
                <h1 className="mainfont">강아지 가이드</h1>
                <h4 className="subfont">강아지에 대한 정보를 알아보세요!
                <br />다양한 종류의 강아지들을 알려드립니다!</h4>
            </div>
        </div>   
    );
}

export default Tips;