import { useState } from 'react';
import './Gallery.css';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
}

interface GalleryImage {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null);

  const categories = ['All', 'Protection', 'Health', 'WASH', 'Nutrition', 'Climate', 'Community'];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. [Name]',
      position: 'Executive Director',
      bio: 'Leading ERPF\'s strategic vision and humanitarian operations across Nigeria. Over 15 years of experience in humanitarian response and development.'
    },
    {
      id: 2,
      name: '[Name]',
      position: 'Director of Programs',
      bio: 'Oversees all program implementation across Protection, Health, WASH, Nutrition, and Climate sectors. Expert in multisectoral humanitarian coordination.'
    },
    {
      id: 3,
      name: '[Name]',
      position: 'Head of Protection',
      bio: 'Leads child protection and GBV response programs. Specialized in case management and psychosocial support for vulnerable populations.'
    },
    {
      id: 4,
      name: '[Name]',
      position: 'Head of Health & Nutrition',
      bio: 'Manages health and nutrition interventions. Expert in maternal and child health, emergency health response, and nutrition programming.'
    },
    {
      id: 5,
      name: '[Name]',
      position: 'WASH Coordinator',
      bio: 'Coordinates water, sanitation, and hygiene programs. Specialized in emergency WASH response and community-led total sanitation.'
    },
    {
      id: 6,
      name: '[Name]',
      position: 'Climate & Environment Lead',
      bio: 'Leads climate change mitigation and environmental sustainability initiatives. Expert in climate-smart agriculture and community resilience.'
    },
    {
      id: 7,
      name: '[Name]',
      position: 'Finance & Administration Manager',
      bio: 'Ensures financial accountability and operational efficiency. Manages budgets, compliance, and value for money across all programs.'
    },
    {
      id: 8,
      name: '[Name]',
      position: 'Monitoring & Evaluation Officer',
      bio: 'Leads M&E systems, data collection, and impact assessment. Ensures accountability to affected populations and evidence-based programming.'
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      category: 'Protection',
      title: 'Child Protection Case Management',
      description: 'Our trained case workers providing comprehensive support to vulnerable children in conflict-affected communities. This session focuses on psychosocial support and ensuring children\'s rights are protected.',
      location: 'Maiduguri, Borno State',
      date: 'March 2025'
    },
    {
      id: 2,
      category: 'Protection',
      title: 'GBV Awareness Campaign',
      description: 'Community awareness session on Gender-Based Violence prevention. Women and girls learning about their rights and available support services in a safe, confidential environment.',
      location: 'Bama Road Community',
      date: 'February 2025'
    },
    {
      id: 3,
      category: 'Health',
      title: 'Maternal Health Clinic',
      description: 'Providing essential healthcare services to pregnant and breastfeeding mothers. Our health team conducts regular check-ups and health education sessions to reduce maternal mortality.',
      location: 'Housing Estate Health Center',
      date: 'March 2025'
    },
    {
      id: 4,
      category: 'Health',
      title: 'Immunization Campaign',
      description: 'Mass immunization drive reaching children in remote communities. Our mobile health team ensures every child receives life-saving vaccines regardless of their location.',
      location: 'Rural Borno Communities',
      date: 'January 2025'
    },
    {
      id: 5,
      category: 'WASH',
      title: 'Clean Water Access Point',
      description: 'Newly installed water point providing safe drinking water to over 500 families. Community members trained on water safety and maintenance of the facility.',
      location: 'IDP Settlement, Maiduguri',
      date: 'February 2025'
    },
    {
      id: 6,
      category: 'WASH',
      title: 'Hygiene Education Session',
      description: 'Interactive hygiene education with children learning proper handwashing techniques. Distribution of hygiene kits including soap, sanitizers, and educational materials.',
      location: 'Community School, Borno',
      date: 'March 2025'
    },
    {
      id: 7,
      category: 'Nutrition',
      title: 'Cooking Demonstration for Mothers',
      description: 'Pregnant and breastfeeding women learning to prepare nutritious meals using locally available ingredients like Tom Brown. Emphasis on maternal and child nutrition.',
      location: 'Women\'s Center, Maiduguri',
      date: 'February 2025'
    },
    {
      id: 8,
      category: 'Nutrition',
      title: 'Malnutrition Screening',
      description: 'Active case finding for Severe Acute Malnutrition (SAM) and Moderate Acute Malnutrition (MAM). Children identified receive immediate nutritional support and follow-up care.',
      location: 'Mobile Clinic, Borno State',
      date: 'March 2025'
    },
    {
      id: 9,
      category: 'Climate',
      title: 'Climate-Smart Agriculture Training',
      description: 'Farmers receiving training on sustainable agricultural practices, water management, and agroforestry. Building community resilience to climate change impacts.',
      location: 'Agricultural Community, Borno',
      date: 'January 2025'
    },
    {
      id: 10,
      category: 'Climate',
      title: 'Tree Planting Initiative',
      description: 'Community-led tree planting campaign as part of our environmental sustainability program. Over 1,000 trees planted to combat desertification and improve air quality.',
      location: 'Multiple Communities, Borno',
      date: 'March 2025'
    },
    {
      id: 11,
      category: 'Community',
      title: 'Cash for Trade Distribution',
      description: 'Empowering IDPs and refugees through Cash for Trade (CVA) program. Recipients using funds to start small businesses and rebuild their livelihoods with dignity.',
      location: 'IDP Camp, Maiduguri',
      date: 'February 2025'
    },
    {
      id: 12,
      category: 'Community',
      title: 'Community Dialogue Session',
      description: 'Inclusive dialogue on reintegration of Children Formerly Associated with Armed Groups (CAFAAGs). Community leaders, parents, and stakeholders working together for peaceful reintegration.',
      location: 'Community Hall, Borno',
      date: 'January 2025'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery">
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Meet our team and witness our impact in action</p>
        </div>
      </section>

      {/* Strategic Management Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Senior Management Team</h2>
          <p className="team-intro">
            Our dedicated leadership team brings together decades of humanitarian experience, 
            technical expertise, and unwavering commitment to serving vulnerable communities. 
            Meet the professionals driving ERPF's mission forward.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="team-card"
                onClick={() => setSelectedTeamMember(member.id)}
              >
                <div className="team-photo-placeholder">
                  <div className="photo-icon">👤</div>
                  <div className="photo-overlay">
                    <span className="view-profile">View Profile</span>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Activities Section */}
      <section className="section field-activities">
        <div className="container">
          <h2 className="section-title">Field Activities</h2>
          <p className="activities-intro">
            Pictures speak louder than words. Explore our field activities to see the real impact 
            of our humanitarian work across communities in Borno State. Each image tells a story 
            of resilience, hope, and positive change.
          </p>

          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setLightboxImage(image.id)}
              >
                <div className="image-placeholder">
                  <div className="placeholder-icon">📷</div>
                  <div className="image-overlay">
                    <span className="view-text">Click to view details</span>
                  </div>
                </div>
                <div className="image-info">
                  <span className="image-category">{image.category}</span>
                  <h3>{image.title}</h3>
                  <p className="image-description">{image.description}</p>
                  <div className="image-meta">
                    <span className="meta-item">📍 {image.location}</span>
                    <span className="meta-item">📅 {image.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Team Member Lightbox */}
      {selectedTeamMember && (
        <div className="lightbox" onClick={() => setSelectedTeamMember(null)}>
          <div className="lightbox-content team-lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedTeamMember(null)}>×</button>
            {teamMembers.find(member => member.id === selectedTeamMember) && (
              <div className="team-lightbox-details">
                <div className="team-lightbox-photo">
                  <div className="photo-icon-large">👤</div>
                  <p className="placeholder-text">Team Member Photo</p>
                </div>
                <div className="team-lightbox-info">
                  <h2>{teamMembers.find(member => member.id === selectedTeamMember)?.name}</h2>
                  <p className="lightbox-position">
                    {teamMembers.find(member => member.id === selectedTeamMember)?.position}
                  </p>
                  <div className="team-bio">
                    <h3>About</h3>
                    <p>{teamMembers.find(member => member.id === selectedTeamMember)?.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Field Activity Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            {galleryImages.find(img => img.id === lightboxImage) && (
              <div className="lightbox-details">
                <div className="lightbox-image-placeholder">
                  <div className="placeholder-icon-large">📷</div>
                  <p className="placeholder-text">Field Activity Photo</p>
                </div>
                <div className="lightbox-info">
                  <span className="lightbox-category">
                    {galleryImages.find(img => img.id === lightboxImage)?.category}
                  </span>
                  <h2>{galleryImages.find(img => img.id === lightboxImage)?.title}</h2>
                  <p className="lightbox-description">
                    {galleryImages.find(img => img.id === lightboxImage)?.description}
                  </p>
                  <div className="lightbox-meta">
                    <div className="meta-detail">
                      <strong>Location:</strong> {galleryImages.find(img => img.id === lightboxImage)?.location}
                    </div>
                    <div className="meta-detail">
                      <strong>Date:</strong> {galleryImages.find(img => img.id === lightboxImage)?.date}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
