import { Icon } from "@iconify-icon/react";

const Contact = () => {
  const socialLinks = [
    {
      icon: "logos:whatsapp-icon",
      width: 36,
      height: 36,
      name: "WhatsApp*",
      url: "https://wa.me/+56953118991",
      bgColor: "bg-green-100",
      hoverColor: "hover:bg-green-200",
      textColor: "text-green-700",
    },
    {
      icon: "skill-icons:linkedin",
      width: 36,
      height: 36,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eduardo-abarca-chavez-01374a324/",
      bgColor: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: "logos:google-gmail",
      width: 36,
      height: 36,
      name: "Gmail",
      url: "mailto:eduardo.abarca.c@usach.cl",
      bgColor: "bg-red-100",
      hoverColor: "hover:bg-red-200",
      textColor: "text-red-700",
    },
  ];

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      {/* Header section with title and description */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact me</h2>
        <p className="text-lg text-gray-600">
          Let's get in touch! These are my main contact sources:
        </p>
      </div>

      {/* Contacts grid */}
      <div className="grid max-w-[480px] grid-cols-3 gap-6 mx-auto my-12">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col md:flex-row items-center justify-center p-4 rounded-full ${social.bgColor} 
                      ${social.hoverColor} transition duration-300 ease-in-out 
                      transform hover:-translate-y-1`}
          >
            <div className="mb-2 md:mb-0 md:mr-4">
              <Icon icon={social.icon} width={social.width} height={social.height} />
            </div>
            <span className={`font-medium text-center md:text-left ${social.textColor}`}>
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* Note */}
      <div className="text-center">
        <p className="text-sm text-gray-500 italic">
          *: Prefer sending a message over a call. Thank you in advance!
        </p>
      </div>
    </section>
  );
};

export default Contact;
