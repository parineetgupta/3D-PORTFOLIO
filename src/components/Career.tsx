import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Design & Prototyping</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing intuitive interfaces and engaging user experiences using Figma,
              wireframing, and interactive prototyping.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Web Engineering</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building responsive, high-performance web applications using React, Next.js,
              and Tailwind CSS for seamless interactions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Insights & Reporting</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Analyzing complex datasets, tracking KPIs, and creating business intelligence
              dashboards using SQL, PostgreSQL, and Power BI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic & Visual Design</h4>
                <h5>Branding & Content Production</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Created visually engaging designs for social media, branding, marketing campaigns, and digital platforms using modern design principles. Focused on delivering creative, user-centric visuals that enhance brand identity and audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
