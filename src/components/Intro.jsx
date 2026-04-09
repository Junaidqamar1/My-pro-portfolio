import React, { useEffect, useRef } from 'react';
import '../styles/intro.css';
import pic from "../assets/propic.jpg";

function Intro() {
    const imgRef = useRef(null);
    const triggerRef = useRef(null);

    // Mouse Move Effect (Cursor logic)
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

    // Scroll Flip Effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    imgRef.current.classList.add("flipped");
                } else {
                    imgRef.current.classList.remove("flipped");
                }
            },
            { threshold: 0.4 } // Triggers when 40% of the second section is visible
        );

        if (triggerRef.current) observer.observe(triggerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className='intro'>
            <div className="star"></div>

            <div className="i-left">
                {/* SECTION 1: Top Content */}
                <div className="up-left section-height">
                    <div className="text">
                        <div className='upper-text'>
                            <p className='font2'>Half</p>
                            <div className="cc">
                                <p className='font3'>CAFFEINE</p>
                                <p className='font3'>CURIOSITY</p>
                            </div>
                        </div>
                        <p className='font1 buttom-text'>Fully committed to creating cool stuff</p>
                    </div>

                    <div className="text2">
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
                            <p className='ar-down font1'>Leetcode</p>
                        </div>
                         <div className="ar">
                            <p className='ar-up font3'>10<span className='plus'>+</span></p>
                            <p className='ar-down font1'>certification</p>
                        </div>
                    </div>
                </div>

                {/* SECTION 2: Trigger Content (This makes it flip) */}
                <div ref={triggerRef} className="bottom-left section-height">
                    <div className="text">
                        <h1 className="font3" style={{color: 'white', fontSize: '60px'}}>MY JOURNEY</h1>
                        <p className='font1' style={{color: 'white'}}>Building bridges between code and design.</p>
                    </div>
                </div>
            </div>

            {/* STICKY RIGHT SIDE */}
            <div className="right">
                <div className="flip-card-inner" ref={imgRef}>
                    {/* Front Side */}
                    <div className="flip-front">
                        <img src={pic} alt="Profile" />
                    </div>
                    {/* Back Side */}
                    <div className="flip-back">
                        <div className="back-content">
                            <h2 className="font3">HI THERE!</h2>
                            <p className="font1">Let's build something amazing together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;