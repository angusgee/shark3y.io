import { useMemo } from 'react';
import { cves } from '../data/cves';

function getCvssColor(cvss) {
  if (cvss >= 9.0) return 'text-danger';
  if (cvss >= 7.0) return 'text-warning';
  if (cvss >= 4.0) return 'text-yellow-300';
  return 'text-accent';
}

function getCvssBadge(cvss) {
  if (cvss >= 9.0) return 'Critical';
  if (cvss >= 7.0) return 'High';
  if (cvss >= 4.0) return 'Medium';
  return 'Low';
}

export default function CVEs() {
  const sortedCves = useMemo(() => [...cves].sort((a, b) => b.cvss - a.cvss), []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10 animate-in">
        <h1 className="font-mono-display text-2xl font-bold text-heading mb-2 tracking-tight">CVEs</h1>
        <p className="text-body text-base">
          Vulnerabilities discovered and responsibly disclosed.
        </p>
      </div>

      {/* Mobile card layout */}
      <div className="sm:hidden flex flex-col gap-3 animate-in animate-in-delay-1">
        {sortedCves.map((cve) => (
          <div key={cve.id} className="card bg-dark-surface p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-display text-xs text-accent">{cve.id}</span>
              <span className={`font-mono-display text-xs font-medium ${getCvssColor(cve.cvss)}`}>
                {cve.cvss.toFixed(1)}
              </span>
            </div>
            <p className="text-base text-body mb-2">{cve.description}</p>
            <span className="font-mono-display text-xs text-body-muted">
              {new Date(cve.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop table layout */}
      <div className="hidden sm:block overflow-x-auto animate-in animate-in-delay-1">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="py-3 px-3 font-mono-display text-xs font-medium text-body-muted uppercase tracking-wider">CVE ID</th>
              <th className="py-3 px-3 font-mono-display text-xs font-medium text-body-muted uppercase tracking-wider">Description</th>
              <th className="py-3 px-3 font-mono-display text-xs font-medium text-body-muted uppercase tracking-wider text-center">CVSS</th>
              <th className="py-3 px-3 font-mono-display text-xs font-medium text-body-muted uppercase tracking-wider text-right">Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedCves.map((cve) => (
              <tr key={cve.id} className="border-b border-dark-border/50 hover:bg-dark-surface/50 transition-colors">
                <td className="py-3.5 px-3">
                  <span className="font-mono-display text-xs text-accent">{cve.id}</span>
                </td>
                <td className="py-3.5 px-3 text-base text-body max-w-md">{cve.description}</td>
                <td className="py-3.5 px-3 text-center">
                  <span className={`font-mono-display text-xs font-semibold ${getCvssColor(cve.cvss)}`}>
                    {cve.cvss.toFixed(1)}
                  </span>
                  <span className="block font-mono-display text-[10px] text-body-muted mt-0.5">
                    {getCvssBadge(cve.cvss)}
                  </span>
                </td>
                <td className="py-3.5 px-3 font-mono-display text-xs text-body-muted text-right whitespace-nowrap">
                  {new Date(cve.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 font-mono-display text-xs text-body-muted text-center">
        {sortedCves.length} CVEs &middot; All responsibly disclosed and patched
      </p>
    </div>
  );
}
