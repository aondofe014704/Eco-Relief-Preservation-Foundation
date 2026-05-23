import { useState } from 'react';
import './Home.css';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const protectionItems = [
  {
    title: 'Child protection',
    content: [
      'Preventing child abuse, neglect and exploitation',
      'Supporting family tracing and reunification',
      'Constructing safe space for children in emergencies',
      'Providing psychosocial support for affected children',
      'Positive parenting and adolescent life skills',
      'Reintegration of children formerly associated with armed groups',
      'Awareness on child protection, child rights, PSEA, referral pathways and GBV prevention',
      'Strengthening reporting channels and providing capacity building for aid partners on child protection programming and disability inclusion',
      'Strengthening of community structures to challenge harmful norms and beliefs',
      'Providing alternative care placement and formalization for unaccompanied and separated children',
      'Providing child protection case management',
    ],
  },
  {
    title: 'Gender Base Violence (GBV) prevention and response',
    content: [
      'Awareness campaigns on GBV risk',
      'Distribution of safe shelter and strengthening referrals for survivors',
      'Refer medical, access to justice, and psychosocial support for survivors',
      'Provide GBV case management',
      'Construct Women and Girls Safe Spaces (WGSS)',
    ],
  },
  {
    title: 'Community safety and risk reduction',
    content: [
      'Establish early warning systems for disaster and conflict',
      'Strengthen community-based protection committees',
      'Conduct risk mapping and vulnerability assessment',
      'Design and implement anticipatory action for at-risk populations',
    ],
  },
  {
    title: 'Human right protection',
    content: [
      'Provide legal aid and right awareness',
      'Documentation and reporting of abuses',
      'Improve access to social documentation',
      'Advocate for vulnerable populations',
      'Monitoring detention, displacement and discrimination',
    ],
  },
  {
    title: 'Environmental and climate protection',
    content: [
      'Provide protection of ecosystem and biodiversity',
      'Facilitate climate adaptation for vulnerable communities',
      'Encourage sustainable resources use',
    ],
  },
  {
    title: 'Protection in displacement settings',
    content: [
      'Conduct IDP and refugee camp safety services',
      'Provide camp coordination and camp management to IDP and refugee camps',
      'Prevention of exploitation and trafficking through awareness and dialogue sessions',
      'Improve access to basic services (water, shelter, NFI and dignity kits)',
    ],
  },
];

const nutritionItems = [
  {
    title: 'Management of Acute Malnutrition (MAM & SAM)',
    content: [
      'Outpatient Therapeutic Programme (OTP) for Severe Acute Malnutrition (SAM) without complications',
      'Supplementary Feeding Programme (SFP/TSFP) for Moderate Acute Malnutrition (MAM)',
      'Stabilization Centers for SAM cases with medical complications',
      'Community mobilization and active case finding',
    ],
  },
  {
    title: 'Infant and Young Child Feeding in Emergencies (IYCF-E)',
    content: [
      'Establish mother-to-mother support groups',
      'Conduct caregiver counselling sessions',
      'Conduct community awareness campaigns',
      'Support for non-breastfed infants under strict guidance',
    ],
  },
  {
    title: 'Blanket Supplementary Feeding Programmes (BSFP)',
    content: [
      'Distribution of fortified foods or specialized nutritious foods',
      'Seasonal nutrition support during lean periods',
      'Monitoring nutritional status trends',
    ],
  },
  {
    title: 'Micronutrient Supplementation and Fortification',
    content: [
      'Vitamin A supplementation',
      'Distribute zinc supplementation for diarrhea management and iron and folic acid supplementation',
      'Encourage the use of multiple micronutrient powders (MNPs) and salt iodization promotion',
    ],
  },
  {
    title: 'Nutrition Screening and Surveillance',
    content: [
      'MUAC mass screenings',
      'Conduct growth monitoring',
      'Conduct SMART surveys',
      'Hire community nutrition surveillance volunteers',
    ],
  },
  {
    title: 'Nutrition Education and Behaviour Change Communication (BCC)',
    content: [
      'Conduct community dialogues',
      'Conduct cooking demonstrations',
      'Identify or establish mother-to-mother support groups',
      'Establish school nutrition clubs and outreach programs',
    ],
  },
  {
    title: 'Food Security and Nutrition-Sensitive Livelihoods',
    content: [
      'Facilitating linkages of caregivers to smart nutrition-sensitive agriculture',
      'Provide cash and voucher assistance',
      'Encourage practices of climate-smart agriculture',
      'Link pregnant and breastfeeding women and girls to income-generating activities',
    ],
  },
  {
    title: 'Nutrition in Emergencies',
    content: [
      'Provide wet feeding for children, breastfeeding mothers and pregnant women and girls',
      'Improve access to WASH and health services',
      'Monitoring of disease outbreaks linked to nutrition',
    ],
  },
];

