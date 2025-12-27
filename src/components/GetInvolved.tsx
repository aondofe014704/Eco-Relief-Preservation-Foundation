import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <div className="get-involved">
      <section className="page-hero">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Join us in making a lasting impact on communities in need</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="involvement-grid">
            <div className="involvement-card">
              <div className="involvement-icon">🤝</div>
              <h2>Volunteer</h2>
              <p>
                Join our team of dedicated volunteers and make a direct impact on the ground. 
                We welcome individuals passionate about humanitarian work, community development, 
                and environmental sustainability.
              </p>
              <h3>Volunteer Opportunities:</h3>
              <ul>
                <li>Community volunteers</li>
                <li>Enumerators for needs assessments</li>
                <li>Field assistants</li>
                <li>Technical specialists</li>
                <li>Awareness campaign facilitators</li>
              </ul>
              <p className="requirements">
                <strong>Requirements:</strong> Commitment to humanitarian principles, respect for 
                affected populations, and willingness to work in challenging environments.
              </p>
              <button className="btn-primary">Apply to Volunteer</button>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">🤲</div>
              <h2>Partner With Us</h2>
              <p>
                We collaborate with organizations that share our vision of empowering communities 
                and promoting sustainable development. Partnership opportunities exist across all 
                our sectors.
              </p>
              <h3>Partnership Categories:</h3>
              <ul>
                <li>International and local NGOs</li>
                <li>Government agencies (Federal, State, Local)</li>
                <li>Donor organizations and foundations</li>
                <li>Private sector companies (CSR initiatives)</li>
                <li>Academic and research institutions</li>
                <li>Community-based organizations</li>
              </ul>
              <p className="benefits">
                <strong>Partnership Benefits:</strong> Joint program implementation, resource sharing, 
                capacity building, and expanded reach to vulnerable populations.
              </p>
              <button className="btn-primary">Explore Partnership</button>
            </div>

            <div className="involvement-card">
              <div className="involvement-icon">💼</div>
              <h2>Careers</h2>
              <p>
                ERPF is building a team of passionate professionals committed to humanitarian 
                excellence. We offer opportunities for growth, learning, and meaningful impact.
              </p>
              <h3>Why Work With ERPF:</h3>
              <ul>
                <li>Youth-led and dynamic organization</li>
                <li>Commitment to staff development and training</li>
                <li>SEA and child safeguarding training</li>
                <li>Opportunity to work across multiple sectors</li>
                <li>Inclusive and respectful work environment</li>
                <li>Competitive compensation packages</li>
              </ul>
              <h3>Current Focus Areas:</h3>
              <ul>
                <li>Monitoring & Evaluation specialists</li>
                <li>Protection officers (CP/GBV)</li>
                <li>Health and nutrition coordinators</li>
                <li>WASH specialists</li>
                <li>Climate change experts</li>
              </ul>
              <button className="btn-primary">View Opportunities</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-to-help">
        <div className="container">
          <h2 className="section-title">Other Ways to Help</h2>
          <div className="help-grid">
            <div className="help-card">
              <h3>💰 Make a Donation</h3>
              <p>Your financial support enables us to reach more communities and deliver life-saving assistance.</p>
            </div>
            <div className="help-card">
              <h3>📢 Spread Awareness</h3>
              <p>Share our work on social media and help us reach more people who can support our mission.</p>
            </div>
            <div className="help-card">
              <h3>🎓 Provide Training</h3>
              <p>Share your expertise by conducting training sessions for our staff and community volunteers.</p>
            </div>
            <div className="help-card">
              <h3>📦 In-Kind Donations</h3>
              <p>Donate supplies, equipment, or services that support our humanitarian operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Contact us today to discuss how you can contribute to our mission</p>
          <div className="contact-info-cta">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>08160015530</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>timint646@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
