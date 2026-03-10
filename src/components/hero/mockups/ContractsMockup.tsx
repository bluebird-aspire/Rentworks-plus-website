import { FileText, Printer, Mail } from 'lucide-react';

export default function ContractsMockup() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3">
      <div className="flex items-center gap-1.5">
        <FileText className="w-3 h-3" style={{ color: '#A78BFA' }} />
        <span className="text-[9px] font-semibold" style={{ color: 'var(--theme-text)' }}>
          Rental Contract
        </span>
      </div>
      {/* Simulated document lines */}
      <div className="flex-1 flex flex-col gap-1.5 px-1">
        <div className="h-1.5 rounded-full w-[90%]" style={{ background: 'var(--theme-divider-strong)' }} />
        <div className="h-1.5 rounded-full w-[75%]" style={{ background: 'var(--theme-divider-strong)' }} />
        <div className="h-1.5 rounded-full w-[85%]" style={{ background: 'var(--theme-divider-strong)' }} />
        <div className="h-1.5 rounded-full w-[60%]" style={{ background: 'var(--theme-divider-strong)' }} />
        <div className="mt-auto">
          <div className="text-[7px] mb-0.5" style={{ color: 'var(--theme-text-muted)' }}>Signature</div>
          <div
            className="h-5 rounded border-b-2 flex items-end px-1"
            style={{ borderColor: '#007A5550' }}
          >
            <span className="text-[8px] italic" style={{ color: '#007A55' }}>Sign here</span>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <button className="flex items-center gap-0.5 text-[7px] px-1.5 py-0.5 rounded" style={{ background: 'var(--theme-navy-800)', color: 'var(--theme-text-muted)' }}>
          <Printer className="w-2 h-2" /> Print
        </button>
        <button className="flex items-center gap-0.5 text-[7px] px-1.5 py-0.5 rounded" style={{ background: 'var(--theme-navy-800)', color: 'var(--theme-text-muted)' }}>
          <Mail className="w-2 h-2" /> Email
        </button>
      </div>
    </div>
  );
}
