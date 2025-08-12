import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div className="legal-document">
        <h1>🔒 Privacy Policy</h1>
        <p className="last-updated">Last updated: January 2024</p>

        <div className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            At PetBond ("we," "our," or "us"), we are committed to protecting your privacy and ensuring 
            the security of your personal information. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you use our platform.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Address and location information</li>
            <li>Payment and billing information</li>
            <li>Profile photos and pet information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <ul>
            <li>Device information and IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our platform</li>
            <li>Search queries and interactions</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>2.3 Pet Information</h3>
          <ul>
            <li>Pet photos, breed, age, and health information</li>
            <li>Vaccination records and medical history</li>
            <li>Behavioral information and preferences</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process transactions and payments</li>
            <li>Connect you with pet sellers and service providers</li>
            <li>Send service-related communications</li>
            <li>Improve our platform and user experience</li>
            <li>Ensure platform security and prevent fraud</li>
            <li>Comply with legal obligations</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>4. Information Sharing</h2>
          <p>We may share your information in the following circumstances:</p>
          
          <h3>4.1 With Service Providers</h3>
          <p>We share information with veterinarians, pet care providers, and sellers to facilitate services.</p>

          <h3>4.2 With Third-Party Services</h3>
          <p>Payment processors, delivery services, and technology providers who help us operate our platform.</p>

          <h3>4.3 Legal Requirements</h3>
          <p>When required by law, court order, or to protect our rights and safety.</p>

          <h3>4.4 Business Transfers</h3>
          <p>In connection with mergers, acquisitions, or sale of assets.</p>
        </div>

        <div className="policy-section">
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. These include:
          </p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Secure server infrastructure</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
            <li>Employee training on data protection</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>6. Your Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request copies of your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request transfer of your data</li>
            <li><strong>Objection:</strong> Object to processing of your information</li>
            <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>7. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze usage, 
            and provide personalized content. You can control cookie settings through your browser.
          </p>
          
          <h3>Types of Cookies We Use:</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand user behavior</li>
            <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If we become aware that we have 
            collected such information, we will take steps to delete it.
          </p>
        </div>

        <div className="policy-section">
          <h2>9. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your information during such transfers.
          </p>
        </div>

        <div className="policy-section">
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material 
            changes by posting the new policy on our platform and updating the "Last updated" date.
          </p>
        </div>

        <div className="policy-section">
          <h2>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> privacy@petbond.com</p>
            <p><strong>Phone:</strong> +91 12345 67890</p>
            <p><strong>Address:</strong> 123 Pet Street, Animal City, India 110001</p>
          </div>
        </div>

        <div className="policy-footer">
          <p>
            By using our platform, you acknowledge that you have read and understood this Privacy Policy 
            and agree to the collection, use, and disclosure of your information as described herein.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;