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
            LIC <span>for you</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#trust">Why Us</a>
            <a href="#contact">Contact</a>
            <a href="https://wa.me/919866107969" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>Get Consultation</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Insurance · Financial Planning · Advisory</div>
            <h1>Complete Financial Protection & Wealth Management.</h1>
            <p>
              With over 23 years of dedicated service in LIC, we provide robust financial protection and comprehensive advisory services. From securing your family's future to estate planning and wealth management with uncompromising integrity.
            </p>
            <div className="hero-cta">
              <a href="https://wa.me/919866107969" target="_blank" rel="noreferrer" className="btn-accent" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                Book a Confidential Review <ChevronRight size={20} />
              </a>
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
            <h2>Comprehensive Insurance & Financial Advisory</h2>
            <p>From securing your family’s future with top-tier insurance to solidifying your long-term wealth strategy, we offer holistic consultation backed by 23 years of LIC excellence.</p>
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
                <Briefcase />
              </div>
              <h3>Wealth Management</h3>
              <p>Strategic financial planning for individuals and families. We help you build a secure future through disciplined saving and investment strategies.</p>
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
              <h3 style={{ margin: 0, fontSize: '2rem', fontFamily: 'Playfair Display' }}>23+ Years</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>LIC Service Excellence</p>
            </div>
          </div>

          <div className="trust-content">
            <h2>Authority You Can Rely On.</h2>
            <h3 style={{ color: 'var(--lic-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
              <ShieldCheck size={24} color="var(--lic-yellow)" />
              Led by Bala Gangadhar Tilak
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
              With over 23 years of distinguished service as an LIC advisor, Bala Gangadhar Tilak brings a
              wealth of experience, deep understanding of financial instruments, and a commitment to
              securing his clients' families for generations.
            </p>

            <ul className="trust-list">
              <li>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h4>Proven Experience</h4>
                  <p>23 years of navigating market changes and delivering consistent insurance-backed security for families.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 className="check-icon" />
                <div>
                  <h4>Personalized Service</h4>
                  <p>Custom-tailored financial planning that adapts to your changing life stages and long-term goals.</p>
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
          <p>Schedule a consultation today to map out a clear financial plan tailored to your family's needs.</p>
          <a href="https://wa.me/919866107969" target="_blank" rel="noreferrer" className="btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.125rem', textDecoration: 'none' }}>
            Chat on WhatsApp <Phone size={20} style={{ marginLeft: '10px' }} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ gridColumn: 'span 1' }}>
              <div className="footer-logo">
                <ShieldCheck size={24} color="var(--lic-yellow)" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                LIC <span>for you</span>
              </div>
              <p className="footer-about" style={{ fontWeight: '600', color: 'var(--white)', marginBottom: '0.5rem' }}>
                Bala Gangadhar Tilak
              </p>
              <p className="footer-about">
                23 Years of Excellence in Financial Protection and Wealth Management. We handle the planning so you can focus on what matters most.
              </p>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <div className="footer-links">
                <a href="#">Life Insurance</a>
                <a href="#">Health Insurance</a>
                <a href="#">Retirement Planning</a>
                <a href="#">Child Education Plans</a>
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
                <a href="https://wa.me/919866107969" target="_blank" rel="noreferrer">+91 98661 07969</a>
                <a href="mailto:balagangadharc@gmail.com">balagangadharc@gmail.com</a>
                <a href="#">1204 Financial District,<br />New Delhi, India 110001</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} LIC for you. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
