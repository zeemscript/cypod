import emailjs from "@emailjs/browser";

const sendMail = async ({ fullName, phone, whatsapp, email, country,course }) => {
  const templateParams = {
    fullName,
    phone,
    whatsapp,
    email,
    country,
    course
  };

  try {
    const response = await emailjs.send(
      "service_k4ccfbp", // ✅ Your EmailJS service ID
      "template_jlqohtm", // ✅ Your EmailJS template ID
      templateParams,
      "pfpa-BHAVDMTtEYcc" // ✅ Your EmailJS public key
    );

    return { status: response.status, text: response.text };
  } catch (error) {
    console.error("❌ EmailJS Error:", error);
    throw error;
  }
};

export default sendMail;
