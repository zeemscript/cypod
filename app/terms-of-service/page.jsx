import React from "react";

const TermsOfService = () => (
  <div className="min-h-screen bg-gradient-to-br from-white via-[#f3f7fa] to-[#e6f2ef] py-16 px-4">
    <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl font-extrabold text-[#29434e] mb-8 text-center">
        Privacy Policy
      </h1>
      <p className="mb-6 text-gray-700">
        At <span className="font-semibold text-[#2bb3a2]">CYPODadvisory</span>,
        protecting your personal information is our top priority.
      </p>
      <h2 className="text-xl font-bold text-[#29434e] mt-8 mb-2">
        Data Collected
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Personal details (name, email, organization)</li>
        <li>
          Payment information (processed securely via PCI-compliant gateways)
        </li>
        <li>Course activity (attendance, quiz results)</li>
      </ul>
      <h2 className="text-xl font-bold text-[#29434e] mt-8 mb-2">
        Use of Data
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Enroll you in courses and process payments</li>
        <li>Communicate important updates, resources, and promotions</li>
        <li>Improve our training content and platform</li>
      </ul>
      <h2 className="text-xl font-bold text-[#29434e] mt-8 mb-2">
        Data Sharing
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>We do not sell or rent your personal data</li>
        <li>
          Shared only with trusted service providers (e.g., payment processors,
          webinar hosts) under strict confidentiality
        </li>
      </ul>
      <h2 className="text-xl font-bold text-[#29434e] mt-8 mb-2">
        Data Security
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Industry-standard encryption in transit and at rest</li>
        <li>Regular security audits and access controls</li>
      </ul>
      <h2 className="text-xl font-bold text-[#29434e] mt-8 mb-2">
        Your Rights
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Access, correct, or delete your data upon request</li>
        <li>Opt out of marketing communications at any time</li>
      </ul>
      <h2 className="text-xl font-bold text-[#29434e] mt-8 mb-2">Contact</h2>
      <p className="mb-8 text-gray-700">
        For any privacy inquiries, reach out to{" "}
        <a
          href="mailto:hello@cypodadvisory.com"
          className="text-[#2bb3a2] underline"
        >
          hello@cypodadvisory.com
        </a>
      </p>

      <h1 className="text-3xl font-extrabold text-[#29434e] mb-8 text-center mt-16">
        Refund Policy
      </h1>
      <p className="mb-6 text-gray-700">
        We understand plans can change. Here’s how our refund process works:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          Full refunds are available only if you cancel at least 10 days before
          your course start date.
        </li>
        <li>
          Cancellations made within 9 days of the start date are non-refundable.
        </li>
        <li>
          Payment gateway charges incurred at the time of transaction will be
          deducted from any refunded amount and are the responsibility of the
          student.
        </li>
        <li>
          To request a refund, email{" "}
          <a
            href="mailto:hello@cypodadvisory.com"
            className="text-[#2bb3a2] underline"
          >
            hello@cypodadvisory.com
          </a>{" "}
          with your registration details.
        </li>
        <li>
          Refunds are processed within 14 days of approval and returned to the
          original payment method.
        </li>
      </ul>
    </div>
  </div>
);

export default TermsOfService;
