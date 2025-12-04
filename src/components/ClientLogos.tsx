'use client';

import { 
  Monitor, 
  Heart, 
  TrendingUp, 
  Factory, 
  ShoppingBag, 
  Zap 
} from 'lucide-react';

const clients = [
  { 
    name: 'Fortune 500 Tech', 
    category: 'Technology',
    icon: <Monitor className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Global Healthcare', 
    category: 'Healthcare',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-red-500 to-pink-500'
  },
  { 
    name: 'Financial Services', 
    category: 'Finance',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'Manufacturing Corp', 
    category: 'Manufacturing',
    icon: <Factory className="w-8 h-8" />,
    color: 'from-slate-500 to-gray-500'
  },
  { 
    name: 'Retail Excellence', 
    category: 'Retail',
    icon: <ShoppingBag className="w-8 h-8" />,
    color: 'from-purple-500 to-violet-500'
  },
  { 
    name: 'Energy Solutions', 
    category: 'Energy',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500'
  },
];

export default function ClientLogos() {
  return (
    <div>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#00C4B4] uppercase tracking-wide mb-2">
            Trusted by Enterprise Innovators
          </p>
          <h3 className="text-2xl font-bold text-[#0A2E50]">
            Advisory Partnerships Across Critical Industries
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#F0F2F5] to-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-transparent hover:border-[#00C4B4]"
            >
              <div className="w-full h-20 flex items-center justify-center mb-3">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${client.color} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {client.icon}
                </div>
              </div>
              <div className="text-xs text-gray-600 font-semibold text-center group-hover:text-[#00C4B4] transition-colors">
                {client.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Enterprises rely on Knetix for discreet, vendor-neutral guidance that unlocks real outcomes.
          </p>
        </div>
    </div>
  );
}

