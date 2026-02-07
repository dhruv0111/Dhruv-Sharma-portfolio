import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Based Test Case Prioritization Engine',
            status: 'Completed',
            problem: 'Regression suites were time-consuming, and not all tests provided equal value during releases.',
            myRole: 'Designed the prioritization logic and integrated it into CI workflows.',
            systemDesign: [
                'Defect risk predicted at module level using historical signals',
                'Test cases mapped to coverage metadata',
                'Priority score calculated per execution cycle',
                'High-risk tests executed earlier in the pipeline'
            ],
            keyDecisions: [
                'Chose lightweight, explainable models over complex black-box approaches',
                'Designed fallback logic for cold-start and low-confidence scenarios'
            ],
            impact: {
                result: 'Reduced regression execution time by ~35%, improved early fault detection, increased confidence in partial test execution'
            },
            nextImprovement: 'Next iteration would incorporate real-time production signals to continuously refine prioritization.',
            tech: ['Python', 'Scikit-learn', 'NASA CM1', 'APFD Metric', 'Test Automation'],
            github: 'https://github.com/dhruv0111/AI-Based-Test-Case-Prioritization-Using-Defect-Risk-Prediction',
            demo: 'https://zenodo.org/records/18450817'
        },
        {
            title: 'Software Defect Prediction Using Machine Learning',
            status: 'Completed',
            problem: 'Manual testing cannot scale to identify defect-prone modules in large codebases.',
            myRole: 'Designed and implemented ML-based defect prediction system to support risk-based test automation.',
            systemDesign: [
                'Feature extraction from 21 static code metrics (complexity, LOC, coupling)',
                'Logistic Regression with class-balanced learning for imbalance handling',
                'Train-test split (80-20) with stratified sampling',
                'Evaluation pipeline: Accuracy, Precision, Recall, F1-score'
            ],
            keyDecisions: [
                'Chose Logistic Regression for explainability over complex black-box models',
                'Optimized for recall to minimize missed defects in testing scenarios',
                'Used class weighting instead of SMOTE for production stability'
            ],
            impact: {
                result: 'Significantly improved recall for defect-prone modules compared to baseline. Published on Zenodo (DOI: 10.5281/zenodo.18405705)'
            },
            tech: ['Python', 'Scikit-learn', 'Pandas', 'NASA CM1 Dataset', 'Jupyter'],
            github: 'https://github.com/dhruv0111/software-defect-prediction-ml-test-automation',
            demo: 'https://doi.org/10.5281/zenodo.18405705'
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Selected Systems I've Built & Scaled</h2>
                <p className="section-subtitle">
                    Production-focused testing and reliability systems designed to reduce release risk and improve confidence.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-header">
                                <div className="header-top">
                                    <h3 className="project-title">{project.title}</h3>
                                    {project.status && (
                                        <span className={`project-status status-${project.status.toLowerCase()}`}>
                                            {project.status}
                                        </span>
                                    )}
                                </div>
                                <div className="project-problem">
                                    <span className="problem-label">🟦 Problem</span>
                                    <span className="problem-text">{project.problem}</span>
                                </div>
                            </div>

                            {project.myRole && (
                                <div className="project-role">
                                    <strong>My Role:</strong> {project.myRole}
                                </div>
                            )}

                            {project.systemDesign && (
                                <div className="project-features">
                                    <h4>System Design:</h4>
                                    <ul>
                                        {project.systemDesign.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.approach && (
                                <div className="project-features">
                                    <h4>Approach:</h4>
                                    <ul>
                                        {project.approach.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.keyDecisions && (
                                <div className="project-decisions">
                                    <h4>Key Decisions:</h4>
                                    <ul>
                                        {project.keyDecisions.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="project-impact">
                                <h4>Impact:</h4>
                                <div className="impact-result">
                                    <p>{project.impact.result}</p>
                                </div>
                            </div>

                            {project.nextImprovement && (
                                <div className="project-next">
                                    <h4>Next Improvement:</h4>
                                    <p>{project.nextImprovement}</p>
                                </div>
                            )}

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} className="btn btn-secondary btn-sm">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View Code
                                </a>
                                {project.demo && (
                                    <a href={project.demo} className="btn btn-secondary btn-sm">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        View Publication
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
