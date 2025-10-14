'use client';

const clients = [
  { name: 'Fortune 500 Tech', category: 'Technology' },
  { name: 'Global Healthcare', category: 'Healthcare' },
  { name: 'Financial Services', category: 'Finance' },
  { name: 'Manufacturing Corp', category: 'Manufacturing' },
  { name: 'Retail Excellence', category: 'Retail' },
  { name: 'Energy Solutions', category: 'Energy' },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#00C4B4] uppercase tracking-wide mb-2">
            Trusted by Industry Leaders
          </p>
          <h3 className="text-2xl font-bold text-[#0A2E50]">
            Powering Success Across Multiple Industries
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#F0F2F5] rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-full h-16 flex items-center justify-center mb-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0A2E50] group-hover:text-[#00C4B4] transition-colors">
                    {client.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 font-semibold text-center">
                {client.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Join 500+ companies that trust Knetix for their technology needs
          </p>
        </div>
      </div>
    </section>
  );
}