const climateItems = [
  {
    title: 'Climate Action and Environment',
    content: [
      'Conduct advocacy with humanitarian partners to incorporate climate actions into humanitarian responses',
    ],
  },
  {
    title: 'Ecosystem Protection and restoration',
    content: [
      'Design and implement tree planting activities',
      'Facilitate the practice of smart agriculture among farmers and stakeholders',
    ],
  },
  {
    title: 'Sustainable and Low carbon practices',
    content: [
      'Facilitate waste management and smart agricultural practices among farmers',
      'Provide support with seed stock for farming',
      'Promote irrigation farming',
    ],
  },
  {
    title: 'Disaster Risk Reduction (DRR)',
    content: [
      'Community risk mapping and vulnerability assessment',
      'Emergency preparedness and evacuation planning (anticipatory action)',
      'Training of community-based disaster risk response committees',
      'Advocate for the construction of climate resilience infrastructure, flood control and drainage maintenance and improvement project',
    ],
  },
];

const empowermentItems = [
  {
    title: 'Economic Empowerment',
    content: [
      'Provide vocational skills trainings',
      'Distribute micro grants for small and medium enterprise',
      'Establish and strengthen VSLA in communities',
      'Conduct entrepreneurship training',
    ],
  },
  {
    title: 'Women and Girls Empowerment',
    content: [
      'Conduct leadership and decision-making training for women and girls',
      'Provide support for adolescent girls\' education',
      'Construct safe spaces for women and adolescent girls',
      'Conduct advocacy against harmful practices e.g. early marriage and discrimination',
      'GBV awareness and rights education',
    ],
  },
  {
    title: 'Youth Empowerment',
    content: [
      'Provide digital and ICT skill training',
      'Provide career guidance and mentorship programs on youth leadership development',
      'Organise sport events and creative art programs for youth',
      'Enhance civic engagement and facilitate volunteer opportunities',
      'Promote youth inclusion in decision making at community level',
    ],
  },
  {
    title: 'Social Empowerment',
    content: [
      'Organise community dialogues and peacebuilding sessions',
      'Promote civic education through awareness of rights and responsibilities',
      'Promote inclusion of marginalized groups (Persons with Disabilities, displaced persons)',
      'Establish and strengthen community-based committees and partners on social empowerment programming',
      'Conduct advocacy training to amplify community voices',
    ],
  },
  {
    title: 'Climate and Environmental empowerment',
    content: [],
  },
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
                    <span className="accordion-title">{item.title}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'protection' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    {item.content.length > 0 ? (
                      <ul className="accordion-content-list">
                        {item.content.map((point, i) => (
                          <li key={i} className="accordion-content-item">
                            <span className="accordion-content-bullet">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="accordion-placeholder">
                        Detailed content for <strong>{item.title}</strong> will be added here soon.
                      </p>
                    )}
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
                    <span className="accordion-title">{item.title}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'nutrition' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    {item.content.length > 0 ? (
                      <ul className="accordion-content-list">
                        {item.content.map((point, i) => (
                          <li key={i} className="accordion-content-item">
                            <span className="accordion-content-bullet">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="accordion-placeholder">
                        Detailed content for <strong>{item.title}</strong> will be added here soon.
                      </p>
                    )}
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
                    <span className="accordion-title">{item.title}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'climate' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    {item.content.length > 0 ? (
                      <ul className="accordion-content-list">
                        {item.content.map((point, i) => (
                          <li key={i} className="accordion-content-item">
                            <span className="accordion-content-bullet">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="accordion-placeholder">
                        Detailed content for <strong>{item.title}</strong> will be added here soon.
                      </p>
                    )}
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
                    <span className="accordion-title">{item.title}</span>
                    <span className="accordion-chevron">{openAccordion?.modal === 'empowerment' && openAccordion?.index === index ? '▲' : '▼'}</span>
                  </button>
                  <div className="accordion-body">
                    {item.content.length > 0 ? (
                      <ul className="accordion-content-list">
                        {item.content.map((point, i) => (
                          <li key={i} className="accordion-content-item">
                            <span className="accordion-content-bullet">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="accordion-placeholder">
                        Detailed content for <strong>{item.title}</strong> will be added here soon.
                      </p>
                    )}
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
