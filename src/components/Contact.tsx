import { Icon } from '@iconify-icon/react';

const Contact = () => {
  const socialLinks = [
    {
      "icon": "logos:whatsapp",
      "width": 48,
      "height": 48,
      "name": "WhatsApp*",
      "url": "https://wa.me/yournumber",
      "bgColor": "bg-green-100",
      "hoverColor": "hover:bg-green-200",
      "textColor": "text-green-700"
    },
    {
      "icon": "skill-icons:linkedin",
      "width": 48,
      "height": 48,
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/yourprofile",
      "bgColor": "bg-blue-100",
      "hoverColor": "hover:bg-blue-200",
      "textColor": "text-blue-700"
    },
    {
      "icon": "logos:google-gmail",
      "width": 48,
      "height": 48,
      "name": "Gmail",
      "url": "mailto:your.email@gmail.com",
      "bgColor": "bg-red-100",
      "hoverColor": "hover:bg-red-200",
      "textColor": "text-red-700"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header section with title and description */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Contact me
        </h2>
        <p className="text-lg text-gray-600">
          Let's get in touch! Here are my main contact sources:
        </p>
      </div>

      {/* Social links grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center p-6 rounded-lg ${social.bgColor} 
                      ${social.hoverColor} transition duration-300 ease-in-out 
                      transform hover:-translate-y-1`}
          >
            <div className="mb-3">
              <Icon
                icon={social.icon}
                width={social.width}
                height={social.height}
              />
            </div>
            <span className={`font-medium ${social.textColor}`}>
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* Note about contact preference */}
      <div className="text-center">
        <p className="text-sm text-gray-500 italic">
          *: Don't call me; Instead, send me a message. Thank you in advance!
        </p>
      </div>
    </section>
  );
};

export default Contact;