import { useState } from 'react';
import './Home.css';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const protectionItems = [
  'Child protection',
  'Gender Base Violence (GBV) prevention and response',
  'Community safety and risk reduction',
  'Human right protection',
  'Environmental and climate protection',
  'Protection in displacement settings',
];

const nutritionItems = [
  'Management of Acute Malnutrition (MAM & SAM)',
  'Infant and Young Child Feeding in Emergencies (IYCF-E)',
  'Blanket Supplementary Feeding Programmes (BSFP)',
  'Micronutrient Supplementation and Fortification',
  'Nutrition Screening and Surveillance',
  'Nutrition Education and Behaviour Change Communication (BCC)',
  'Food Security and Nutrition-Sensitive Livelihoods',
  'Nutrition in Emergencies',
];

const climateItems = [
  'Climate Action and Environment',
  'Ecosystem Protection and restoration',
  'Sustainable and Low carbon practices',
  'Disaster Risk Reduction (DRR)',
];

const empowermentItems = [
  'Economic Empowerment',
  'Women and Girls Empowerment',
  'Youth Empowerment',
  'Social Empowerment',
  'Climate and Environmental empowerment',
];

const educationItems = [
  'We facilitate access to safe, inclusive and quality learning environment through school support, rehabilitation of classrooms and distribution of scholastic kits.',
  'Identify out-of-school learners and provide accelerated learning programs and facilitate reintegration into educational system.',
  'Empowering communities through knowledge and skill development via Literacy programs (Adolescent life skill sessions, and Positive parenting for caregivers and community learning sessions).',
  'Strengthening education for long term resilience and development by advocating for teacher training, curriculum support, school feeding programs and disaster resilient education system.',
  'Conduct awareness and sensitization to challenge harmful social norms and beliefs that hamper the girl child education in communities. Conduct dialogue sessions to promote education and advance the promotion of girl-child education within the community and restore trust of the community in the educational system.',
];
const Home = ({ onNavigate }: HomeProps) => {
  const [showFullText, setShowFullText] = useState(false);
  const [showProtectionModal, setShowProtectionModal] = useState(false);
  const [showNutritionModal, setShowNutritionModal] = useState(false);
  const [showClimateModal, setShowClimateModal] = useState(false);
  const [showEmpowermentModal, setShowEmpowermentModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<{ modal: string; index: number } | null>(null);

  const toggleAccordion = (modal: string, index: number) => {
    setOpenAccordion(
      openAccordion?.modal === modal && openAccordion?.index === index
        ? null
        : { modal, index }
    );
  };

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
            ERPF is a youth driven Humanitarian and Development Organization dedicated to delivering innovative and sustainable solution that benefit both people and the environment. Guided by the principle of 'doing more with less' and community led actions, we work to strengthen resilience promote environmental sustainability and support vulnerable communities. We place great value on our staff and the communities we serve.
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

      <section className="section our-vision">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <div className="vmo-card">
            <div className="vmo-icon">👁️</div>
            <p className="vmo-text">
              We envisage a world where creativity and innovation drive sustainable progress and where all populations are safe, protected, empowered, environmentally aware and actively participating Climate conscious and sustainable development.
            </p>
          </div>
        </div>
      </section>

      <section className="section our-mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="vmo-card">
            <div className="vmo-icon">🎯</div>
            <p className="vmo-text">
              To provide lifesaving and sustainable interventions that strengthen resilience reduce vulnerabilities and empower communities to recovery from disasters and poverty through innovative, climate conscious and environmentally responsible approaches.
            </p>
          </div>
        </div>
      </section>

      <section className="section our-mandate">
        <div className="container">
          <h2 className="section-title">Our Mandate</h2>
          <div className="vmo-card mandate-card">
            <div className="vmo-icon">📋</div>
            <p className="vmo-text">
              ERPF is mandated to design and implement innovative and environmentally responsible humanitarian and development interventions that save lives, reduce vulnerabilities, strengthen community resilience, and advance climate conscious and sustainable development.
            </p>
          </div>
        </div>
      </section>

      <section className="section what-we-do">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <ul className="what-we-do-list">
            <li>
              <span className="wwd-icon">🏘️</span>
              <span>Strengthening communities to withstand challenges</span>
            </li>
            <li>
              <span className="wwd-icon">♻️</span>
              <span>Restoring natural ecosystems and advancing fair climate action</span>
            </li>
            <li>
              <span className="wwd-icon">🛡️</span>
              <span>Crisis response, social safety nets, and long-term sustainability</span>
            </li>
            <li>
              <span className="wwd-icon">💡</span>
              <span>Driving creative solutions that benefit both people and the environment</span>
            </li>
            <li>
              <span className="wwd-icon">🌍</span>
              <span>Advancing the UN Sustainable Development Goals</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section focus-areas">
        <div className="container">
          <h2 className="section-title">Our Focus Areas</h2>
          <div className="focus-grid">
            <div className="focus-card focus-card-clickable" onClick={() => setShowProtectionModal(true)}>
              <div className="focus-icon">🛡️</div>
              <h3>Protection</h3>
              <p>Child protection, GBV case management, psychosocial support, and access to justice for vulnerable populations.</p>
              <span className="focus-card-cta">Explore →</span>
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
            <div className="focus-card focus-card-clickable" onClick={() => setShowNutritionModal(true)}>
              <div className="focus-icon">🍎</div>
              <h3>Nutrition</h3>
              <p>Maternal & child nutrition, food security, local nutritious food provision, and livelihood empowerment.</p>
              <span className="focus-card-cta">Explore →</span>
            </div>
            <div className="focus-card focus-card-clickable" onClick={() => setShowClimateModal(true)}>
              <div className="focus-icon">🌱</div>
              <h3>Climate & Environment</h3>
              <p>Climate-smart agriculture, agroforestry, early warning systems, and community climate committees.</p>
              <span className="focus-card-cta">Explore →</span>
            </div>
            <div className="focus-card focus-card-clickable" onClick={() => setShowEmpowermentModal(true)}>
              <div className="focus-icon">💪</div>
              <h3>Empowerment</h3>
              <p>Economic, social, and environmental empowerment for women, girls, youth, and vulnerable communities.</p>
              <span className="focus-card-cta">Explore →</span>
            </div>
            <div className="focus-card focus-card-clickable" onClick={() => setShowEducationModal(true)}>
              <div className="focus-icon">📚</div>
              <h3>Education</h3>
              <p>Inclusive learning environments, accelerated learning programs, and community literacy initiatives.</p>
              <span className="focus-card-cta">Explore →</span>
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
      {/* Protection Modal */}
      {showProtectionModal && (
        <div className="focus-modal-overlay" onClick={() => { setShowProtectionModal(false); setOpenAccordion(null); }}>
          <div className="focus-modal" onClick={(e) => e.stopPropagation()}>
            <button className="focus-modal-close" onClick={() => { setShowProtectionModal(false); setOpenAccordion(null); }}>×</button>
            <div className="focus-modal-header">
              <span className="focus-modal-icon">🛡️</span>
              <h2>Protection</h2>
            </div>
            <p className="focus-modal-intro">
              Our protection programs safeguard the rights and dignity of vulnerable populations across all our areas of operation.
            </p>
            <div className="focus-accordion">
              {protectionItems.map((item, index) => (
                <div key={index} className={`accordion-item ${openAccordion?.modal === 'protection' && openAccordion?.index === index ? 'open' : ''}`}>
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion('protection', index)}
                    aria-expanded={openAccordion?.modal === 'protection' && openAccordion?.index === index}
                  >
                    <span className="accordion-title">{item}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'protection' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    <p className="accordion-placeholder">
                      Detailed content for <strong>{item}</strong> will be added here soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Nutrition Modal */}
      {showNutritionModal && (
        <div className="focus-modal-overlay" onClick={() => { setShowNutritionModal(false); setOpenAccordion(null); }}>
          <div className="focus-modal" onClick={(e) => e.stopPropagation()}>
            <button className="focus-modal-close" onClick={() => { setShowNutritionModal(false); setOpenAccordion(null); }}>×</button>
            <div className="focus-modal-header">
              <span className="focus-modal-icon">🍎</span>
              <h2>Nutrition</h2>
            </div>
            <p className="focus-modal-intro">
              Our nutrition programs address malnutrition, promote healthy feeding practices, and build food security for vulnerable communities.
            </p>
            <div className="focus-accordion">
              {nutritionItems.map((item, index) => (
                <div key={index} className={`accordion-item ${openAccordion?.modal === 'nutrition' && openAccordion?.index === index ? 'open' : ''}`}>
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion('nutrition', index)}
                    aria-expanded={openAccordion?.modal === 'nutrition' && openAccordion?.index === index}
                  >
                    <span className="accordion-title">{item}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'nutrition' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    <p className="accordion-placeholder">
                      Detailed content for <strong>{item}</strong> will be added here soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Climate & Environment Modal */}
      {showClimateModal && (
        <div className="focus-modal-overlay" onClick={() => { setShowClimateModal(false); setOpenAccordion(null); }}>
          <div className="focus-modal" onClick={(e) => e.stopPropagation()}>
            <button className="focus-modal-close" onClick={() => { setShowClimateModal(false); setOpenAccordion(null); }}>×</button>
            <div className="focus-modal-header">
              <span className="focus-modal-icon">🌱</span>
              <h2>Climate & Environment</h2>
            </div>
            <p className="focus-modal-intro">
              Our climate and environment programs drive sustainable action, protect ecosystems, and build community resilience against climate-related risks.
            </p>
            <div className="focus-accordion">
              {climateItems.map((item, index) => (
                <div key={index} className={`accordion-item ${openAccordion?.modal === 'climate' && openAccordion?.index === index ? 'open' : ''}`}>
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion('climate', index)}
                    aria-expanded={openAccordion?.modal === 'climate' && openAccordion?.index === index}
                  >
                    <span className="accordion-title">{item}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'climate' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    <p className="accordion-placeholder">
                      Detailed content for <strong>{item}</strong> will be added here soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empowerment Modal */}
      {showEmpowermentModal && (
        <div className="focus-modal-overlay" onClick={() => { setShowEmpowermentModal(false); setOpenAccordion(null); }}>
          <div className="focus-modal" onClick={(e) => e.stopPropagation()}>
            <button className="focus-modal-close" onClick={() => { setShowEmpowermentModal(false); setOpenAccordion(null); }}>×</button>
            <div className="focus-modal-header">
              <span className="focus-modal-icon">💪</span>
              <h2>Empowerment</h2>
            </div>
            <p className="focus-modal-intro">
              Our empowerment programs build the capacity and agency of individuals and communities to drive their own sustainable development.
            </p>
            <div className="focus-accordion">
              {empowermentItems.map((item, index) => (
                <div key={index} className={`accordion-item ${openAccordion?.modal === 'empowerment' && openAccordion?.index === index ? 'open' : ''}`}>
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion('empowerment', index)}
                    aria-expanded={openAccordion?.modal === 'empowerment' && openAccordion?.index === index}
                  >
                    <span className="accordion-title">{item}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'empowerment' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    <p className="accordion-placeholder">
                      Detailed content for <strong>{item}</strong> will be added here soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Education Modal */}
      {showEducationModal && (
        <div className="focus-modal-overlay" onClick={() => setShowEducationModal(false)}>
          <div className="focus-modal" onClick={(e) => e.stopPropagation()}>
            <button className="focus-modal-close" onClick={() => setShowEducationModal(false)}>×</button>
            <div className="focus-modal-header">
              <span className="focus-modal-icon">📚</span>
              <h2>Education</h2>
            </div>
            <p className="focus-modal-intro">
              Our education programs promote inclusive, quality learning and community-driven knowledge development for lasting resilience.
            </p>
            <ul className="education-list">
              {educationItems.map((item, index) => (
                <li key={index} className="education-list-item">
                  <span className="education-bullet">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
