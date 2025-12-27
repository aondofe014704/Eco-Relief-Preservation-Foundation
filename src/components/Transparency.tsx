import './Transparency.css';

const Transparency = () => {
  return (
    <div className="transparency">
      <section className="page-hero">
        <div className="container">
          <h1>Transparency</h1>
          <p>Accountability and openness in all our operations</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Commitment to Accountability</h2>
          <p className="intro-text">
            At ERPF, transparency is not just a value—it's a fundamental principle that guides 
            all our operations. We are committed to maintaining the highest standards of accountability 
            to both our donors and the communities we serve.
          </p>
        </div>
      </section>

      <section className="section aap-framework">
        <div className="container">
          <h2 className="section-title">Accountability to Affected Populations (AAP)</h2>
          <div className="aap-grid">
            <div className="aap-card">
              <div className="aap-icon">👥</div>
              <h3>Community Participation</h3>
              <p>
                We ensure that affected populations are actively involved in the design, 
                implementation, and monitoring of our programs. Their voices shape our interventions.
              </p>
            </div>
            <div className="aap-card">
              <div className="aap-icon">📢</div>
              <h3>Feedback Mechanisms</h3>
              <p>
                We maintain accessible feedback and complaints mechanisms that allow communities 
                to share concerns, suggestions, and report any issues safely and confidentially.
              </p>
            </div>
            <div className="aap-card">
              <div className="aap-icon">📊</div>
              <h3>Information Sharing</h3>
              <p>
                We provide clear, timely, and accessible information to communities about our 
                programs, eligibility criteria, and how to access our services.
              </p>
            </div>
            <div className="aap-card">
              <div className="aap-icon">🔍</div>
              <h3>Monitoring & Evaluation</h3>
              <p>
                We conduct regular monitoring and evaluation with community participation to 
                ensure our programs are effective and responsive to needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section safeguarding">
        <div className="container">
          <h2 className="section-title">Safeguarding Commitments</h2>
          <div className="safeguarding-content">
            <div className="safeguarding-item">
              <h3>🛡️ Child Safeguarding</h3>
              <p>
                All ERPF staff and volunteers undergo comprehensive child safeguarding training. 
                We maintain strict policies to protect children from harm, abuse, and exploitation 
                in all our programs and operations.
              </p>
            </div>
            <div className="safeguarding-item">
              <h3>⚠️ Prevention of Sexual Exploitation and Abuse (PSEA)</h3>
              <p>
                Our team is trained on SEA prevention. We have zero tolerance for sexual exploitation 
                and abuse. All staff sign a code of conduct and understand their responsibilities to 
                maintain the dignity and safety of the people we serve.
              </p>
            </div>
            <div className="safeguarding-item">
              <h3>🤝 Dignified Interaction</h3>
              <p>
                We ensure that all interactions with communities are guided by respect, dignity, 
                and cultural sensitivity. Our staff are trained to engage with affected populations 
                in a manner that upholds their rights and autonomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section financial-info">
        <div className="container">
          <h2 className="section-title">Financial Information</h2>
          <div className="financial-content">
            <div className="bank-details">
              <h3>Banking Details</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Bank Name:</span>
                  <span className="detail-value">Zenith Bank</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Account Number:</span>
                  <span className="detail-value">1310314836</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Account Name:</span>
                  <span className="detail-value">Eco Relief Preservation Foundation</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">SWIFT Code:</span>
                  <span className="detail-value">ZIEBNGLA013</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Branch Code:</span>
                  <span className="detail-value">013</span>
                </div>
              </div>
            </div>

            <div className="financial-principles">
              <h3>Financial Accountability Principles</h3>
              <ul>
                <li>✓ Appropriate utilization of funds (Value for Money)</li>
                <li>✓ Regular financial audits and reporting</li>
                <li>✓ Transparent budget allocation and expenditure tracking</li>
                <li>✓ Donor reporting in accordance with agreements</li>
                <li>✓ Anti-fraud and corruption measures</li>
                <li>✓ Competitive procurement processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section reporting">
        <div className="container">
          <h2 className="section-title">Reporting & Documentation</h2>
          <div className="reporting-grid">
            <div className="reporting-card">
              <h3>📄 Program Reports</h3>
              <p>We provide regular program reports to donors and stakeholders, documenting activities, outputs, and outcomes.</p>
            </div>
            <div className="reporting-card">
              <h3>📈 Impact Assessments</h3>
              <p>We conduct impact assessments to measure the effectiveness of our interventions and inform future programming.</p>
            </div>
            <div className="reporting-card">
              <h3>📋 Annual Reports</h3>
              <p>We publish annual reports detailing our activities, financial performance, and impact across all sectors.</p>
            </div>
            <div className="reporting-card">
              <h3>🔐 Data Protection</h3>
              <p>We maintain strict data protection protocols to safeguard the privacy and confidentiality of beneficiaries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-transparency">
        <div className="container">
          <h2 className="section-title">Questions or Concerns?</h2>
          <p className="contact-text">
            If you have questions about our operations, financial management, or wish to report 
            a concern, please contact us. We are committed to addressing all inquiries promptly 
            and transparently.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>08160015530</span>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <span>timint646@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>303 Housing Estate, Bama Road, Maiduguri, Borno State</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transparency;
