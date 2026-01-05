import { cves } from '../data/cves';

function getCvssColor(cvss) {
  if (cvss >= 9.0) return 'text-red-500';
  if (cvss >= 7.0) return 'text-orange-500';
  if (cvss >= 4.0) return 'text-yellow-500';
  return 'text-green-500';
}

function getCvssBadge(cvss) {
  if (cvss >= 9.0) return 'Critical';
  if (cvss >= 7.0) return 'High';
  if (cvss >= 4.0) return 'Medium';
  return 'Low';
}

export default function CVEs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-gray">CVEs</span>
      </h1>
      <p className="text-gray-text mb-8">
        A collection of vulnerabilities I've discovered and responsibly disclosed.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="py-3 px-4 text-sm font-medium text-gray-text">CVE ID</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-text">Description</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-text text-center">CVSS</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-text text-right">Date</th>
            </tr>
          </thead>
          <tbody>
            {cves.map((cve) => (
              <tr
                key={cve.id}
                className="border-b border-dark-border/50 hover:bg-dark-surface/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <span className="text-neon-cyan font-mono text-sm">{cve.id}</span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-text max-w-md">
                  {cve.description}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`font-mono text-sm font-medium ${getCvssColor(cve.cvss)}`}>
                    {cve.cvss.toFixed(1)}
                  </span>
                  <span className="block text-xs text-gray-muted mt-0.5">
                    {getCvssBadge(cve.cvss)}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-muted text-right whitespace-nowrap">
                  {new Date(cve.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-sm text-gray-muted text-center">
        Showing {cves.length} CVEs • All vulnerabilities were responsibly disclosed
      </p>
    </div>
  );
}
