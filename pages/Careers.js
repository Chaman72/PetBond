import React, { useState } from 'react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Veterinarian",
      department: "Medical",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹8-12 LPA",
      description: "Lead our veterinary team and provide expert medical care for pets.",
      requirements: [
        "DVM or equivalent veterinary degree",
        "5+ years of clinical experience",
        "Experience with small animals",
        "Strong communication skills",
        "Passion for animal welfare"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Technology",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹12-18 LPA",
      description: "Build and maintain our platform using React, Node.js, and .NET Core.",
      requirements: [
        "3+ years of full-stack development",
        "Experience with React, Node.js, .NET Core",
        "Database design and optimization",
        "API development and integration",
        "Agile development experience"
      ]
    },
    {
      id: 3,
      title: "Pet Care Specialist",
      department: "Operations",
      location: "Delhi, NCR",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹4-6 LPA",
      description: "Provide expert guidance to pet owners and coordinate care services.",
      requirements: [
        "Degree in Animal Science or related field",
        "2+ years in pet care industry",
        "Excellent customer service skills",
        "Knowledge of pet behavior and care",
        "Ability to work flexible hours"
      ]
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹8-12 LPA",
      description: "Lead our digital marketing efforts and grow our online presence.",
      requirements: [
        "4+ years in digital marketing",
        "Experience with SEO, SEM, social media",
        "Analytics and data-driven approach",
        "Content marketing experience",
        "Pet industry knowledge preferred"
      ]
    }
  ];

  const benefits = [
    { icon: "🏥", title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family" },
    { icon: "🐕", title: "Pet Benefits", desc: "Free veterinary care and discounts on pet products" },
    { icon: "🏠", title: "Work from Home", desc: "Flexible remote work options" },
    { icon: "📚", title: "Learning Budget", desc: "Annual budget for courses and conferences" },
    { icon: "🎉", title: "Team Events", desc: "Regular team outings and pet-friendly office" },
    { icon: "💰", title: "Performance Bonus", desc: "Annual performance-based bonuses" }
  ];

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div className="careers">
        <div className="hero-section">
          <h1>🚀 Join Our Pack</h1>
          <p className="hero-text">Help us build the future of pet care in India</p>
        </div>

        <div className="why-join">
          <h2>Why Work at PetBond?</h2>
          <p>
            At PetBond, we're not just building a platform - we're creating a community that makes 
            a real difference in the lives of pets and their families. Join us in our mission to 
            improve pet welfare across India.
          </p>
        </div>

        <div className="benefits-section">
          <h2>Benefits & Perks</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="jobs-section">
          <h2>Current Openings</h2>
          <div className="jobs-container">
            <div className="jobs-list">
              {jobOpenings.map(job => (
                <div 
                  key={job.id} 
                  className={`job-card ${selectedJob?.id === job.id ? 'selected' : ''}`}
                  onClick={() => setSelectedJob(job)}
                >
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="department">{job.department}</span>
                    <span className="location">📍 {job.location}</span>
                    <span className="type">{job.type}</span>
                  </div>
                  <div className="job-details">
                    <span className="experience">Experience: {job.experience}</span>
                    <span className="salary">{job.salary}</span>
                  </div>
                </div>
              ))}
            </div>

            {selectedJob && (
              <div className="job-details-panel">
                <h3>{selectedJob.title}</h3>
                <div className="job-info">
                  <p><strong>Department:</strong> {selectedJob.department}</p>
                  <p><strong>Location:</strong> {selectedJob.location}</p>
                  <p><strong>Type:</strong> {selectedJob.type}</p>
                  <p><strong>Experience:</strong> {selectedJob.experience}</p>
                  <p><strong>Salary:</strong> {selectedJob.salary}</p>
                </div>
                
                <div className="job-description">
                  <h4>Job Description</h4>
                  <p>{selectedJob.description}</p>
                </div>

                <div className="job-requirements">
                  <h4>Requirements</h4>
                  <ul>
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn btn-primary apply-btn">
                  Apply for this Position
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="culture-section">
          <h2>Our Culture</h2>
          <div className="culture-grid">
            <div className="culture-item">
              <h3>🎯 Mission-Driven</h3>
              <p>Every team member is passionate about improving pet welfare and creating positive impact.</p>
            </div>
            <div className="culture-item">
              <h3>🤝 Collaborative</h3>
              <p>We work together across departments to solve problems and achieve our goals.</p>
            </div>
            <div className="culture-item">
              <h3>📈 Growth-Focused</h3>
              <p>We invest in our people's growth and provide opportunities to learn and advance.</p>
            </div>
            <div className="culture-item">
              <h3>🐾 Pet-Friendly</h3>
              <p>Bring your pets to work! Our office is designed to welcome our four-legged colleagues.</p>
            </div>
          </div>
        </div>

        <div className="application-section">
          <h2>Don't See the Right Role?</h2>
          <p>
            We're always looking for talented individuals who share our passion for pets. 
            Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          
          <div className="general-application-form">
            <h3>General Application Form</h3>
            <form className="application-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" required placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label>Desired Position</label>
                  <input type="text" placeholder="e.g., Marketing Specialist, Developer" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Experience Level</label>
                  <select>
                    <option value="">Select experience level</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior Level (6+ years)</option>
                    <option value="executive">Executive Level</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Work Mode</label>
                  <select>
                    <option value="">Select work preference</option>
                    <option value="office">Office Only</option>
                    <option value="remote">Remote Only</option>
                    <option value="hybrid">Hybrid (Office + Remote)</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Skills & Expertise *</label>
                <textarea 
                  required 
                  rows="3" 
                  placeholder="List your key skills, technologies, or areas of expertise"
                />
              </div>
              
              <div className="form-group">
                <label>Why PetBond? *</label>
                <textarea 
                  required 
                  rows="4" 
                  placeholder="Tell us why you want to work at PetBond and how you'd contribute to our mission"
                />
              </div>
              
              <div className="form-group">
                <label>Resume/CV *</label>
                <div className="file-upload">
                  <input type="file" accept=".pdf,.doc,.docx" required />
                  <span className="file-info">Upload your resume (PDF, DOC, DOCX - Max 5MB)</span>
                </div>
              </div>
              
              <div className="form-group">
                <label>Portfolio/LinkedIn (Optional)</label>
                <input type="url" placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              
              <div className="form-group">
                <label>Additional Information</label>
                <textarea 
                  rows="3" 
                  placeholder="Any additional information you'd like to share (availability, salary expectations, etc.)"
                />
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  I agree to PetBond's <a href="/privacy">Privacy Policy</a> and consent to processing my personal data for recruitment purposes.
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary submit-application">
                Submit Application
              </button>
            </form>
          </div>
          
          <div className="contact-hr">
            <p><strong>Alternative:</strong> Email directly to careers@petbond.com</p>
            <p><strong>Subject Format:</strong> [Position] - Your Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;