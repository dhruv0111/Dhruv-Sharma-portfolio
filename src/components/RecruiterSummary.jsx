import './RecruiterSummary.css';

const RecruiterSummary = () => {
    return (
        <section id="recruiter" className="section recruiter-section">
            <div className="container recruiter-container">
                <div className="recruiter-header">
                    <h1>SDET | Reliability & AI-Driven Testing Systems</h1>
                    <p className="recruiter-tagline">One-page summary for recruiters and hiring managers</p>
                </div>

                <div className="recruiter-snapshot">
                    <h2>Snapshot</h2>
                    <p>
                        I'm a Senior SDET focused on building reliability-first automation and AI-assisted testing systems that reduce production risk and help teams ship faster with confidence.
                    </p>
                    <p>
                        My work sits at the intersection of system design, test engineering, and AI-aware quality strategies, with a strong emphasis on signal quality, risk detection, and production readiness.
                    </p>
                </div>

                <div className="recruiter-section">
                    <h2>What I Do Best</h2>
                    <ul className="best-list">
                        <li>Design testing systems that scale with product complexity</li>
                        <li>Reduce release risk without slowing delivery</li>
                        <li>Turn test automation into a decision-support system, not just a gate</li>
                        <li>Help teams regain trust in CI and regression pipelines</li>
                    </ul>
                </div>

                <div className="recruiter-section">
                    <h2>Core Strengths</h2>
                    <div className="strengths-grid">
                        <div className="strength-category">
                            <h3>🛡️ Reliability Engineering</h3>
                            <ul>
                                <li>Risk-based test strategies</li>
                                <li>Flaky test detection and quarantine</li>
                                <li>Release confidence metrics</li>
                                <li>Failure trend analysis</li>
                            </ul>
                        </div>

                        <div className="strength-category">
                            <h3>🤖 AI-Driven Testing</h3>
                            <ul>
                                <li>ML-based defect risk prediction</li>
                                <li>Test case prioritization using historical signals</li>
                                <li>Explainable AI approaches for engineering trust</li>
                                <li>AI-specific validation strategies (drift, distributions, thresholds)</li>
                            </ul>
                        </div>

                        <div className="strength-category">
                            <h3>⚙️ Automation & CI</h3>
                            <ul>
                                <li>Scalable UI and API automation frameworks</li>
                                <li>CI-integrated regression pipelines</li>
                                <li>Intelligent retries and environment-aware execution</li>
                                <li>Failure classification (infra vs product defects)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="recruiter-section impact-section">
                    <h2>Selected Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <span className="impact-icon">⬇</span>
                            <span>Reduced regression execution time by ~35%</span>
                        </div>
                        <div className="impact-item">
                            <span className="impact-icon">⬇</span>
                            <span>Reduced flaky test failures by ~50%</span>
                        </div>
                        <div className="impact-item">
                            <span className="impact-icon">⬆</span>
                            <span>Improved early detection of high-impact defects</span>
                        </div>
                        <div className="impact-item">
                            <span className="impact-icon">⬆</span>
                            <span>Increased release confidence for engineering teams</span>
                        </div>
                    </div>
                </div>

                <div className="recruiter-section thinking-section">
                    <h2>How I Think</h2>
                    <p>
                        I approach testing as an <strong>engineering and risk-management problem</strong>, not a checklist activity.
                    </p>
                    <div className="thinking-points">
                        <div className="thinking-point">
                            <span className="point-icon">🎯</span>
                            <span>Failure modes over feature parity</span>
                        </div>
                        <div className="thinking-point">
                            <span className="point-icon">📊</span>
                            <span>Signal quality over test count</span>
                        </div>
                        <div className="thinking-point">
                            <span className="point-icon">💡</span>
                            <span>Explainability over fragile complexity</span>
                        </div>
                    </div>
                    <p className="thinking-goal">
                        <strong>My goal:</strong> Help teams move fast without increasing production risk.
                    </p>
                </div>

                <div className="recruiter-section">
                    <h2>Experience Snapshot</h2>
                    <div className="experience-summary">
                        <div className="exp-item">
                            <h3>Senior SDET / Test Engineer</h3>
                            <ul>
                                <li>Owned automation framework evolution</li>
                                <li>Designed risk-based regression strategies</li>
                                <li>Partnered with product and engineering teams on release readiness</li>
                            </ul>
                        </div>
                        <div className="exp-item">
                            <h3>AI Testing Research</h3>
                            <ul>
                                <li>Applied ML techniques to test prioritization and defect prediction</li>
                                <li>Focused on practical, production-ready solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="recruiter-section fit-section">
                    <div className="fit-column">
                        <h2>Best Fit Roles</h2>
                        <ul>
                            <li>Senior / Lead SDET</li>
                            <li>SDET (AI / Platform / Reliability)</li>
                            <li>Software Engineer in Test</li>
                            <li>Quality Engineer for AI or data-driven products</li>
                        </ul>
                    </div>
                    <div className="fit-column">
                        <h2>Best Fit Environments</h2>
                        <ul>
                            <li>SaaS and platform teams</li>
                            <li>AI or ML-driven products</li>
                            <li>Startups scaling from MVP to growth</li>
                            <li>Teams that value reliability and engineering judgment</li>
                        </ul>
                    </div>
                </div>

                <div className="recruiter-section proof-section">
                    <h2>Proof of Work</h2>
                    <div className="proof-links">
                        <div className="proof-link">
                            <strong>Portfolio:</strong> System designs, incident postmortems, AI testing philosophy
                        </div>
                        <div className="proof-link">
                            <strong>GitHub:</strong> Production-grade automation and AI experimentation
                        </div>
                        <div className="proof-link">
                            <strong>Publications:</strong> Applied research in AI-driven testing
                        </div>
                    </div>
                </div>

                <div className="recruiter-footer">
                    <p>
                        <strong>Bottom line:</strong> I'm a reliability-focused engineer who reduces risk and helps teams ship faster.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RecruiterSummary;
