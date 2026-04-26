import React, { useEffect, useRef } from "react";
import "../styles/projects.css";

// ── Replace these with your actual project screenshot imports ──
import devload from "../assets/devload.png";
import webhound from "../assets/webhound.png";
import shopeasy  from "../assets/shopeasy.png";
import tailorgo from "../assets/tailorgo.png";
// import resumeImg  from "../assets/projects/resume.png";

const projects = [
  {
    id: "01",
    label: "01 — Featured",
    type: "Full Stack",
    title: "DEVELOAD- CDN & Cloud Stoage",
    desc: "Platform Gives Developer space to Store their Assets .",
    tags: [
      { text: "React",   cls: "red" },
      { text: "Node.js", cls: "blk" },
      { text: "AWS",  cls: "out" },
      { text: "MongoDB", cls: "blk" },
    ],
    status: "live",
    visClass: "red-vis",
    cardSize: "tall",
    marginTop: 0,
    img: devload,         
    imgAlt: "AI Chat Dashboard screenshot",
    imgPlaceholderBg: "#1a0000",
  },
  {
    id: "02",
    label: "02",
    type: "E-Commerce",
    title: "WebHound",
    desc: "Full cart-to-checkout flow with Stripe payments and real-time inventory.",
    tags: [
      { text: "Next.js",  cls: "red" },
      { text: "Stripe",   cls: "blk" },
      { text: "Firebase", cls: "out" },
    ],
    status: "live",
    visClass: "dark-vis",
    cardSize: "short",
    marginTop: 60,
    img: webhound,
    imgAlt: "Shop Platform screenshot",
    imgPlaceholderBg: "#0a0a0a",
  },
  {
    id: "03",
    label: "03",
    type: "UI / UX",
    title: "Design System",
    desc: "Component library built from scratch. Reusable, accessible, and opinionated.",
    tags: [
      { text: "React", cls: "red" },
      { text: "Figma", cls: "out" },
      { text: "CSS",   cls: "blk" },
    ],
    status: null,
    visClass: "cream-vis",
    cardSize: "tall",
    marginTop: 20,
    img: shopeasy,
    imgAlt: "Design System screenshot",
    imgPlaceholderBg: "#f0ebe0",
  },
  {
    id: "04",
    label: "04",
    type: "Dashboard",
    title: "Leetcode Tracker",
    desc: "Personal analytics for 200+ solved problems with charts and streaks.",
    tags: [
      { text: "Python",   cls: "blk" },
      { text: "Flask",    cls: "out" },
      { text: "Chart.js", cls: "red" },
    ],
    status: null,
    visClass: "red-vis",
    cardSize: "short",
    marginTop: 80,
    img:tailorgo,
    imgAlt: "Leetcode Tracker screenshot",
    imgPlaceholderBg: "#0a0000",
  },
  {
    id: "05",
    label: "05",
    type: "AI Tool",
    title: "Smart Resume AI",
    desc: "Drop a job description, get a tailored resume and cover letter back.",
    tags: [
      { text: "React",      cls: "red" },
      { text: "Claude API", cls: "blk" },
      { text: "Tailwind",   cls: "out" },
    ],
    status: "wip",
    visClass: "dark-vis",
    cardSize: "tall",
    marginTop: 30,
    // img: resumeImg,
    imgAlt: "Smart Resume AI screenshot",
    imgPlaceholderBg: "#07020d",
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
      const pct = (wrapper.scrollLeft / max) * 100;
      fill.style.width = Math.max(10, pct) + "%";
    };

    const onMouseDown = (e) => {
      isDragging = true;
      startX     = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
      wrapper.style.cursor = "grabbing";
    };
    const onMouseUp   = () => { isDragging = false; wrapper.style.cursor = "grab"; };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x    = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.4;
      wrapper.scrollLeft = scrollLeft - walk;
      updateProgress();
    };
    const onTouchStart = (e) => { startX = e.touches[0].pageX; scrollLeft = wrapper.scrollLeft; };
    const onTouchMove  = (e) => { wrapper.scrollLeft = scrollLeft - (e.touches[0].pageX - startX); updateProgress(); };

    wrapper.addEventListener("mousedown",  onMouseDown);
    window.addEventListener ("mouseup",    onMouseUp);
    wrapper.addEventListener("mousemove",  onMouseMove);
    wrapper.addEventListener("scroll",     updateProgress);
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchmove",  onTouchMove,  { passive: true });

    wrapper.style.overflowX       = "scroll";
    wrapper.style.scrollbarWidth  = "none";
    wrapper.style.msOverflowStyle = "none";

    const style = document.createElement("style");
    style.textContent = `.scroll-track-wrapper::-webkit-scrollbar { display: none; }`;
    document.head.appendChild(style);

    return () => {
      wrapper.removeEventListener("mousedown",  onMouseDown);
      window.removeEventListener ("mouseup",    onMouseUp);
      wrapper.removeEventListener("mousemove",  onMouseMove);
      wrapper.removeEventListener("scroll",     updateProgress);
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchmove",  onTouchMove);
    };
  }, []);

  return (
    <section className="projects">
      <div className="project-container">

        <div className="project-title">
          <span className="font2">MY</span>
          <h2 className="project-h font3">Projects</h2>
        </div>

        <div className="scroll-hint">
          <div className="scroll-arrow">
            <span>›</span><span>›</span><span>›</span>
          </div>
          Drag to explore
        </div>

        <div className="scroll-track-wrapper" ref={wrapperRef}>
          <div className="scroll-track">
            {projects.map((p) => (
              <div
                key={p.id}
                className={`proj-card ${p.cardSize}`}
                style={{ marginTop: p.marginTop }}
              >

                <div className={`card-visual ${p.visClass}`}>
                  <span className={`vis-num ${p.visClass === "cream-vis" ? "dark-num" : ""}`}>
                    {p.id}
                  </span>

                  {p.img ? (

                    <img
                      src={p.img}
                      alt={p.imgAlt}
                      className="project-img"
                    />
                  ) : (
                    /* Placeholder — replace with real img when ready */
                    <div
                      className="project-img-placeholder"
                      style={{ background: p.imgPlaceholderBg }}
                    >
                      <div className="placeholder-browser">
                        <div className="placeholder-bar">
                          <span className="pb-dot pb-r" />
                          <span className="pb-dot pb-y" />
                          <span className="pb-dot pb-g" />
                        </div>
                        <div className="placeholder-lines">
                          <div className="ph-line" style={{ width: "70%" }} />
                          <div className="ph-line" style={{ width: "100%" }} />
                          <div className="ph-line" style={{ width: "55%" }} />
                          <div className="ph-line" style={{ width: "80%" }} />
                        </div>
                      </div>
                      <p className="placeholder-label">
                        Add your screenshot here
                      </p>
                    </div>
                  )}
                </div>

                {/* ── Card Body ── */}
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-num">{p.label}</span>
                    <span className="card-type">{p.type}</span>
                  </div>

                  <div className="card-title font4">{p.title}</div>
                  <div className="card-desc">{p.desc}</div>

                  <div className="card-tags">
                    {p.tags.map((tag) => (
                      <span key={tag.text} className={`tag ${tag.cls}`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <button className="view-btn" onClick={() => window.open("https://devload.cloudcoderhub.in/", "_blank")}>View ↗</button>
                    {p.status === "live" && (
                      <span className="live-dot">Live</span>
                    )}
                    {p.status === "wip" && (
                      <span className="wip-badge">In Progress</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ width: "56px", flexShrink: 0 }} />
          </div>
        </div>

        <div className="progress-track">
          <div className="progress-fill" ref={fillRef} />
        </div>
      </div>
    </section>
  );
}

export default Projects;