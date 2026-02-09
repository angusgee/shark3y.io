import { Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/shark3yx',
    icon: Twitter,
    handle: '@shark3yx',
  },
  {
    name: 'Email',
    href: 'mailto:info@shark3y.io',
    icon: Mail,
    handle: 'info@shark3y.io',
  },
];

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10 animate-in">
        <h1 className="font-mono-display text-2xl font-bold text-heading mb-2 tracking-tight">Contact</h1>
        <p className="text-body text-base">
          Security research collaborations, bug bounty inquiries, or just say hi.
        </p>
      </div>

      <div className="flex flex-col gap-3 max-w-sm animate-in animate-in-delay-1">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-dark-surface p-4 flex items-center gap-4"
          >
            <link.icon className="text-accent shrink-0" size={18} />
            <div>
              <div className="text-heading text-base font-medium">{link.name}</div>
              <div className="font-mono-display text-xs text-body-muted">{link.handle}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-14 animate-in animate-in-delay-3">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-mono-display text-xs text-body-muted tracking-wider uppercase">Responsible Disclosure</h2>
          <div className="flex-1 h-px bg-dark-border"></div>
        </div>
        <p className="text-body text-base leading-relaxed max-w-lg">
          If you've found a security vulnerability, please reach out via email or DM.
          I follow responsible disclosure practices and am happy to coordinate with vendors
          on remediation timelines.
        </p>
      </div>
    </div>
  );
}
