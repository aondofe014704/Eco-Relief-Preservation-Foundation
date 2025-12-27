import './OurWork.css';

const OurWork = () => {
  return (
    <div className="our-work">
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>Delivering multisectoral humanitarian assistance with accountability and dignity</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="intro-text">
            ERPF delivers services with prioritized Accountability to Affected Populations (AAP) 
            across five core sectors. Our interventions are designed to be comprehensive, inclusive, 
            and sustainable.
          </p>
        </div>
      </section>

      <section className="section program-section">
        <div className="container">
          <div className="program-card">
            <div className="program-header">
              <div className="program-icon">🛡️</div>
              <h2>Protection</h2>
            </div>
            <div className="program-content">
              <p>
                We offer case management services for children and adolescent girls who are at risk 
                of child protection concerns and survivors of GBV through our team of trained case 
                workers (CP/GBV). We ensure a comprehensive and holistic system of identifying, assessing, 
                referral and assisting vulnerable children, especially those with disabilities at risk 
                of child protection violation, neglect and discrimination.
              </p>
              <h3>Key Activities:</h3>
              <ul>
                <li>Child protection case management</li>
                <li>Psychosocial support services</li>
                <li>GBV case management</li>
                <li>Provide access to justice for GBV survivors</li>
                <li>Advocate for disability inclusion</li>
                <li>Train partners on disability inclusive and gender sensitive programming</li>
                <li>Conduct targeted awareness to challenge harmful norms like early and forced marriage</li>
                <li>Establish and strengthen Community Based Child Protection Committees</li>
                <li>Conduct dialogue sessions for reintegration of Children Formerly Associated with Armed Groups (CAFAAGs)</li>
              </ul>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <div className="program-icon">🏥</div>
              <h2>Health</h2>
            </div>
            <div className="program-content">
              <p>
                During emergencies we work to define health risks, suggest ways to reduce these risks, 
                and monitor the capacity and reconstruction of the public health system and their supply 
                chain. We focus on reducing the excesses of pregnant and infant mortality and morbidity.
              </p>
              <h3>Key Activities:</h3>
              <ul>
                <li>Rapid assessment</li>
                <li>Immunization</li>
                <li>Improving water and sanitation</li>
                <li>Ensuring adequate food and nutritious food for children and lactating mothers</li>
                <li>Shelter and site planning</li>
                <li>Provide healthcare during the emergency phase</li>
                <li>Monitor and control of communicable diseases and epidemics</li>
                <li>Public health surveillance in collaboration with Global Outbreak Alert and Response Network (GOARN)</li>
                <li>Human resource and trainings</li>
                <li>Coordination of services</li>
                <li>Improved access to healthcare services</li>
              </ul>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <div className="program-icon">💧</div>
              <h2>Water, Sanitation and Hygiene (WASH)</h2>
            </div>
            <div className="program-content">
              <p>
                For ERPF it is crucial to prioritize WASH in all interventions. We mainstream WASH 
                priorities to ensure communities have access to safe water, sanitation facilities, 
                and hygiene education.
              </p>
              <h3>Key Activities:</h3>
              <ul>
                <li>Increase water quality</li>
                <li>Ensure water safety and quality</li>
                <li>Increase access to latrines and toilets</li>
                <li>Provide hygiene kits, soaps, non-food items for vulnerable groups</li>
                <li>Hygiene education and social mobilization</li>
                <li>Solid waste management (depending on the situation)</li>
              </ul>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <div className="program-icon">🍎</div>
              <h2>Nutrition</h2>
            </div>
            <div className="program-content">
              <p>
                During emergencies food production and availability, food and drug supply chains are 
                interrupted, thereby increasing the risk to malnutrition. ERPF improves accessibility 
                to nutritious feeding for children and women at risk.
              </p>
              <h3>Key Activities:</h3>
              <ul>
                <li>Improved access to adequate dietary intake (local purchase of Tom Brown recipes)</li>
                <li>Ensure food security for Households (HH)</li>
                <li>Implementing poverty alleviation approaches (Vocational skill acquisition, income generation activities, empowerment, cash for trade)</li>
                <li>Provide improved positive parenting activities to ensure children get adequate care</li>
                <li>Prioritize maternal and child nutrition</li>
                <li>Engage with government to improve socio-political and economic status of communities</li>
              </ul>
            </div>
          </div>

          <div className="program-card">
            <div className="program-header">
              <div className="program-icon">🌱</div>
              <h2>Climate Approach</h2>
            </div>
            <div className="program-content">
              <p>
                The increasing temperatures of the globe are causing the rise in sea levels and extreme 
                weather conditions leading to high frequency of natural disasters like floods, wildfires, 
                and hurricanes. ERPF is committed to support the process of prevention and recovery for 
                the earth through strategic implementation of climate impactful and innovative approaches.
              </p>
              <h3>Key Activities:</h3>
              <ul>
                <li>Engaging farmers and stakeholders through capacity building on conservation, water management, irrigation techniques, and agroforestry practices</li>
                <li>Establish and strengthen Community Based Climate Committees</li>
                <li>Build capacities of government and partners on integration of climate change approaches into programming</li>
                <li>Empower women and men with improved variety of seed stock</li>
                <li>Develop information centers to improve access to language-appropriate Early Warning information</li>
                <li>Provision of cash for rent, NFI and dignity kits as anticipatory measures for seamless relocation</li>
                <li>Advocate with government on supporting and enacting policies that promote climate resilience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
