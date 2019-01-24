import React from 'react';
import './Doginfo.css';

const Doginfo = () => {
    return (
        <div className="bodyline">   
            <div className="maindisplay">
                <div className="transbox"></div>
                <div className="infowhitebox oneline">
                    <img className="infoblockimage"
                    src="https://images.unsplash.com/photo-1532983523122-9f7448e9e6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"/>
                    <div className="explain">
                        <p className="infomainfont">종류</p>
                        <p className="infosubfont">시츄(Shihtzu)</p>
                        <p className="infomainfont">성격</p>
                        <p className="infosubfont">사교성이 좋다. 겁이 많다. 게으르다. 식성이 좋다.</p>
                        <p className="infomainfont">표준 체중</p>
                        <p className="infosubfont">키: 22~27cm<br />몸무게: 4~7kg</p>
                        <p className="infomainfont">특징</p>
                        <p className="infosubfont">다른 견종에 비해 시츄는 칭찬을 아낌없이 해주면 배변훈련이 매우 쉬운 견종이다.자기가 사람인줄 아는 시추는 앉아, 손, 일어나 이런것은 알아도 못들은척하는경우가 많다.</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Doginfo;