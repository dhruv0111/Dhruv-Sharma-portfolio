import './HireMeFor.css';

const HireMeFor = () => {
    const fitScenarios = [
        {
            icon: '🎯',
            title: 'An SDET who can design systems, not just scripts',
            description: 'I build test infrastructure that scales—not one-off automation scripts'
        },
        {
            icon: '🤖',
            title: 'Someone who understands AI + testing + reliability',
            description: 'I validate ML models in production and design AI-powered test systems'
        },
        {
            icon: '🤝',
            title: 'An engineer who works directly with product & infra teams',
            description: 'I collaborate cross-functionally to establish quality gates and release strategies'
        },
        {
            icon: '🚀',
            title: 'A self-directed contributor in remote/global teams',
            description: 'I own test strategy decisions and execute independently with minimal oversight'
        },
        {
            icon: '💡',
            title: 'Someone to reduce production surprises in SaaS/AI products',
            description: 'I design systems that catch failures before customers do—preventing incidents, not just finding bugs'
        },
        {
            icon: '📊',
            title: 'An engineer who thinks in metrics and business impact',
            description: 'I measure success in release velocity, incident reduction, and engineering confidence—not just test coverage'
        }
    ];

    return (
        <section id="hire-me" className="section hire-me-section">
            <div className="container">
                <h2 className="section-title">I'm a Strong Fit If You Need</h2>
                <p className="section-subtitle">
                    Clear signals for when to reach out
                </p>

                <div className="fit-grid">
                    {fitScenarios.map((scenario, index) => (
                        <div
                            key={index}
                            className="fit-card card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="fit-icon">{scenario.icon}</div>
                            <div className="fit-content">
                                <h3>{scenario.title}</h3>
                                <p>{scenario.description}</p>
                            </div>
                            <div className="fit-checkmark">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HireMeFor;
