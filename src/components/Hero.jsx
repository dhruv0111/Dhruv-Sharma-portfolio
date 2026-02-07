import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting fade-in-up">
            Dhruv Sharma
          </div>

          <h1 className="hero-title fade-in-up" style={{ animationDelay: '120ms' }}>
            SDET Building AI-Driven Reliability Systems
          </h1>

          <p className="hero-description fade-in-up" style={{ animationDelay: '220ms' }}>
            I design AI-driven testing and reliability systems that prevent production incidents, reduce release risk, and help teams ship faster.
          </p>

          <p className="hero-supporting fade-in-up" style={{ animationDelay: '280ms' }}>
            My work focuses on signal quality, system design, and AI-aware testing, helping SaaS and AI teams scale with confidence.
          </p>

          <div className="hero-meta fade-in-up" style={{ animationDelay: '320ms' }}>
            <span className="meta-item">Test Infrastructure</span>
            <span className="meta-divider">•</span>
            <span className="meta-item">ML Decision Systems</span>
            <span className="meta-divider">•</span>
            <span className="meta-item">Production Reliability</span>
          </div>

          <div className="hero-buttons fade-in-up" style={{ animationDelay: '380ms' }}>
            <button className="btn btn-primary" onClick={scrollToProjects}>
              <span>View Systems I've Built</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

