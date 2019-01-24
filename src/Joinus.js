import React from 'react';
import './Joinus.css';
import { Link } from "react-router-dom"

const Joinus = () => {
    return (
        <div className="bodyline">
            <div className="joinusballoon">
                <form>
                    <h5 className="subfont">회원 가입!</h5>
                    <div className="ID">
                        <p className="inline left">ID</p>
                        <input type="text" className="inline underline"></input>
                    </div>
                    <div className="PW">
                        <p className="inline left">PW</p>
                        <input type="password" className="inline underline"></input>
                    </div>
                    <div className="PW ">
                        <p className="inline left">PW Check</p>
                        <input type="password" className="inline underline"></input>
                    </div>
                    <Link to="/" className="none">
                        <div className="joinusbutton">
                            <div className="headfactor center">
                            <p className="height5">Create!</p>
                            </div>
                        </div>
                    </Link>
                </form>
            </div> 
            <div className="maindisplay">
                <h1 className="mainfont">강아지 가이드</h1>
                <h4 className="subfont">강아지에 대한 정보를 알아보세요!
                <br />다양한 종류의 강아지들을 알려드립니다!</h4>
            </div>
            
        </div>   
    );
}

export default Joinus;