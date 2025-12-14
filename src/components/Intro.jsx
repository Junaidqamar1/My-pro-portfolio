import React, { useEffect } from 'react';
import '../styles/intro.css';
import pic from "../assets/propic.jpg"
import arrow from "../assets/image.png"

function Intro() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--cursor-x', `${x}px`);
            document.documentElement.style.setProperty('--cursor-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='intro'>
            <div class="star"></div>

            <div className="i-left">
                <div className="text">
                <div className='upper-text'>
                    <p className='font2'>Half</p>
                    <div className="cc">
                        <p className='font3'>CAFFINE</p>
                        <p className='font3'>CUROSITY</p>
                    </div>

                </div>
                <p className='font1 buttom-text'>Fully committed to creating cool stuff</p>
                </div>
                <div className="text2">
                    
                {/* <div class="note-wrapper">
                    <div class="sticky-note">
                        <p>Software Engineir</p>
                        <p>Web Developer</p>
                        <p>Lifelong Learner</p>
                    </div>
                    <div class="note-tape"></div>
                </div> */}
                <div className="name2 font3">
                    <p>-MD JUNAID QAMAR <span className='font1 coder'>.&lt;/coder&gt;</span></p>

                </div>
                </div>
                <div className="ach">
                        <div className="ar">
                            <p className='ar-up font3'>30<span className='plus'>+</span></p>
                            <p className='ar-down font1'>Projects</p>
                        </div>
                        <div className="ar">
                            <p className='ar-up font3'>200<span className='plus'>+</span></p>
                            <p className='ar-down font1'>Leetcode Problems</p>
                        </div>
                        <div className="ar">
                            <p className='ar-up font3'>10<span className='plus'>+</span></p>
                            <p className='ar-down font1'>certification</p>
                        </div>
                    </div>
            </div>
            <div className="right">
                <img src={pic} alt="" />
            </div>
            

        </div>
    );
}

export default Intro;
