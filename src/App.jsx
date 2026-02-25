import React, { useEffect, useState } from 'react';
import { ShieldCheck, Scale, Briefcase, ChevronRight, Phone, FileText, Landmark, CheckCircle2 } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <ShieldCheck size={32} color="var(--lic-navy)" />
            SecureLex <span>Advisors</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#trust">Why Us</a>
            <a href="#contact">Contact</a>
            <button className="btn-primary">Get Consultation</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Insurance · Legal · Advisory</div>
            <h1>Financial Protection & Legal Compliance Under One Roof.</h1>
            <p>
              We bridge the gap between rigorous legal strategy and robust financial protection.
              Authoritative advisory services handling your most critical paperwork, estate planning,
              and taxation with uncompromising integrity.
            </p>
            <div className="hero-cta">
              <button className="btn-accent">
                Book a Confidential Review <ChevronRight size={20} />
              </button>
              <button className="btn-primary" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Protection & Advisory</h2>
            <p>From securing your family’s future with top-tier insurance to solidifying your estate and corporate legal structures, we offer holistic consultation.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck />
              </div>
              <h3>Insurance Advisory</h3>
              <p>Strategic financial protection mapping. We ensure that life, health, and corporate liabilities are mitigated with authoritative policies.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Scale />
              </div>
              <h3>Legal & Compliance</h3>
              <p>Proactive legal safeguards for individuals and businesses. From contract drafting to regulatory compliance and dispute resolution strategy.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Landmark />
              </div>
              <h3>Estate & Tax Planning</h3>
              <p>Long-term wealth preservation. Trust structures, succession planning, and taxation optimization handled by certified professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section" id="about">
        <div className="container trust-grid">
          <div className="trust-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional Advisory Discussion"
            />
            <div className="trust-overlay">
              <h3 style={{ margin: 0, fontSize: '2rem', fontFamily: 'Playfair Display' }}>15+ Years</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>Combined Expertise</p>
            </div>
          </div>

          <div className="trust-content">
            <h2>Authority You Can Rely On.</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
              We are not a startup experimenting with advice. SecureLex Advisors is built on a
              foundation of hard-earned trust, meticulous attention to detail, and a deep understanding
              of both statutory frameworks and financial instruments.
            </p>

            <ul className="trust-list">
              <li>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h4>Integrated Approach</h4>
                  <p>Legal foresight combined with insurance-backed security, eliminating gaps in your protection.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h4>Absolute Confidentiality</h4>
                  <p>Your institutional and personal data is handled with strict attorney-client level privilege.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h4>Future-Proof Strategy</h4>
                  <p>We build architectures meant to last generations, adapting to tax and market changes.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to secure your legacy?</h2>
          <p>Schedule a preliminary consultation with our senior advisors to map out your legal and financial perimeter.</p>
          <button className="btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Contact Our Office <Phone size={20} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ gridColumn: 'span 1' }}>
              <div className="footer-logo">
                <ShieldCheck size={24} color="var(--lic-yellow)" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                SecureLex <span>Advisors</span>
              </div>
              <p className="footer-about">
                Authority in legal strategy and financial protection. We handle the paperwork so you can focus on what matters most.
              </p>
            </div>

            <div className="footer-col">
              <h4>Practice Areas</h4>
              <div className="footer-links">
                <a href="#">Insurance Assessment</a>
                <a href="#">Corporate Compliance</a>
                <a href="#">Estate Planning</a>
                <a href="#">Taxation Advisory</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Our Advisors</a>
                <a href="#">Client Portal</a>
                <a href="#">Careers</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-links">
                <a href="#">+91 (800) 123-4567</a>
                <a href="#">advisory@securelex.in</a>
                <a href="#">1204 Financial District,<br />New Delhi, India 110001</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SecureLex Advisors. All rights reserved. Not affiliated with Life Insurance Corporation of India (LIC).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
