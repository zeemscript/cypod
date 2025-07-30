import emailjs from "@emailjs/browser";

const sendMail = async ({
  fullName,
  phone,
  whatsapp,
  email,
  country,
  course,
}) => {
  const templateParams = {
    fullName,
    phone,
    whatsapp,
    email,
    country,
    course,
  };
    const confirmTemplateParams = {
      fullName,
      email,
      course,
    };

  try {
    // Send both emails in parallel:
    const [toAdmin, toUser] = await Promise.all([
      emailjs.send(
        "service_2jfzkq7", // ✅ First template: Application to you (admin)
        "template_f8ycl1f", // Admin template ID
        templateParams,
        "EUPV8txgmBYqgj_iI" // Public key
      ),
      emailjs.send(
        "service_2jfzkq7", // ✅ Second template: Confirmation to applicant
        "template_7rcc1cs", // ✅ Replace with your follow-up template ID
        confirmTemplateParams,
        "EUPV8txgmBYqgj_iI"
      ),
    ]);

    return {
      status: "both_sent",
      admin: { status: toAdmin.status, text: toAdmin.text },
      user: { status: toUser.status, text: toUser.text },
    };
  } catch (error) {
    console.error("❌ EmailJS Error:", error);
    throw error;
  }
};

export default sendMail;
