import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div classNAme="line block">
            <div className="headline">
                <div className="headlinelogo headfactor">
                    <Link to="/" className="none">
                        <img className="headicon headfactor"
                        src="https://image.flaticon.com/icons/svg/1196/1196308.svg"
                        alt="dog icon"
                        title="강아지 가이드"/>
                    </Link>
                </div>
                <div className="headlineexplanation headfactor">
                    <Link to="/" className="none">
                        <p className="header">강아지 가이드</p>
                        <p className="black">dog guide</p>
                    </Link> 
                </div>
                <div className="rightside">
                    <div className="headfactor headbutton">
                        <Link to="/Joinus" className="none">
                            <p className="height5">Join Us</p>
                        </Link>
                    </div>
                    <div className="headfactor headbutton">
                        <Link to="/Login" className="none">
                            <p className="height5">Log In</p>
                        </Link>
                    </div>
                    <div className="headfactor headbutton">
                        <Link to="/Tips" className="none">
                            <p className="height5">Tips</p>
                        </Link>
                    </div> 
                    <div className="headfactor headbutton">
                        <Link to="/Schedule" className="none">
                            <p className="height5">Schedule</p>
                        </Link>
                    </div>
                    <div className="headfactor headbutton">
                        <Link to="/Dictionary" className="none">
                            <p className="height5">Dictionary</p>
                        </Link>
                    </div>
                    <div className="headfactor headbutton">
                        <Link to="/Doglist" className="none"> 
                            <p className="height5">Dog List</p>  
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;