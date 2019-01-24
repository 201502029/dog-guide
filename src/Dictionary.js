import React from 'react';
import './Dictionary.css';
import { Link } from "react-router-dom"

const Dictionary = () => {
    return (
        <div className="bodyline">   
            <div className="maindisplay">
                <div className="oneline">
                    <Link to="/Doginfo" className="none">
                        <div className="dicwhitebox"> 
                            <img className="blockimage"
                            src="https://images.unsplash.com/photo-1532983523122-9f7448e9e6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"/>
                            <p className="dicalign">종류: 시츄(Shihtzu)</p>
                            <p className="dicalign">성격: 사교성이 좋다. 겁이 많다. 게으르다. 식성이 좋다.</p>
                        </div>
                    </Link>
                    <Link to="/Doginfo" className="none">
                        <div className="dicwhitebox">
                            <img className="blockimage"
                            src="https://images.unsplash.com/photo-1532983523122-9f7448e9e6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"/>
                            <p className="dicalign">종류: 시츄(Shihtzu)</p>
                            <p className="dicalign">성격: 사교성이 좋다. 겁이 많다. 게으르다. 식성이 좋다.</p>
                        </div>
                    </Link>
                    <Link to="/Doginfo" className="none">
                        <div className="dicwhitebox">
                            <img className="blockimage"
                            src="https://images.unsplash.com/photo-1532983523122-9f7448e9e6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"/>
                            <p className="dicalign">종류: 시츄(Shihtzu)</p>
                            <p className="dicalign">성격: 사교성이 좋다. 겁이 많다. 게으르다. 식성이 좋다.</p>
                        </div>
                    </Link>
                    <Link to="/Doginfo" className="none">
                        <div className="dicwhitebox">
                            <img className="blockimage"
                            src="https://images.unsplash.com/photo-1532983523122-9f7448e9e6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"/>
                            <p className="dicalign">종류: 시츄(Shihtzu)</p>
                            <p className="dicalign">성격: 사교성이 좋다. 겁이 많다. 게으르다. 식성이 좋다.</p>
                        </div>
                    </Link>
                    <Link to="/Doginfo" className="none">
                        <div className="dicwhitebox">
                            <img className="blockimage"
                            src="https://images.unsplash.com/photo-1532983523122-9f7448e9e6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"/>
                            <p className="dicalign">종류: 시츄(Shihtzu)</p>
                            <p className="dicalign">성격: 사교성이 좋다. 겁이 많다. 게으르다. 식성이 좋다.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dictionary;