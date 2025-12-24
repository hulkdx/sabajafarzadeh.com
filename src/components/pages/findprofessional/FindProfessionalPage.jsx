import React, { useEffect, useRef, useState } from 'react';

import './FindProfessionalPage.css';

function FindProfessionalPage() {
  const [openSourceOpen, setOpenSourceOpen] = useState(false);
  const openSourceRef = useRef(null);

  useEffect(() => {
    function onDocMouseDown(e) {
      if (!openSourceRef.current) return;
      if (!openSourceRef.current.contains(e.target)) {
        setOpenSourceOpen(false);
      }
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') setOpenSourceOpen(false);
    }

    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className="find-professional-page">
      <section className="fp-hero" id="waitlist">
        <div className="fp-hero-inner">
          <div className="fp-hero-copy">
            <div className="fp-tag">Pre-release • Early access</div>
            <h1>Find the Right Life Coach to Help You Thrive</h1>
            <p>
              Book a 1:1 session with a coach who fits your goals, clarity, habits, confidence
            </p>
            <div className="fp-hero-actions">
              <a className="fp-btn fp-btn-primary" href='https://forms.gle/6DdL9TCzPmQSmcPx9'>
                Join Waitlist
              </a>
            </div>

            <div className="fp-hero-note">
              Launching soon — join the waitlist for early access.
            </div>

            <div className="fp-feature-card">
              <div className="fp-feature">
                <div className="fp-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 2a8 8 0 1 0 5.293 14.293l4.207 4.207 1.414-1.414-4.207-4.207A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
                  </svg>
                </div>
                <div>
                  <h3>Find the right coach</h3>
                  <p>Browse profiles and read reviews to find the perfect coach for you.</p>
                </div>
              </div>
              <div className="fp-feature">
                <div className="fp-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V2zm13 8H4v10h16V10zM4 8h16V6H4v2z" />
                  </svg>
                </div>
                <div>
                  <h3>Book Sessions Easily</h3>
                  <p>Schedule one-on-one sessions with your coach in just a few taps.</p>
                </div>
              </div>
              <div className="fp-feature">
                <div className="fp-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2 4 5v6c0 5.25 3.438 9.984 8 11 4.562-1.016 8-5.75 8-11V5l-8-3zm0 2.18 6 2.25v4.57c0 4.07-2.55 7.87-6 8.99-3.45-1.12-6-4.92-6-8.99V6.43l6-2.25z" />
                  </svg>
                </div>
                <div>
                  <h3>Pay Securely</h3>
                  <p>Convenient and secure payment processing right through the app.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fp-hero-visual" aria-hidden="true">
            <div className="fp-phone">
              <div className="fp-phone-notch" />
              <img
                className="fp-phone-img"
                src="/images/app-screenshot.png"
                alt="Find Professional app screenshot"
                loading="lazy"
              />
            </div>
            <div className="fp-demo-note">Demo UI - sample home page</div>
            <div className="fp-shadow" />
          </div>
        </div>
      </section>

      <section className="fp-steps">
        <h2>How Find Professional Works</h2>
        <div className="fp-steps-grid">
          <div className="fp-step">
            <div className="fp-step-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 2a8 8 0 1 0 5.293 14.293l4.207 4.207 1.414-1.414-4.207-4.207A8 8 0 0 0 10 2z" />
              </svg>
            </div>
            <h3>Browse Coaches</h3>
            <p>Explore coach profiles life coaches and read reviews.</p>
          </div>
          <div className="fp-step">
            <div className="fp-step-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V2zm13 8H4v10h16V10z" />
              </svg>
            </div>
            <h3>Book a Session</h3>
            <p>Choose a coach, select a time, and book your session.</p>
          </div>
          <div className="fp-step">
            <div className="fp-step-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16v14H4zM2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6v2H4a2 2 0 0 0-2 2zm6 7h8v2H8v-2z" />
              </svg>
            </div>
            <h3>Achieve Your Goals</h3>
            <p>Meet with your coach via video and grow with a plan.</p>
          </div>
        </div>
      </section>

      <section className="fp-cta" id="coach">
        <h2>Are You a Life Coach?</h2>
        <p>Earn money and help others by offering your expertise on Find Professional.</p>
        <a className="fp-btn fp-btn-primary" href="https://forms.gle/7ttD2GwTZovrBpPq8">Become a Coach</a>
      </section>

      <footer className="fp-footer">
        <div className="fp-footer-open-source" ref={openSourceRef}>
          <button
            type="button"
            className="fp-footer-link fp-footer-button"
            onClick={() => setOpenSourceOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={openSourceOpen}
          >
            Open Source Project
          </button>

          {openSourceOpen && (
            <div className="fp-footer-popover" role="menu">
              <a
                role="menuitem"
                href="https://github.com/hulkdx/findprofessional-frontend-mobile"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenSourceOpen(false)}
              >
                Kotlin Moltiplatform (iOS/Android)
              </a>
              <a
                role="menuitem"
                href="https://github.com/hulkdx/findprofessional-backend-user"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenSourceOpen(false)}
              >
                Backend Code - User
              </a>
              <a
                role="menuitem"
                href="https://github.com/hulkdx/findprofessional-backend-pro"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenSourceOpen(false)}
              >
                Backend Code - Pro
              </a>
              <a
                role="menuitem"
                href="https://github.com/hulkdx/findprofessional-infra"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpenSourceOpen(false)}
              >
                Infra
              </a>
            </div>
          )}
        </div>

        <a className='fp-footer-support' href="mailto:findprofessionalhelp@gmail.com">Support</a>
      </footer>
    </div>
  );
}

export default FindProfessionalPage;
