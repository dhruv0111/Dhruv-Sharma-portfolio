import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

const Skills = () => {
    const titleReveal = useScrollReveal({ threshold: 0.3 });

    const skillCategories = [
        {
            title: '🧪 Test Engineering',
            skills: [
                'Scalable UI and API automation frameworks',
                'Risk-based test strategies aligned with release velocity',
                'CI-integrated regression and smoke pipelines',
                'Flaky test detection and quarantine mechanisms'
            ],
            proof: 'Focused on reducing false failures and improving release confidence.'
        },
        {
            title: '🤖 AI-Driven Testing',
            skills: [
                'ML-based defect risk prediction',
                'Test case prioritization using historical failure data',
                'AI-assisted test selection for faster feedback',
                'Explainable prioritization models for engineering teams'
            ],
            proof: 'Used to surface high-risk failures earlier and guide release decisions.'
        },
        {
            title: '🔁 Automation Systems',
            skills: [
                'Modular framework architecture',
                'Intelligent retries and failure classification',
                'Environment-aware execution strategies',
                'Test data orchestration and isolation'
            ],
            proof: 'Designed to improve signal quality, not inflate coverage.'
        },
        {
            title: '📈 Reliability & Observability',
            skills: [
                'Flaky test detection and quarantine',
                'Failure trend analysis',
                'CI pipeline health monitoring',
                'Release confidence tracking'
            ],
            proof: 'Treats test reliability as a measurable system property.'
        },
        {
            title: '⚙️ Tooling & Stack',
            skills: [
                'Selenium / Playwright',
                'API testing and contract validation',
                'CI/CD integration',
                'Git-based workflows'
            ],
            proof: '2+ years production experience with enterprise test automation and ML research implementations.'
        },
    ];

    // Create refs for each skill card
    const cardRefs = skillCategories.map((_, index) =>
        useScrollReveal({ threshold: 0.2, delay: index * 120 })
    );

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2
                    ref={titleReveal.ref}
                    className={`section-title scroll-reveal ${titleReveal.isVisible ? 'is-visible' : ''}`}
                >
                    Technical Capabilities
                </h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            ref={cardRefs[index].ref}
                            className={`skill-category card card-3d scroll-reveal-rotate ${cardRefs[index].isVisible ? 'is-visible' : ''}`}
                        >
                            <div className="category-header">
                                <h3>{category.title}</h3>
                            </div>

                            <ul className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="skill-item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                            {category.proof && (
                                <div className="skill-proof">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span>{category.proof}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

