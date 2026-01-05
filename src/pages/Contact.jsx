import { Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/shark3yx',
    icon: Twitter,
    handle: '@shark3yx',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/shark3y',
    icon: Linkedin,
    handle: 'shark3y',
  },
  {
    name: 'Email',
    href: 'mailto:contact@shark3y.io',
    icon: Mail,
    handle: 'contact@shark3y.io',
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-gray">Contact</span>
      </h1>
      <p className="text-gray-text mb-8">
        Get in touch for security research collaborations, bug bounty inquiries, or just to say hello.
      </p>

      <div className="flex flex-col gap-4 max-w-md">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border rounded-lg bg-dark-surface p-5 flex items-center gap-4 transition-all hover:bg-dark-surface/80"
          >
            <link.icon className="text-neon-cyan" size={24} />
            <div>
              <div className="text-white font-medium">{link.name}</div>
              <div className="text-gray-muted text-sm">{link.handle}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-lg bg-dark-surface border border-dark-border">
        <h2 className="text-lg font-medium text-white mb-2">Responsible Disclosure</h2>
        <p className="text-gray-text text-sm leading-relaxed">
          If you've found a security vulnerability, please reach out via email or DM. 
          I follow responsible disclosure practices and am happy to coordinate with vendors 
          on remediation timelines.
        </p>
      </div>
    </div>
  );
}
