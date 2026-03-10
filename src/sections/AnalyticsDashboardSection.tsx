import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TrendingUp, TrendingDown, Car, Calendar, DollarSign, Users, Wrench } from 'lucide-react';

const metrics = [
  { label: 'Fleet Status', value: 48, subValue: '42 Available', icon: Car, change: '+3', trend: 'up', color: '#2EE9A8' },
  { label: 'Active Reservations', value: 312, subValue: '+28 this week', icon: Calendar, change: '+12%', trend: 'up', color: '#3B82F6' },
  { label: 'Revenue Trend', value: 124500, subValue: '+12% vs last month', icon: DollarSign, change: '+$15K', trend: 'up', prefix: '$', color: '#8B5CF6' },
  { label: 'Conversion Rate', value: 68, subValue: '+5% vs last month', icon: TrendingUp, change: '+5%', trend: 'up', suffix: '%', color: '#F59E0B' },
  { label: 'No-Show Rate', value: 4.2, subValue: '-1.5% vs last month', icon: Users, change: '-1.5%', trend: 'down', suffix: '%', color: '#EF4444' },
  { label: 'Maintenance Alerts', value: 3, subValue: '2 urgent', icon: Wrench, change: '-2', trend: 'down', color: '#14B8A6' },
];

const kpiCategories = [
  { title: 'Fleet Analytics', kpis: ['Fleet status', 'Class availability', 'Equipment usage', 'Top revenue vehicles'], color: '#2EE9A8' },
  { title: 'Revenue Metrics', kpis: ['Revenue trends', 'Revenue by class', 'Revenue pipeline', 'Top add-ons'], color: '#8B5CF6' },
  { title: 'Operational', kpis: ['Operational load', 'Agreements status', 'Conversion rate', 'No-show rate'], color: '#3B82F6' },
];

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => setDisplayValue(obj.val),
    });
  }, [value]);

  const formatted = value >= 1000 
    ? displayValue.toLocaleString('en-US', { maximumFractionDigits: 0 })
    : displayValue.toFixed(value % 1 !== 0 ? 1 : 0);

  return <span>{prefix}{formatted}{suffix}</span>;
}

function Sparkline({ color, data }: { color: string; data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg className="w-full h-12" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={points} />
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon fill={`url(#gradient-${color})`} points={`0,100 ${points} 100,100`} />
    </svg>
  );
}

export default function AnalyticsDashboardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.analytics-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none',
              }
            }
          );
        }
      });

      gsap.fromTo('.kpi-category',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.kpi-categories',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sparklineData = [30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 90];

  return (
    <section ref={sectionRef} id="analytics" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="analytics-header text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-mint/10 border border-mint/20 text-mint font-mono text-xs uppercase tracking-wider mb-4">
            Analytics Dashboard
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-text mb-4">
            Real-time operational insights
          </h2>
          <p className="text-lg text-slate-muted max-w-[700px] mx-auto">
            15+ KPI metrics tracking fleet status, revenue trends, utilization, 
            and operational performance—all updated in real-time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              ref={el => { cardsRef.current[i] = el; }}
              className="glass-card rounded-2xl p-5 hover:border-mint/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${metric.color}20` }}>
                  <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
                </div>
                <div className={`flex items-center gap-1 text-xs ${metric.trend === 'up' ? 'text-mint' : 'text-red-400'}`}>
                  {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {metric.change}
                </div>
              </div>

              <p className="text-sm text-slate-muted mb-1">{metric.label}</p>
              <p className="text-2xl md:text-3xl font-heading font-semibold text-slate-text mb-1">
                <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              <p className="text-xs text-mint/80">{metric.subValue}</p>

              <div className="mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <Sparkline color={metric.color} data={sparklineData} />
              </div>
            </div>
          ))}
        </div>

        <div className="kpi-categories grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpiCategories.map((category) => (
            <div key={category.title} className="kpi-category glass-card rounded-2xl p-6 hover:border-mint/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                <h3 className="font-heading text-lg font-semibold text-slate-text">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.kpis.map((kpi) => (
                  <div key={kpi} className="flex items-center gap-2 text-sm text-slate-muted hover:text-slate-text transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${category.color}80` }} />
                    {kpi}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
