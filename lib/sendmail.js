import emailjs from "@emailjs/browser";

const sendMail = async ({
  fullName,
  email,
  webUrl,
  startupName,
  currentStage,
  raisedOver200k,
  raisedOver1m,
  topSecurityChallenge,
}) => {
  const templateParams = {
    fullName: fullName,
    email: email,
    weburl: webUrl,
    startupName: startupName,
    currentStage: currentStage,
    raisedOver200k: raisedOver200k,
    raisedOver1m: raisedOver1m,
    topSecurityChallenge: topSecurityChallenge,
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
