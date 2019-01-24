import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="bodyline">
            <div className="loginballoon">
                <div className="ID">
                    <p className="inline">ID</p>
                    <p className="inline underline"></p>
                </div>
                <div className="PW">
                    <p className="inline">PW</p>
                    <p className="inline underline"></p>
                </div>
                <div className="loginbutton">
                    <div className="headfactor center">
                        <p className="height5">Log In</p>
                    </div>
                    <div className="headfactor center">
                        <p className="height5">Find Your ID / PW</p>
                    </div> 
                </div>
            </div>
            <div className="maindisplay">
                <h1 className="mainfont">강아지 가이드</h1>
                <h4 className="subfont">강아지에 대한 정보를 알아보세요!
                <br />다양한 종류의 강아지들을 알려드립니다!</h4>
            </div>
        </div>   
    );
}

export default Login;