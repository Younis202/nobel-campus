import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("x_ZEhJ6g3kM2maed2");

// These should match your EmailJS configuration
const EMAILJS_SERVICE_ID = "service_czok99t";
const EMAILJS_TEMPLATE_ID = "template_30dx1jw";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  address?: string;
  propertyType?: string;
}

export async function sendEmail(data: EmailData, formType: string = 'Contact') {
  try {
    // Format the template parameters to match exactly with the template variables
    const templateParams = {
      to_name: "Admin", // Add recipient name
      from_name: data.name,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message || '',
      address: data.address || '',
      propertyType: data.propertyType || '',
      form_type: formType,
      submit_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: "Email sent successfully" };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to send email" };
  }
}