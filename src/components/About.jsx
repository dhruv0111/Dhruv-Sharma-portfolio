import profileImage from '../assets/images/profile.png';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
    const titleReveal = useScrollReveal({ threshold: 0.3 });
    const imageReveal = useScrollReveal({ threshold: 0.3, delay: 100 });
    const textReveal = useScrollReveal({ threshold: 0.3, delay: 200 });
    const principlesReveal = useScrollReveal({ threshold: 0.3, delay: 300 });

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2
                    ref={titleReveal.ref}
                    className={`section-title scroll-reveal ${titleReveal.isVisible ? 'is-visible' : ''}`}
                >
                    How I Approach Engineering Problems
                </h2>

                <div className="about-content">
                    <div
                        ref={imageReveal.ref}
                        className={`about-image-wrapper scroll-reveal-left ${imageReveal.isVisible ? 'is-visible' : ''}`}
                    >
                        <div className="image-border"></div>
                        <img src={profileImage} alt="Dhruv" className="about-image" />
                    </div>

                    <div
                        ref={textReveal.ref}
                        className={`about-text scroll-reveal-right ${textReveal.isVisible ? 'is-visible' : ''}`}
                    >
                        <p className="about-intro">
                            I treat testing and quality as an <strong>engineering and risk-management problem</strong>, not a checklist activity.
                        </p>

                        <p>
                            Rather than maximizing test counts, I focus on understanding failure modes, identifying high-risk areas, and designing systems that surface reliable signals early.
                        </p>

                        <p className="about-goal">
                            My goal is simple: <strong>help teams move fast without increasing production risk.</strong>
                        </p>

                        <div
                            ref={principlesReveal.ref}
                            className={`about-principles scroll-reveal ${principlesReveal.isVisible ? 'is-visible' : ''}`}
                        >
                            <h3>Principles I Operate By</h3>
                            <div className="principles-grid">
                                <div className="principle-item">
                                    <div className="principle-icon">🎯</div>
                                    <div className="principle-text">
                                        <h4>Design for signal, not noise</h4>
                                    </div>
                                </div>

                                <div className="principle-item">
                                    <div className="principle-icon">⚡</div>
                                    <div className="principle-text">
                                        <h4>Optimize for confidence under change</h4>
                                    </div>
                                </div>

                                <div className="principle-item">
                                    <div className="principle-icon">🏗️</div>
                                    <div className="principle-text">
                                        <h4>Treat reliability as a first-class system</h4>
                                    </div>
                                </div>

                                <div className="principle-item">
                                    <div className="principle-icon">💡</div>
                                    <div className="principle-text">
                                        <h4>Prefer explainable solutions over fragile complexity</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="about-tradeoff">
                            When tradeoffs arise between speed and confidence, I bias toward surfacing risk early rather than blocking releases late.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

