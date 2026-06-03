import React, { useEffect, useRef } from "react";
import "../styles/projects.css";

// ── Image Assets ──
import devload from "../assets/devload.png";
import webhound from "../assets/webhound.png";
import tailorgo from "../assets/tailorgo.png";

const projects = [
  {
    id: "01",
    label: "01 — Featured",
    type: "Frontend",
    title: "TailorGo",
    desc: "Startup idea which brings master tailors online seamlessly.",
    tags: [
      { text: "React", cls: "tag-red" },
      { text: "Node.js", cls: "tag-blk" },
      { text: "AWS", cls: "tag-out" },
      { text: "MongoDB", cls: "tag-blk" },
    ],
    status: "live",
    cardSize: "tall",
    marginTop: 0,
    img: tailorgo,         
    imgAlt: "tailorgo",
  },
  {
    id: "02",
    label: "02",
    type: "Full Stack",
    title: "WebHound",
    desc: "Analyze and tear down any website performance with webhound.",
    tags: [
      { text: "REACT", cls: "tag-red" },
      { text: "Stripe", cls: "tag-blk" },
      { text: "Firebase", cls: "tag-out" },
    ],
    status: "live",
    cardSize: "short",
    marginTop: 80,
    img: webhound,
    imgAlt: "Shop Platform screenshot",
  },
  {
    id: "03",
    label: "03",
    type: "Frontend",
    title: "Devload - Personal CDN",
    desc: "Component library built from scratch. Reusable, accessible, and opinionated.",
    tags: [
      { text: "React", cls: "tag-red" },
      { text: "file-storage", cls: "tag-out" },
      { text: "tailwind", cls: "tag-blk" },
    ],
    status: null,
    cardSize: "tall",
    marginTop: 20,
    img: devload,
    imgAlt: "Design System screenshot",
  },
  {
    id: "04",
    label: "04",
    type: "Dashboard",
    title: "Leetcode Tracker",
    desc: "Personal analytics for 200+ solved problems with charts and streaks.",
    tags: [
      { text: "Python", cls: "tag-blk" },
      { text: "Flask", cls: "tag-out" },
      { text: "Chart.js", cls: "tag-red" },
    ],
    status: null,
    cardSize: "short",
    marginTop: 110,
    img: devload,
    imgAlt: "Leetcode Tracker screenshot",
  },
];

function Projects() {
  const wrapperRef = useRef(null);
  const fillRef    = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const fill    = fillRef.current;
    if (!wrapper || !fill) return;

    let isDragging = false;
    let startX     = 0;
    let scrollLeft = 0;

    const updateProgress = () => {
      const max = wrapper.scrollWidth - wrapper.clientWidth;
      if (max <= 0) return;
      const pct = (wrapper.scrollLeft / max) * 100;
      fill.style.width = Math.min(100, Math.max(8, pct)) + "%";
    };

    const onMouseDown = (e) => {
      isDragging = true;
      startX     = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
      wrapper.style.cursor = "grabbing";
    };

    const onMouseUp = () => { 
      isDragging = false; 
      wrapper.style.cursor = "grab"; 
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x    = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag sensitivity
      wrapper.scrollLeft = scrollLeft - walk;
      updateProgress();
    };

    wrapper.addEventListener("mousedown",  onMouseDown);
    window.addEventListener ("mouseup",    onMouseUp);
    wrapper.addEventListener("mousemove",  onMouseMove);
    wrapper.addEventListener("scroll",     updateProgress);

    return () => {
      wrapper.removeEventListener("mousedown",  onMouseDown);
      window.removeEventListener ("mouseup",    onMouseUp);
      wrapper.removeEventListener("mousemove",  onMouseMove);
      wrapper.removeEventListener("scroll",     updateProgress);
    };
  }, []);

  return (
    <section className="brutal-projects-section" id="project">
      {/* BACKGROUND TEXT GRID HEADER */}
      <div className="brutal-projects-header">
        <div className="brutal-proj-bg-text font3">WORKS</div>
        <div className="brutal-proj-fg-text">
          <span className="font1">Selected Artifacts</span>
          <h2 className="font3">MY PROJECTS</h2>
        </div>
      </div>

      <div className="brutal-projects-container">
        {/* DRAG BANNER HINT */}
        <div className="brutal-drag-hint-banner font3">
          DRAG TO EXPLORE <span className="arrow-flash">›››</span>
        </div>

        / {/* HORIZONTAL SCROLL TRACK */}
        <div className="brutal-scroll-track-wrapper" ref={wrapperRef}>
          <div className="brutal-scroll-track">
            {projects.map((p) => (
              <div
                key={p.id}
                className={`brutal-proj-card ${p.cardSize}`}
                style={{ '--card-mt': `${p.marginTop}px` }}
              >
                {/* Visual Image / Frame Area */}
                <div className="brutal-card-visual">
                  <div className="brutal-card-badge font3">{p.id}</div>
                  {p.img ? (
                    <img src={p.img} alt={p.imgAlt} className="brutal-project-img" />
                  ) : (
                    <div className="brutal-img-fallback">
                      <div className="fallback-dots">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Meta & Typography */}
                <div className="brutal-card-body">
                  <div className="brutal-card-meta font3">
                    <span className="b-meta-label">{p.label}</span>
                    <span className="b-meta-type">{p.type}</span>
                  </div>

                  <h3 className="brutal-card-title font3">{p.title}</h3>
                  <p className="brutal-card-desc font1">{p.desc}</p>

                  {/* Badges / Tech Row */}
                  <div className="brutal-card-tags">
                    {p.tags.map((tag) => (
                      <span key={tag.text} className={`brutal-tag font3 ${tag.cls}`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="brutal-card-footer">
                    <button 
                      className="brutal-view-btn font3" 
                      onClick={() => window.open("https://devload.cloudcoderhub.in/", "_blank")}
                    >
                      VIEW PROJECT ↗
                    </button>
                    
                    {p.status === "live" && (
                      <div className="brutal-live-badge font3">
                        <span className="live-pulse-dot" /> LIVE
                      </div>
                    )}
                    {p.status === "wip" && (
                      <div className="brutal-wip-badge font3">WIP</div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* End spacing block */}
            <div className="brutal-track-end-spacer" />
          </div>
        </div>

        {/* BRUTALIST PROGRESS TIMELINE */}
        <div className="brutal-progress-bar-container">
          <div className="brutal-progress-bar-rail">
            <div className="brutal-progress-bar-fill" ref={fillRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;