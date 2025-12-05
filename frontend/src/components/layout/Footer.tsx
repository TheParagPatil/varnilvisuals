import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { memo } from "react";

const footerLinks = {
  services: [
    { name: "Video Editing", path: "/services#video" },
    { name: "Photo Editing", path: "/services#photo" },
    { name: "Graphic Design", path: "/services#graphic" },
    { name: "Branding", path: "/services#branding" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Process", path: "/process" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
  ],
  support: [
    { name: "Contact", path: "/contact" },
    // { name: "Pricing", path: "/pricing" },
    { name: "Get a Quote", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = memo(() => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold gradient-text">
                Varnil Visuals
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Your Full-Service Editing & Creative Agency. We transform brands, creators, and businesses with premium visual solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground text-sm">hello@varnilvisuals.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-1 shrink-0" />
                <a href="https://wa.me/919224773846" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors">+91 92247 73846</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Varnil Visuals. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-muted-foreground text-xs">
              Developed by{" "}
              <a
                href="https://bitinfusiontechnology.com"
                target="_blank"
                rel="noopener"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
                title="Bitinfusion Technology - Web Development & Digital Solutions"
              >
                Bitinfusion Technology
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';
