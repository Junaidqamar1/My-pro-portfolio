import React, { useState, useEffect, useRef } from 'react';
import '../styles/SkillsAndCerts.css';

const CERTS_DATA = [
  { name: 'Google Cloud Associate', issuer: 'Google', color: '#1a73e8', letter: 'G', num: '01', meta: 'Google · 2024' },
  { name: 'Meta Front-End Developer', issuer: 'Meta', color: '#0866ff', letter: 'M', num: '02', meta: 'Meta · Coursera · 2024' },
  { name: 'React & TypeScript', issuer: 'Udemy', color: '#a435f0', letter: 'R', num: '03', meta: 'Udemy · 2023' },
  { name: 'Python for Data Science', issuer: 'IBM', color: '#054ada', letter: 'I', num: '04', meta: 'IBM · Coursera · 2023' },
  { name: 'UI/UX Design Fundamentals', issuer: 'Google', color: '#34a853', letter: 'U', num: '05', meta: 'Google · 2023' },
  { name: 'Node.js & REST APIs', issuer: 'Udemy', color: '#a435f0', letter: 'N', num: '06', meta: 'Udemy · 2022' },
];

const SKILLS_DATA = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ]
  },
  {
    category: 'Backend & Cloud',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ]
  }
];

export default function SkillsAndCerts() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [activeCert, setActiveCert] = useState(null);
  const [isHoveringCert, setIsHoveringCert] = useState(false);
  const [isHoveringSkill, setIsHoveringSkill] = useState(false);

  const followerRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updateFollower = () => {
      const speed = 0.12;
      followerRef.current.x += (mousePos.x - followerRef.current.x) * speed;
      followerRef.current.y += (mousePos.y - followerRef.current.y) * speed;
      setFollowerPos({ x: followerRef.current.x, y: followerRef.current.y });
      requestRef.current = requestAnimationFrame(updateFollower);
    };
    requestRef.current = requestAnimationFrame(updateFollower);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  return (
    <div className="brutal-sac-container">
      {/* Custom Cursors */}
      <div className={`brutal-cursor ${isHoveringCert ? 'cert-active' : ''}`} style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
      <div className={`brutal-cursor-follower ${isHoveringSkill ? 'skill-active' : ''}`} style={{ left: `${followerPos.x}px`, top: `${followerPos.y}px` }} />

      {/* Floating Preview Box */}
      <div className={`brutal-cert-follower-box ${isHoveringCert ? 'visible' : ''}`} style={{ left: `${mousePos.x + 25}px`, top: `${mousePos.y - 20}px` }}>
        {activeCert && (
          <>
            <div className="brutal-preview-content">
              <div className="brutal-preview-logo font3" style={{ backgroundColor: activeCert.color }}>{activeCert.letter}</div>
              <div className="brutal-preview-name font3">{activeCert.name}</div>
            </div>
            <div className="brutal-preview-label font3">{activeCert.issuer}</div>
          </>
        )}
      </div>

      {/* HERO-MATCHING BACKGROUND TEXT HEADER */}
      <div className="brutal-sac-hdr">
        <div className="brutal-hdr-bg-text font3">EXPERTISE</div>
        <div className="brutal-hdr-fg font3">
          <span className="font1">My Core Stack &</span>
          <h2>CERTIFICATIONS</h2>
        </div>
      </div>

      {/* HERO-MATCHING CAUTION TAPE TICKER */}
      <div className="brutal-tape-ticker">
        <div className="brutal-tape-inner font3">
          CREATIVE CODER — WEB DEVELOPER — DESIGNER — SYSTEM ARCHITECT — CREATIVE CODER — WEB DEVELOPER — DESIGNER — SYSTEM ARCHITECT — CREATIVE CODER — WEB DEVELOPER — DESIGNER — SYSTEM ARCHITECT —
        </div>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="brutal-split">
        {/* LEFT: SKILLS */}
        <div className="brutal-panel">
          <div className="brutal-panel-tag font3">SKILLS INDEX</div>
          
          {SKILLS_DATA.map((cat, idx) => (
            <div className="brutal-cat-box" key={idx}>
              <div className="brutal-cat-title font3">{cat.category}</div>
              <div className="brutal-chip-grid">
                {cat.items.map((skill, sIdx) => (
                  <div 
                    className="brutal-skill-chip font3" 
                    key={sIdx}
                    onMouseEnter={() => setIsHoveringSkill(true)}
                    onMouseLeave={() => setIsHoveringSkill(false)}
                  >
                    <img className="brutal-chip-icon" src={skill.icon} alt="" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: CERTIFICATIONS */}
        <div className="brutal-panel brutal-left-border">
          <div className="brutal-panel-tag font3">VERIFIED BADGES</div>
          <div className="brutal-cert-list">
            {CERTS_DATA.map((cert, idx) => (
              <div 
                className="brutal-cert-row" 
                key={idx}
                onMouseEnter={() => {
                  setActiveCert(cert);
                  setIsHoveringCert(true);
                }}
                onMouseLeave={() => setIsHoveringCert(false)}
              >
                <div className="brutal-cert-num font3">{cert.num}</div>
                <div className="brutal-cert-details">
                  <div className="brutal-cert-title-text font3">{cert.name}</div>
                  <div className="brutal-cert-meta font1">{cert.meta}</div>
                </div>
                <div className="brutal-cert-arrow font3">↗</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}