import './News.css';

const News = () => {
  return (
    <div className="news">
      <section className="page-hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Stay informed about our latest activities and impact stories</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Updates</h2>
          
          <div className="news-grid">
            <article className="news-card featured">
              <div className="news-badge">Latest</div>
              <div className="news-date">March 25, 2025</div>
              <h3>ERPF Officially Registered with CAC</h3>
              <p>
                We are thrilled to announce that Eco Relief Preservation Foundation has been 
                officially registered with the Corporate Affairs Commission (CAC) of Nigeria. 
                This milestone marks the beginning of our full-scale humanitarian operations 
                across the country.
              </p>
              <a href="#" className="read-more">Read More →</a>
            </article>

            <article className="news-card">
              <div className="news-date">March 2025</div>
              <h3>Reaching 5,000+ Primary Beneficiaries</h3>
              <p>
                Through our pre-registration activities, we have successfully reached over 5,000 
                primary beneficiaries and 30,000 secondary beneficiaries across our project areas 
                in Borno State.
              </p>
              <a href="#" className="read-more">Read More →</a>
            </article>

            <article className="news-card">
              <div className="news-date">2025</div>
              <h3>Expansion Plans for 2026</h3>
              <p>
                ERPF announces strategic expansion to Adamawa, Yobe, Katsina, and Zamfara states 
                in 2026, responding to humanitarian needs in conflict-affected regions.
              </p>
              <a href="#" className="read-more">Read More →</a>
            </article>

            <article className="news-card">
              <div className="news-date">2024-2025</div>
              <h3>Climate Change Awareness Campaigns</h3>
              <p>
                Our team has been actively conducting awareness campaigns on carbon emission 
                reduction and climate change mitigation across communities in North East Nigeria.
              </p>
              <a href="#" className="read-more">Read More →</a>
            </article>

            <article className="news-card">
              <div className="news-date">2024-2025</div>
              <h3>Protection Services for Women and Girls</h3>
              <p>
                ERPF has provided comprehensive protection services to women and girls affected 
                by conflict, including GBV case management and psychosocial support.
              </p>
              <a href="#" className="read-more">Read More →</a>
            </article>

            <article className="news-card">
              <div className="news-date">2024-2025</div>
              <h3>Cash for Trade Program Success</h3>
              <p>
                Our Cash for Trade (CVA) program has empowered IDPs and refugees with economic 
                opportunities, enabling them to rebuild their livelihoods with dignity.
              </p>
              <a href="#" className="read-more">Read More →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section impact-stories-section">
        <div className="container">
          <h2 className="section-title">Our Success Stories</h2>
          <p className="section-intro">
            Real stories of resilience, hope, and transformation from the communities we serve
          </p>

          <div className="stories-showcase">
            <div className="story-showcase">
              <div className="story-image">👶</div>
              <h3>Supporting Children Formerly Associated with Armed Groups</h3>
              <p>
                Through our inclusive reintegration dialogues, we have facilitated the safe return 
                of children formerly associated with armed groups (CAFAAGs) to their communities, 
                ensuring they receive psychosocial support and education opportunities.
              </p>
            </div>

            <div className="story-showcase">
              <div className="story-image">👩‍👧</div>
              <h3>Empowering Mothers Through Nutrition Education</h3>
              <p>
                Our cooking demonstration sessions for Pregnant and Breastfeeding Women and Girls 
                (PBWG) have equipped mothers with knowledge on nutritious meal preparation using 
                locally available ingredients like Tom Brown.
              </p>
            </div>

            <div className="story-showcase">
              <div className="story-image">🌾</div>
              <h3>Climate-Smart Agriculture Training</h3>
              <p>
                Farmers in our project areas are learning climate-smart agricultural practices, 
                including water management and agroforestry, helping them adapt to changing 
                environmental conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section publications">
        <div className="container">
          <h2 className="section-title">Reports & Publications</h2>
          <div className="publications-grid">
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Program Reports</h3>
              <p>Detailed reports on our humanitarian interventions and outcomes</p>
              <button className="btn-secondary">Coming Soon</button>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📊</div>
              <h3>Impact Assessments</h3>
              <p>Data-driven assessments of our program effectiveness</p>
              <button className="btn-secondary">Coming Soon</button>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📚</div>
              <h3>Annual Reports</h3>
              <p>Comprehensive annual reports on activities and financial performance</p>
              <button className="btn-secondary">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section newsletter">
        <div className="container">
          <h2>Stay Connected</h2>
          <p>Subscribe to receive updates about our work and impact</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
