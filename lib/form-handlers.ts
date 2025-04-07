export function sendToWhatsApp(formData: any, formType: string = 'Contact') {
  const phone = "+201013476272"; // Your WhatsApp number
  let message = "";

  // Format message based on form type
  switch (formType) {
    case 'Property':
      message = `*New Property Lead*\n\n` +
        `📍 Address: ${formData.address}\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `🏠 Property Type: ${formData.propertyType || 'Not specified'}\n` +
        `💬 Message: ${formData.message || 'No message provided'}`;
      break;

    case 'PropertyDetails':
      message = `*Property Details Request*\n\n` +
        `🏠 Property: ${formData.propertyAddress}\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `💬 Message: ${formData.message || 'No message provided'}`;
      break;

    default:
      message = `*New Contact Form Submission*\n\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `💬 Message: ${formData.message || 'No message provided'}`;
  }

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Open WhatsApp in a new window
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}