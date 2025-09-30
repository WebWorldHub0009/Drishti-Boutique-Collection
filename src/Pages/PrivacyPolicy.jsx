// components/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#FAFAF0] text-[#1C1C1C] py-16 px-6 md:px-20 mt-1">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-red-700 border-b-2 border-red-600 pb-2">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-700">
          This Privacy Policy describes how <strong>Drishti Boutique Collection</strong> and its affiliates
          ("<strong>Drishti</strong>", "we", "our", "us") collect, use, share, protect or otherwise process your
          information/personal data through our website{' '}
          <a href="https://www.drishtiboutiquecollection.com" target="_blank" className="text-red-600 underline">
            www.drishtiboutiquecollection.com
          </a>{" "}
          ("Platform"). By visiting the Platform or availing services, you agree to the terms of this Privacy Policy and are governed by the laws of India.
        </p>

        {/* SECTION: Collection */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">1. Collection of Information</h2>
          <p className="text-gray-700 mt-2">
            We collect your personal data when you interact with us or use our Platform. This includes data like your name,
            contact details, proof of identity/address, payment information (bank/card), biometric data (if opted), and
            behavioral preferences. You may opt out of providing certain data, but this may limit access to services.
            Data from third-party partners may be governed by their respective privacy policies.
          </p>
        </div>

        {/* SECTION: Usage */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">2. Usage of Information</h2>
          <p className="text-gray-700 mt-2">
            Your personal data is used to provide and improve our services — including order processing, customer support,
            promotions, fraud detection, dispute resolution, marketing, and legal compliance. You can opt out of marketing
            communications.
          </p>
        </div>

        {/* SECTION: Sharing */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">3. Sharing of Information</h2>
          <p className="text-gray-700 mt-2">
            We may share your data with affiliates, partners, service providers (logistics, payment, etc.), and government
            agencies when legally required. Such sharing is intended to provide services, comply with legal obligations,
            or protect our rights and users.
          </p>
        </div>

        {/* SECTION: Security */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">4. Security Precautions</h2>
          <p className="text-gray-700 mt-2">
            We implement reasonable security practices to safeguard your data. While we use secure servers and procedures,
            data transmission over the internet can never be fully secure. You are responsible for protecting your login
            credentials.
          </p>
        </div>

        {/* SECTION: Data Deletion and Retention */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">5. Data Deletion and Retention</h2>
          <p className="text-gray-700 mt-2">
            You may delete your account through Platform settings or by contacting us. Deletion requests may be delayed due
            to pending transactions or legal needs. We retain data only as long as necessary or required by law. Anonymized
            data may be used for research and analytics.
          </p>
        </div>

        {/* SECTION: User Rights */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">6. Your Rights</h2>
          <p className="text-gray-700 mt-2">
            You may access, update, or correct your personal data directly on the Platform. You may also contact us for
            help with your rights under this policy.
          </p>
        </div>

        {/* SECTION: Consent */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">7. Consent</h2>
          <p className="text-gray-700 mt-2">
            By using our Platform, you consent to the collection and processing of your data as per this policy. You may
            withdraw consent by writing to us with the subject “Withdrawal of consent for processing personal data”. We may
            verify such requests before acting upon them. Note: Withdrawal may impact service availability.
          </p>
        </div>

        {/* SECTION: Changes to Policy */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700">8. Changes to this Policy</h2>
          <p className="text-gray-700 mt-2">
            We may update this policy periodically. Significant changes will be notified to you, if required by law. Please
            review this page regularly to stay informed.
          </p>
        </div>
      </div>
    </section>
  );
}
