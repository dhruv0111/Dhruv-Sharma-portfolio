import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-text fade-in-up">
                        <h2>If You're Building a SaaS or AI Product and Want Fewer Production Surprises, Let's Talk</h2>
                        <p className="contact-intro">
                            I help engineering teams ship faster with confidence.
                        </p>
                        <p className="contact-description">
                            If you need someone who can design test systems that scale, prevent incidents before they reach customers, and work independently with product and infrastructure teams—reach out. I'm open to discussing full-time roles, contract work, or consulting opportunities where I can make a measurable impact on release velocity and system reliability.
                        </p>
                    </div>

                    <div className="contact-buttons fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <a href="mailto:dhruvsharmaaugust2003@gmail.com" className="btn btn-primary btn-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Email Me
                        </a>

                        <a href="https://www.linkedin.com/in/dhruv-sharma-ai/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            LinkedIn
                        </a>

                        <a href="https://github.com/dhruv0111" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    </div>

                    <div className="contact-footer fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <p>© 2025 Dhruv. Built with passion for quality.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
