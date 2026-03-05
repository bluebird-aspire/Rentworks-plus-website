import React from 'react';
import { MessageCircle, Phone, Mail, BookOpen, Ticket, Bot } from 'lucide-react';

export function ExpertSupport() {
  const supportTeam = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200',
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200',
  ];

  const supportChannels = [
    { icon: Ticket, label: 'Support Tickets', color: '#007A55' },
    { icon: Mail, label: 'Email', color: '#007A55' },
    { icon: MessageCircle, label: 'Live Chat', color: '#007A55' },
    { icon: BookOpen, label: 'Knowledge Base', color: '#007A55' },
    { icon: Phone, label: 'Phone', color: '#007A55' },
    { icon: Bot, label: 'AI Support', color: '#007A55' },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F4F5F7] text-[#081E32] px-4 py-2 rounded-full text-sm mb-4">
            Customer Success
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#081E32] mb-4 max-w-4xl mx-auto leading-tight">
            24/7 Available Expert Assistance When You Need It Most
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card - Support Specialists */}
          <div className="bg-gradient-to-br from-[#007A55]/5 via-[#007A55]/10 to-[#007A55]/5 rounded-3xl p-10 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#007A55] rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#007A55] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl text-[#081E32] mb-4">Car Rental Industry Experts</h3>
              <p className="text-gray-600 mb-12 leading-relaxed max-w-md">
                Our team has extensive experience in car rental operations, ensuring they understand
                your business challenges and can provide solutions that work.
              </p>

              {/* Orbital Team Avatars System */}
              <div className="relative h-80 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Center Icon/Logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center z-30">
                    <div className="w-16 h-16 bg-[#007A55] rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">R+</span>
                    </div>
                  </div>

                  {/* Single Orbital Path - 7 unique experts */}
                  {/* Dashed border circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-dashed border-[#007A55]/30"></div>
                  {/* Animated orbit container */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72  animate-orbit-slow">
                    {supportTeam.map((avatar, index) => {
                      // Start from top (270 degrees = -90 degrees) and distribute evenly
                      const angle = -90 + (index * 360) / supportTeam.length;
                      const radius = 144; // Circle radius matches w-72 (288px / 2 = 144px)
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      const glowColors = [
                        '#007A55',
                        '#00A575',
                        '#007A55',
                        '#005F44',
                        '#007A55',
                        '#00A575',
                        '#007A55',
                      ];

                      return (
                        <div
                          key={`expert-${index}`}
                          className="absolute"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                          }}
                        >
                          {/* Glow background for select avatars */}
                          {[1, 3, 5].includes(index) && (
                            <div
                              className="absolute inset-0 -z-10 w-20 h-20 rounded-full blur-xl opacity-40"
                              style={{
                                backgroundColor: glowColors[index],
                                transform: 'translate(-25%, -25%)',
                              }}
                            ></div>
                          )}
                          <div className="w-14 h-14 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200 hover:scale-110 transition-transform">
                            <img
                              src={avatar}
                              alt={`Expert ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Support Channels */}
          <div className="bg-gradient-to-br from-[#007A55]/5 via-[#007A55]/10 to-[#007A55]/5 rounded-3xl p-10 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-[#007A55] rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#007A55] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl text-[#081E32] mb-4">Multiple Support Channels</h3>
              <p className="text-gray-600 mb-12 leading-relaxed max-w-md">
                Get help via chat, phone, email, or our comprehensive online knowledge base. Choose
                the channel that works best for you.
              </p>

              {/* Support Channels Network */}
              <div className="relative h-80 flex items-center justify-center">
                {/* Center Logo/Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-pulse-slow">
                    <div className="w-12 h-12 bg-[#007A55] rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">R+</span>
                    </div>
                  </div>
                </div>

                {/* Support Channel Icons with animated connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#007A55', stopOpacity: 0.1 }} />
                      <stop offset="50%" style={{ stopColor: '#007A55', stopOpacity: 0.5 }} />
                      <stop offset="100%" style={{ stopColor: '#007A55', stopOpacity: 0.1 }} />
                    </linearGradient>
                  </defs>

                  {supportChannels.map((_, index) => {
                    const angle = (index * 360) / supportChannels.length - 90;
                    const radius = 140;
                    const centerX = 160;
                    const centerY = 160;
                    const x = centerX + Math.cos((angle * Math.PI) / 180) * radius;
                    const y = centerY + Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <g key={index}>
                        <path
                          d={`M ${centerX} ${centerY} Q ${(centerX + x) / 2 + 20} ${(centerY + y) / 2 - 20}, ${x} ${y}`}
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="2"
                          className="animate-dash"
                          strokeDasharray="5,5"
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r="3"
                          fill="#007A55"
                          className="animate-ping-slow"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Channel Icons */}
                {supportChannels.map((channel, index) => {
                  const angle = (index * 360) / supportChannels.length - 90;
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const Icon = channel.icon;

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transition-all duration-500 hover:scale-110"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        zIndex: 10,
                      }}
                    >
                      <div className="relative group cursor-pointer">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all">
                          <Icon className="w-6 h-6 text-[#007A55]" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#081E32] text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {channel.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-[#F4F5F7] rounded-2xl p-6 text-center">
            <p className="text-4xl text-[#007A55] mb-2">24/7</p>
            <p className="text-sm text-gray-600">Available Support</p>
          </div>
          <div className="bg-[#F4F5F7] rounded-2xl p-6 text-center">
            <p className="text-4xl text-[#007A55] mb-2">&lt;2min</p>
            <p className="text-sm text-gray-600">Avg. Response Time</p>
          </div>
          <div className="bg-[#F4F5F7] rounded-2xl p-6 text-center">
            <p className="text-4xl text-[#007A55] mb-2">98%</p>
            <p className="text-sm text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="bg-[#F4F5F7] rounded-2xl p-6 text-center">
            <p className="text-4xl text-[#007A55] mb-2">500+</p>
            <p className="text-sm text-gray-600">Articles & Guides</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit-slow {
          from {
            transform:  rotate(0deg);
          }
          to {
            transform:  rotate(360deg);
          }
        }

        @keyframes orbit-reverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes orbit-slower {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(0px);
          }
          50% {
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(0px);
          }
          50% {
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(-5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }

        @keyframes ping-slow {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-orbit-slow {
          animation: orbit-slow 40s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 35s linear infinite;
        }

        .animate-orbit-slower {
          animation: orbit-slower 45s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-dash {
          animation: dash 20s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
