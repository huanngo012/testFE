import React from "react";
import "./home.css"

export default function Home() {
    return <div className="background">
        <div className="main">
            <div className="left">
                <div className="title">
                    <h5>Welcome to</h5>
                    <h1>GrainLogic!</h1>
                </div>
                <div className="img">
                    <img src="../../image 632.png" alt="" height={400}/>
                </div>
            </div>
            <div className="widget">
                <div className="top">
                    <div className="frame">
                        <div className="sm-widget">
                            <img src="../../Icon 1.png" alt="" />
                            <img src="../../Icon 1.png" alt="" />
                        </div>
                        <p>Explore</p>
                    </div>
                    <div className="frame">
                        <div className="sm-widget">
                            <img src="../../Icon 1.png" alt="" />
                            <img src="../../Icon 1.png" alt="" /> 
                            <img src="../../Icon 1.png" alt="" />
                            <img src="../../Icon 1.png" alt="" />
                        </div>
                        <p>Explore</p>
                    </div>
                    <div className="frame">
                        <div className="sm-widget">
                            <img src="../../Icon 1.png" alt="" />
                            <img src="../../Icon 1.png" alt="" />
                        </div>
                        <p>Explore</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="frame">
                        <div className="sm-widget">
                            <img src="../../Icon 1.png" alt="" />
                        </div>
                        <p>Explore</p>
                    </div>
                    <div className="frame">
                        <div className="sm-widget">
                            <img src="../../Icon 1.png" alt="" />
                        </div>
                        <p>Explore</p>
                    </div>
                    <div className="frame">
                        <div className="sm-widget">
                            <img src="../../Icon 1.png" alt="" />
                        </div>
                        <p>Explore</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

