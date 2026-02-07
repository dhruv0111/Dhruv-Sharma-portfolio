import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Technology (B.Tech)',
            field: 'Computer Science & Engineering',
            institution: 'Dr. APJ Abdul Kalam Technical University',
            duration: '2020 - 2024',
            type: 'Undergraduate',
            highlights: [
                'Focused on Software Testing, Quality Assurance, and AI/ML applications',
                'Published research on AI-driven testing methodologies',
                'Built production-grade automation frameworks as part of academic projects'
            ]
        },
        {
            degree: 'Senior Secondary (12th)',
            field: 'Physics, Chemistry, Mathematics (PCM)',
            institution: 'Central Board of Secondary Education (CBSE)',
            duration: '2019 - 2020',
            type: 'Higher Secondary'
        },
        {
            degree: 'Secondary (10th)',
            field: 'General Studies',
            institution: 'Central Board of Secondary Education (CBSE)',
            duration: '2017 - 2018',
            type: 'Secondary'
        }
    ];

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">Academic foundation in computer science and engineering</p>

                <div className="education-timeline">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="education-item fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="education-marker">
                                <div className="marker-dot"></div>
                                {index !== education.length - 1 && <div className="marker-line"></div>}
                            </div>

                            <div className="education-content card">
                                <div className="education-header">
                                    <span className="education-duration">{item.duration}</span>
                                    <span className="education-type">{item.type}</span>
                                </div>

                                <h3>{item.degree}</h3>
                                <p className="education-field">{item.field}</p>
                                <p className="education-institution">{item.institution}</p>

                                {item.highlights && (
                                    <ul className="education-highlights">
                                        {item.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
