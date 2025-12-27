import './Impact.css';

const Impact = () => {
  return (
    <div className="impact">
      <section className="page-hero">
        <div className="container">
          <h1>Our Impact</h1>
          <p>Measuring our reach and achievements in humanitarian response</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Beneficiary Reach</h2>
          <div className="beneficiary-stats">
            <div className="beneficiary-card primary">
              <div className="beneficiary-number">5,000+</div>
              <div className="beneficiary-label">Primary Beneficiaries</div>
              <p>Direct recipients of our humanitarian assistance and services</p>
            </div>
            <div className="beneficiary-card secondary">
              <div className="beneficiary-number">30,000+</div>
              <div className="beneficiary-label">Secondary Beneficiaries</div>
              <p>Indirect beneficiaries reached through community-level interventions</p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="section geographic-coverage">
        <div className="container">
          <h2 className="section-title">Geographic Coverage</h2>
          <div className="coverage-grid">
            <div className="coverage-card current">
              <h3>Current Operations</h3>
              <div className="coverage-icon"></div>
              <ul>
                <li><strong>Borno State</strong></li>
                <li>Maiduguri (Headquarters)</li>
                <li>Bama Road Area</li>
                <li>Benue State</li>
              </ul>
              <div className="coverage-badge">Active</div>
            </div>
            <div className="coverage-card planned">
              <h3>2026 Expansion Plan</h3>
              <div className="coverage-icon"></div>
              <ul>
                <li><strong>Adamawa State</strong></li>
                <li><strong>Yobe State</strong></li>
                <li><strong>Katsina State</strong></li>
                <li><strong>Zamfara State</strong></li>
              </ul>
              <div className="coverage-badge planned-badge">Planned</div>
            </div>
          </div>
          <p className="coverage-note">
            Our expansion is strategic, targeting areas affected by protracted conflict in the 
            North East and banditry in the North West regions of Nigeria.
          </p>
        </div>
      </section>

      <section className="section impact-stories">
        <div className="container">
          <h2 className="section-title">Impact Highlights</h2>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-icon">👶</div>
              <h3>Child Protection</h3>
              <p>
                Successfully conducted dialogues on inclusive reintegration of Children Associated 
                with Armed Groups (CAAG), supporting their return to community life with dignity.
              </p>
            </div>
            <div className="story-card">
              <div className="story-icon">👩</div>
              <h3>Women Empowerment</h3>
              <p>
                Provided comprehensive protection services and Cash for Trade (CVA) to women and 
                girls affected by conflict, enabling economic independence.
              </p>
            </div>
            <div className="story-card">
              <div className="story-icon">🍼</div>
              <h3>Nutrition Support</h3>
              <p>
                Trained caregivers on positive parenting and exclusive breastfeeding, conducted 
                cooking demonstrations for Pregnant and Breastfeeding Women and Girls.
              </p>
            </div>
            <div className="story-card">
              <div className="story-icon">🌍</div>
              <h3>Climate Awareness</h3>
              <p>
                Led awareness campaigns on carbon emission reduction and climate change mitigation, 
                reaching thousands across project areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
