import './Donate.css';

const Donate = () => {
  return (
    <div className="donate">
      <section className="page-hero">
        <div className="container">
          <h1>Support Our Mission</h1>
          <p>Your donation helps us reach more communities in need</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="donate-intro">
            <h2>Why Your Support Matters</h2>
            <p>
              Every contribution to ERPF directly impacts the lives of vulnerable populations 
              affected by conflict, disasters, and climate change. Your support enables us to 
              deliver life-saving humanitarian assistance, protect women and children, and build 
              resilient communities across Nigeria.
            </p>
          </div>

          <div className="impact-breakdown">
            <h3>How Your Donation Makes a Difference</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-amount">₦5,000</div>
                <p>Provides hygiene kits for 5 families</p>
              </div>
              <div className="impact-item">
                <div className="impact-amount">₦10,000</div>
                <p>Supports nutrition education for 20 mothers</p>
              </div>
              <div className="impact-item">
                <div className="impact-amount">₦25,000</div>
                <p>Provides psychosocial support sessions for 15 children</p>
              </div>
              <div className="impact-item">
                <div className="impact-amount">₦50,000</div>
                <p>Supports cash-for-trade program for 10 families</p>
              </div>
              <div className="impact-item">
                <div className="impact-amount">₦100,000</div>
                <p>Establishes a community climate committee</p>
              </div>
              <div className="impact-item">
                <div className="impact-amount">₦250,000+</div>
                <p>Funds comprehensive protection services for a community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section donation-methods">
        <div className="container">
          <h2 className="section-title">How to Donate</h2>
          
          <div className="methods-grid">
            <div className="method-card primary-method">
              <div className="method-icon">🏦</div>
              <h3>Bank Transfer</h3>
              <p>Make a direct transfer to our account</p>
              
              <div className="bank-info">
                <div className="bank-detail">
                  <span className="label">Bank Name:</span>
                  <span className="value">Zenith Bank</span>
                </div>
                <div className="bank-detail">
                  <span className="label">Account Number:</span>
                  <span className="value">1310314836</span>
                </div>
                <div className="bank-detail">
                  <span className="label">Account Name:</span>
                  <span className="value">Eco Relief Preservation Foundation</span>
                </div>
                <div className="bank-detail">
                  <span className="label">SWIFT Code:</span>
                  <span className="value">ZIEBNGLA013</span>
                </div>
                <div className="bank-detail">
                  <span className="label">Branch Code:</span>
                  <span className="value">013</span>
                </div>
              </div>
              
              <p className="method-note">
                Please send proof of payment to timint646@gmail.com with your name and contact details.
              </p>
            </div>

            <div className="method-card">
              <div className="method-icon">💳</div>
              <h3>Online Payment</h3>
              <p>Secure online donation platform</p>
              <button className="btn-primary">Coming Soon</button>
            </div>

            <div className="method-card">
              <div className="method-icon">📦</div>
              <h3>In-Kind Donations</h3>
              <p>Donate supplies, equipment, or services</p>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section corporate-giving">
        <div className="container">
          <h2 className="section-title">Corporate & Institutional Giving</h2>
          <div className="corporate-content">
            <p>
              We welcome partnerships with corporations, foundations, and institutions committed 
              to humanitarian action and sustainable development. Corporate partnerships can include:
            </p>
            <div className="corporate-options">
              <div className="corporate-option">
                <h3>🤝 Strategic Partnerships</h3>
                <p>Long-term collaboration on specific programs or sectors</p>
              </div>
              <div className="corporate-option">
                <h3>💼 Corporate Social Responsibility</h3>
                <p>Align your CSR initiatives with our humanitarian work</p>
              </div>
              <div className="corporate-option">
                <h3>🎯 Project Sponsorship</h3>
                <p>Fund specific projects or interventions in target communities</p>
              </div>
              <div className="corporate-option">
                <h3>👥 Employee Engagement</h3>
                <p>Volunteer programs and employee giving campaigns</p>
              </div>
            </div>
            <p className="corporate-cta">
              For corporate giving opportunities, please contact us at timint646@gmail.com or 
              call 08160015530.
            </p>
          </div>
        </div>
      </section>

      <section className="section transparency-note">
        <div className="container">
          <h2 className="section-title">Our Commitment to Transparency</h2>
          <div className="transparency-content">
            <p>
              At ERPF, we are committed to the highest standards of financial accountability and 
              transparency. Every donation is used efficiently to maximize impact for the communities 
              we serve.
            </p>
            <div className="transparency-points">
              <div className="transparency-point">
                <span className="check-icon">✓</span>
                <span>Regular financial audits and reporting</span>
              </div>
              <div className="transparency-point">
                <span className="check-icon">✓</span>
                <span>Value for money in all expenditures</span>
              </div>
              <div className="transparency-point">
                <span className="check-icon">✓</span>
                <span>Transparent budget allocation</span>
              </div>
              <div className="transparency-point">
                <span className="check-icon">✓</span>
                <span>Donor reporting and updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section other-ways">
        <div className="container">
          <h2 className="section-title">Other Ways to Support</h2>
          <div className="other-ways-grid">
            <div className="other-way">
              <div className="way-icon">🤝</div>
              <h3>Volunteer</h3>
              <p>Contribute your time and skills to our programs</p>
            </div>
            <div className="other-way">
              <div className="way-icon">📢</div>
              <h3>Spread the Word</h3>
              <p>Share our work on social media and with your network</p>
            </div>
            <div className="other-way">
              <div className="way-icon">🤲</div>
              <h3>Partner With Us</h3>
              <p>Collaborate on programs and initiatives</p>
            </div>
            <div className="other-way">
              <div className="way-icon">🎓</div>
              <h3>Provide Training</h3>
              <p>Share your expertise with our team and communities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Ready to Make an Impact?</h2>
          <p>Your support today creates lasting change for vulnerable communities</p>
          <div className="cta-buttons">
            <button className="btn-primary">Donate Now</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
