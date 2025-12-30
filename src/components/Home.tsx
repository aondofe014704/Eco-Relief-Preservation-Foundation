import { useState } from 'react';
import './Home.css';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Eco Relief Preservation Foundation</h1>
          <p className="hero-tagline">Protecting lives. Empowering communities. Preserving our planet.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onNavigate('Donate')}>
              Donate Now
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('Our Work')}>
              Our Programs
            </button>
          </div>
        </div>
      </section>

      <section className="section who-we-are">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p className="intro-text">
            ERPF is a youth-led humanitarian NGO registered with the Corporate Affairs Commission (CAC) 
            of Nigeria. We deliver multisectoral assistance with a focus on humanitarian response, 
            development, and climate change mitigation. Our work is grounded in Accountability to 
            Affected Populations (AAP), ensuring that the communities we serve are at the center of 
            everything we do.
          </p>
          
          {showFullText && (
            <div className="expanded-content">
              <p className="intro-text">
                ERPF is the Organization for Internally Displaced Persons (IDP), Refugees and People With 
                Disability (PWD). We ensure durable solutions to reduce displacement across the world, we 
                prioritize affected communities above all those that are vulnerable and prone to protection risk. 
                We develop programs that are climate and disability inclusive.
              </p>
              <p className="intro-text">
                We are people-centred by doing so, we involve the community from need assessment to proposal 
                development to implementation and phase-out, we bring relevant stakeholders to the tables where 
                plans are drawn about them, this has enhanced ownership and build trust in all the communities we work.
              </p>
              <p className="intro-text">
                Our monitoring team is deliberate about community base monitoring where the stakeholders are in 
                the forefront of the project monitoring, within our years of implementation this has proven very 
                instrumental in sustainability and continuity.
              </p>
            </div>
          )}
          
          <button 
            className="btn-link" 
            onClick={() => setShowFullText(!showFullText)}
          >
            {showFullText ? 'Show Less ↑' : 'Learn More About Us →'}
          </button>
        </div>
      </section>

      <section className="section focus-areas">
        <div className="container">
          <h2 className="section-title">Our Focus Areas</h2>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">🛡️</div>
              <h3>Protection</h3>
              <p>Child protection, GBV case management, psychosocial support, and access to justice for vulnerable populations.</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">🏥</div>
              <h3>Health</h3>
              <p>Emergency health response, maternal & child health, disease surveillance, and public health system support.</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">💧</div>
              <h3>WASH</h3>
              <p>Safe water access, sanitation facilities, hygiene education, and solid waste management.</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">🍎</div>
              <h3>Nutrition</h3>
              <p>Maternal & child nutrition, food security, local nutritious food provision, and livelihood empowerment.</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">🌱</div>
              <h3>Climate & Environment</h3>
              <p>Climate-smart agriculture, agroforestry, early warning systems, and community climate committees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-highlights">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Primary Beneficiaries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30,000+</div>
              <div className="stat-label">Secondary Beneficiaries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-label">Core Sectors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2026</div>
              <div className="stat-label">Regional Expansion</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-erpf">
        <div className="container">
          <h2 className="section-title">Why ERPF</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3>✓ Accountability to Affected Populations</h3>
              <p>We prioritize AAP in all our interventions, ensuring communities have a voice.</p>
            </div>
            <div className="why-item">
              <h3>✓ Inclusive & Survivor-Centered</h3>
              <p>Our approach centers on dignity, inclusion, and the needs of survivors.</p>
            </div>
            <div className="why-item">
              <h3>✓ Value for Money</h3>
              <p>We ensure appropriate utilization of funds and maximum impact per dollar.</p>
            </div>
            <div className="why-item">
              <h3>✓ Transparency</h3>
              <p>We maintain transparency with both donors and the communities we serve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-content">
          <h2>Join Us in Making a Difference</h2>
          <p>Your support helps us reach more communities in need</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => onNavigate('Donate')}>
              Donate
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('Get Involved')}>
              Partner with Us
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('Get Involved')}>
              Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
