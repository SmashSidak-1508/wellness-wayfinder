import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Wellness WayFinder <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Wellness Wayfinder, your dedicated online wellness platform. Our mission is to empower individuals on their journey to holistic well-being by offering accessible and personalized wellness services. Whether you're seeking expert guidance on mindful living, nutritional advice, or holistic treatments, Wellness Wayfinder is here to support you.By choosing our platform, you align with our commitment to providing a comprehensive approach to wellness. We encourage you to explore the diverse resources and expert insights available to enhance your well-being.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">

Welcome to Wellness Wayfinder! By using our platform, you agree to comply with and be bound by the following terms and conditions. Please read these Terms of Service carefully before accessing or using our services.<br></br>

1. Acceptance of Terms:

By accessing or using the Wellness Wayfinder platform, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.
<br></br>
2. Eligibility:

You must be at least 18 years old to use Wellness Wayfinder. By using our platform, you affirm that you are over 18 years of age. If you are under 18, you may use our services only with the involvement and consent of a parent or legal guardian.
<br></br>
3. User Account:

To access certain features of our platform, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
<br></br>
4. Personal Information:

You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. Refer to our Privacy Policy for details on how we collect, use, and protect your personal information.
<br></br>
5. User Conduct:

You agree not to engage in any of the following activities:

Violating any applicable laws or regulations.
Using the platform for any purpose that is unlawful or prohibited by these terms.
Attempting to interfere with the proper functioning of the platform.
Uploading or transmitting any material that infringes on the intellectual property rights of others.
<br></br>
6. Content and Services:

Wellness Wayfinder provides information, wellness resources, and services for educational and informational purposes. We do not provide medical advice, diagnosis, or treatment.
<br></br>
7. Modification of Terms:

We reserve the right to modify or update these Terms of Service at any time. Changes will be effective upon posting to the platform. Continued use of the platform after any changes constitute your acceptance of the modified terms.
<br></br>
8. Termination:

We reserve the right to terminate or suspend your account and access to the platform at our sole discretion, without notice, for any reason, including violation of these Terms of Service.


        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Your privacy is of utmost importance to us at Wellness Wayfinder. This Privacy Policy is designed to help you understand how we collect, use, and protect your personal and medical information.
<br></br>
Information We Collect:
<br></br>
We may collect various types of information, including but not limited to:
<br></br>
1.Personal Information: Information that can be used to identify you, such as your name, contact details, and date of birth.
<br></br>
2.Medical Information: Information related to your health and well-being that you choose to share with us for personalized wellness services.
<br></br>
How We Use Your Information:
<br></br>
1.Personalization: We use the information you provide to personalize your experience and tailor our services to meet your individual wellness needs.
<br></br>
2.Communication: We may use your contact information to communicate with you about our services, promotions, and important updates.
<br></br>
3.Improvement of Services: Your feedback and usage patterns may be analyzed to enhance and improve our platform and services.
<br></br>
4.Data Security:
<br></br>We take rigorous measures to ensure the security of your data. Our platform employs encryption and secure data handling practices to protect your information from unauthorized access.
<br></br>
5.Confidentiality:
<br></br>
Your information is treated with the utmost confidentiality. We do not disclose your personal or medical information to third parties without your explicit consent, except where required by law.
<br></br>
Your Consent:
<br></br>
By using Wellness Wayfinder, you consent to the terms outlined in this Privacy Policy.
        </p>

        <p className="legal-title">Expert Advice</p>
        <p className="legal-description">
        Expert Advice Disclaimer
        <br></br>
Welcome to Wellness Wayfinder! Our platform connects you with experienced wellness experts who provide online consultations. It's important to note that these consultations are designed to complement, not replace, in-person medical visits. They serve as a convenient option for obtaining expert advice, personalized wellness guidance, and assistance with your well-being journey.
<br></br>
Key Points:
<br></br>
1.Supplementary to In-Person Visits: Online consultations offered on Wellness Wayfinder are not intended to replace traditional, in-person medical visits. They are an additional and convenient option for seeking expert advice and guidance.
<br></br>
2.Medical Advice and Prescriptions: Our expert doctors can provide medical advice, prescribe medications when necessary, and offer guidance on various aspects of well-being. However, they do not substitute for face-to-face interactions with a healthcare professional for comprehensive physical examinations.
<br></br>
Importance of Accurate Information: To receive the best possible care, it is crucial to provide accurate and complete information during the online consultation. This includes details about your medical history, symptoms, and any other relevant information. This helps our experts provide more precise advice tailored to your individual needs.
<br></br>
Important Considerations:
<br></br>
1.Emergency Situations: In case of a medical emergency, please seek immediate medical attention. Online consultations are not suitable for urgent or emergency situations.
<br></br>
2.Continuity of Care: Online consultations can be part of your wellness journey, but it's essential to maintain regular in-person check-ups with your primary care physician for ongoing health management.
<br></br>
3.Privacy and Confidentiality: We prioritize the security and confidentiality of your information. Our platform follows strict privacy policies to protect your data.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Wellness Wayfinder is crafted to streamline your journey towards well-being. Select a wellness expert, schedule a consultation, and participate in a virtual meeting. Our experts provide personalized advice and craft tailored treatment plans to suit your unique needs. However, in cases of emergencies, it is imperative to seek immediate medical attention from your local healthcare facility. Your well-being is our priority at Wellness Wayfinder.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Wellness WayFinder+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
