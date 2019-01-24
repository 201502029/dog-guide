import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="bodyline">
            <div className="loginballoon">
                <form>
                    <div className="ID">
                        <p className="inline">ID</p>
                        <input type="text" className="inline underline"></input>
                    </div>
                    <div className="PW">
                        <p className="inline">PW</p>
                        <input type="password" className="inline underline"></input>
                    </div>
                    <div className="loginbutton">
                        <div className="headfactor center">
                            <input type="submit" value="Log In" className="height5" />
                        </div>
                        
                    </div>
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

export default Login;