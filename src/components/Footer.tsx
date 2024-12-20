const Footer = () => {
    // Get the current year dynamically to always show up-to-date copyright
    const currentYear = new Date().getFullYear();
    
    // Define footer sections for better organization
    const quickLinks = [
      { name: 'About', url: '#about' },
			{ name: 'Knowledge', url: '#knowledge'},
      { name: 'Projects', url: '#projects' },
      { name: 'Contact', url: '#contact' },
    ];
  
    const socialLinks = [
      { name: 'GitHub', url: 'https://github.com/EdoAbarca' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eduardo-abarca-chavez-01374a324/' },
      { name: 'Gmail', url: 'mailto:eduardo.abarca.c@usach.cl' },
			{ name: 'WhatsApp', url: 'https://wa.me/+56953118991'}
    ];
  
    return (
      <footer className="bg-gray-900 text-gray-300">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Eduardo Abarca</h3>
              <p className="text-sm leading-relaxed">{/* Crafting digital experiences through innovative web development solutions.
                Let&apos;s build something amazing together. */}
                This website shows an initial version of a portfolio, and was deployed for testing purposes. It&apos;s still under development.
              </p>
            </div>
  
            {/* Quick links section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-sm hover:text-white transition duration-150"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
  
            {/* Social links section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Connect</h3>
              <nav className="space-y-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition duration-150"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
  
        {/* Copyright bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-center space-y-4 md:space-y-0">
              {/* Copyright text */}
              <p className="align-middle text-sm">
                © {currentYear} Eduardo Abarca
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer