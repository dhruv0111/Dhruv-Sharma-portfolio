import './Experience.css';

const Experience = () => {
    const timeline = [
        {
            year: 'Nov 2025 – Present',
            title: 'SDET-1',
            company: 'Uolo, Gurugram',
            type: 'Current Role',
            description: 'Testing AI-integrated features in EdTech product platform',
            highlights: [
                'Trusted to validate AI-powered recommendation systems in production EdTech platform serving 100K+ users',
                'Own test strategy for ML model integration, working directly with ML engineers on validation frameworks',
                'Design A/B testing infrastructure for AI features, balancing statistical significance with release velocity',
                'Guide quality decisions for personalization features across product and engineering teams'
            ]
        },
        {
            year: 'Aug 2023 – Oct 2025',
            title: 'Software Test Engineer',
            company: 'Clikon Technologies Pvt. Ltd., Noida',
            type: 'Professional Experience',
            description: 'End-to-end testing for enterprise applications with focus on automation',
            highlights: [
                'Trusted to design test strategy for high-risk releases and guide automation decisions across 3 product teams',
                'Owned CI/CD test integration strategy, reducing release cycle time from 2 days to 6 hours',
                'Built contract testing framework that prevented 15+ production integration failures',
                'Led automation initiative that reduced regression testing time by 40% through parallel execution design',
                'Collaborated with backend and frontend teams to establish quality gates for microservice deployments'
            ]
        },
        {
            year: '2025',
            title: 'AI Testing Research',
            company: 'Independent Research',
            type: 'Research & Publication',
            description: 'Published research on ML-driven software testing methodologies',
            highlights: [
                'Published 2 research papers on Zenodo demonstrating applied ML for test prioritization and defect prediction',
                'Designed and validated ML-based test prioritization system improving APFD by ~35%',
                'Built imbalance-aware defect prediction models optimized for recall in testing scenarios',
                'Contributed to academic understanding of AI in software quality assurance with production-focused research'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience & Journey</h2>
                <p className="section-subtitle">My path in quality assurance and automation</p>

                <div className="timeline">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className="timeline-item fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                                <div className="marker-line"></div>
                            </div>

                            <div className="timeline-content card">
                                <div className="timeline-header">
                                    <span className="timeline-year">{item.year}</span>
                                    <span className="timeline-type">{item.type}</span>
                                </div>

                                <h3>{item.title}</h3>
                                <p className="timeline-description">{item.description}</p>

                                <ul className="timeline-highlights">
                                    {item.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
