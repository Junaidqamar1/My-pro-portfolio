import React, { useEffect, useRef } from 'react';
import '../styles/intro.css';
import pic from "../assets/propic.jpg";
import backimg from "../assets/back-img.jpeg";

function Intro() {
    const imgRef = useRef(null);
    const triggerRef = useRef(null);

    // Mouse Move Effect (Custom layout cursor track hook)
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

    // Scroll Flip Effect for Sticky Profile Picture
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    imgRef.current.classList.add("flipped");
                } else {
                    imgRef.current.classList.remove("flipped");
                }
            },
            { threshold: 0.3 } // Triggers when 30% of the cards section is visible
        );

        if (triggerRef.current) observer.observe(triggerRef.current);
        return () => observer.disconnect();
    }, []);

    // Stacked Cards In-View Activation Logic
    useEffect(() => {
        const cards = document.querySelectorAll(".brutal-stack-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cards.forEach(c => c.classList.remove("show"));
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.6 }
        );

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <div className='brutal-intro-section'>
            {/* Background Grid Accent overlay */}
            <div className="brutal-intro-grid-overlay"></div>

            <div className="brutal-intro-left">
                {/* SECTION 1: Top Core Identity Metrics */}
                <div className="brutal-up-left">
                    <div className="brutal-identity-card">
                        <div className='brutal-upper-text'>
                            <p className='font2'>Half</p>
                            <div className="brutal-cc-block">
                                <p className='font3'>CAFFEINE</p>
                                <p className='font3'>CURIOSITY</p>
                            </div>
                        </div>
                        <p className='font1 brutal-bottom-text'>Fully committed to creating cool stuff</p>
                    </div>

                    <div className="brutal-tagline-strip">
                        <div className="brutal-name-tag font3">
                            <p>— MD JUNAID QAMAR <span className='font1 brutal-coder-badge'>.&lt;/coder&gt;</span></p>
                        </div>
                    </div>

                    {/* COUNTER GRID MODULES */}
                    <div className="brutal-counter-grid">
                        <div className="brutal-metric-box">
                            <p className='brutal-metric-num font3'>30<span className='brutal-plus'>+</span></p>
                            <p className='brutal-metric-label font1'>Projects</p>
                        </div>
                        <div className="brutal-metric-box">
                            <p className='brutal-metric-num font3'>200<span className='brutal-plus'>+</span></p>
                            <p className='brutal-metric-label font1'>Leetcode</p>
                        </div>
                        <div className="brutal-metric-box">
                            <p className='brutal-metric-num font3'>10<span className='brutal-plus'>+</span></p>
                            <p className='brutal-metric-label font1'>Certifications</p>
                        </div>
                    </div>
                </div>

                {/* SECTION 2: Vertical Stacked Folders */}
                <div ref={triggerRef} className="brutal-bottom-left">
                    <div className="brutal-cards-stack-container">
                        
                        <div className="brutal-stack-card b-card-1">
                            <div className="brutal-card-header-bar">
                                <span className="brutal-dot-indicator" />
                                <span className="font3">DOSSIER // 01</span>
                            </div>
                            <div className="brutal-card-body-content">
                                <div className="brutal-head-text">
                                    <p className='font2'>More than</p>
                                    <h2 className="font3">A DEVELOPER</h2>
                                </div>
                                <p className="font1 brutal-about-p">
                                    I don’t just write code. <br />
                                    I build things people can actually use. <br />
                                    Ideas. Bugs. Late nights. Fixes. <br />
                                    That’s the process.
                                </p>
                            </div>
                        </div>

                        <div className="brutal-stack-card b-card-2">
                            <div className="brutal-card-header-bar">
                                <span className="brutal-dot-indicator" />
                                <span className="font3">DOSSIER // 02</span>
                            </div>
                            <div className="brutal-card-body-content">
                                <div className="brutal-head-text">
                                    <p className='font2'>My brain</p>
                                    <h2 className="font3">LOVES PROBLEMS</h2>
                                </div>
                                <p className="font1 brutal-about-p">
                                    I enjoy figuring things out. <br />
                                    Break it. Debug it. Rebuild it. <br />
                                    Every solved bug feels like leveling up.
                                </p>
                            </div>
                        </div>

                        <div className="brutal-stack-card b-card-3">
                            <div className="brutal-card-header-bar">
                                <span className="brutal-dot-indicator" />
                                <span className="font3">DOSSIER // 03</span>
                            </div>
                            <div className="brutal-card-body-content">
                                <div className="brutal-head-text">
                                    <p className='font2'>Life Outside</p>
                                    <h2 className="font3">THE SCREEN</h2>
                                </div>
                                <p className="font1 brutal-about-p">
                                    Coding isn’t my only world. <br />
                                    Music, quiet moments, and fish keeping keep me balanced. <br />
                                    Sometimes stepping away is where the next idea begins.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* STICKY STARK RIGHT PROFILE TRACKER */}
            <div className="brutal-intro-right">
                <div className="brutal-flip-frame-inner" ref={imgRef}>
                    
                    {/* Front Frame */}
                    <div className="brutal-flip-front">
                        <div className="brutal-image-wrapper">
                            <img src={pic} alt="Profile Dossier Pic" />
                            <div className="brutal-img-watermark font3">JUNAID Q.</div>
                        </div>
                    </div>
                    
                    {/* Back Frame */}
                    <div className="brutal-flip-back">
                        <div className="brutal-back-content-frame">
                            <img className='brutal-back-bg-img' src={backimg} alt="Background abstract visual" />
                            <div className="brutal-back-overlay-text">
                                <span className="font3">SECURE TERMINAL</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Intro;