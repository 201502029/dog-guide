import React from 'react';
import './Schedule.css';
import Calendar from 'react-calendar';

const Schedule = () => {
    return (
        <div className="bodyline">   
            <div className="maindisplay">
                <div className="calendar">
                    <Calendar />
                    <div className="schedule">
                        <p className="scsubfont">예방접종</p>
                        <p>종합백신 예방접종이 3개월 남았습니다!</p>
                        <p>켄넬코프 예방접종이 10개월 남았습니다!</p>
                        <p>코로나 예방접종이 7개월 남았습니다!</p>
                        <p>광견병 예방접종이 1개월 남았습니다!<br /></p>
                        <p className="scsubfont">정기검진</p>
                        <p>정기 건강검진이 5개월 남았습니다!</p>
                        <p className="scsubfont">목욕</p>
                        <p>이번주에 목욕을 시켜주었나요?</p>
                        <p>목욕은 일주일에 한번이 좋습니다!</p>
                        <p className="scsubfont">산책</p>
                        <p>날씨가 좋다면 지금 당장 산책하세요!</p>
                        <p>산책은 매일 가주는게 좋습니다!</p>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Schedule;