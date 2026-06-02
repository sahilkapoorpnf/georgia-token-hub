import { motion } from "framer-motion";
import {
  Building2, Coins, Wallet, ShieldCheck, ArrowRight, Check, Sparkles,
  TrendingUp, Globe2, Users, Layers, Lock, FileCheck2, Scale, Cpu,
  LineChart, Repeat, Home, Banknote, BarChart3, Network, Rocket,
  Calendar, Star, ChevronRight, Zap, KeyRound, BadgeCheck,
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, LineChart as RLineChart, Line, PieChart, Pie, Cell, Legend,
} from "recharts";
import logo from "@/assets/bitdecentro-logo.png";
import hero from "@/assets/hero-skyline.jpg";
import blockchainImg from "@/assets/blockchain-network.jpg";
import propertyImg from "@/assets/luxury-property.jpg";
import shieldImg from "@/assets/security-shield.jpg";
import { Counter } from "./Counter";

const ROYAL = "#0057FF";
const DARK = "#0033A0";
const SKY = "#4D8BFF";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#0057FF]/20 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0033A0]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#0057FF] pulse-ring" />
      {children}
    </div>
  );
}

function Heading({ kicker, title, subtitle, center = true }: { kicker?: string; title: React.ReactNode; subtitle?: React.ReactNode; center?: boolean }) {
  return (
    <motion.div {...fadeUp} className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      {kicker && <div className={`mb-5 ${center ? "flex justify-center" : ""}`}><SectionLabel>{kicker}</SectionLabel></div>}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1F4D] leading-[1.05]">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 mt-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Bitdecentro" className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#0B1F4D]/80">
            <a href="#solution" className="hover:text-[#0057FF]">Solution</a>
            <a href="#how" className="hover:text-[#0057FF]">How it works</a>
            <a href="#revenue" className="hover:text-[#0057FF]">Revenue</a>
            <a href="#security" className="hover:text-[#0057FF]">Security</a>
          </nav>
          <a href="#cta" className="inline-flex items-center gap-1.5 rounded-xl bg-[#0057FF] px-4 py-2 text-sm font-semibold text-white soft-shadow hover:bg-[#0033A0] transition">
            Get Proposal <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden gradient-bg">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#0057FF]/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[#4D8BFF]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <SectionLabel>Bitdecentro · Web3 for Real Estate</SectionLabel>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-[#0B1F4D]">
            Real Estate <span className="gradient-text">Tokenization</span> Platform
          </h1>
          <p className="mt-4 text-2xl font-medium text-[#0033A0]">for Georgia & Global Investors</p>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Buy · Sell · Rent real estate using blockchain technology. A regulated, institutional-grade ecosystem
            for fractional ownership, instant liquidity and automated rental income.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solution" className="inline-flex items-center gap-2 rounded-xl bg-[#0057FF] px-6 py-3.5 text-white font-semibold soft-shadow hover:translate-y-[-2px] transition">
              Explore Platform <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border border-[#0057FF]/20 bg-white/70 backdrop-blur px-6 py-3.5 text-[#0033A0] font-semibold hover:bg-white transition">
              Investment Opportunity
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 max-w-xl">
            {[
              { v: 500, suffix: "M+", label: "Future Market Opportunity", prefix: "$" },
              { v: 120, suffix: "+", label: "Countries Investor Access" },
              { v: 10000, suffix: "+", label: "Fractional Ownership Tokens" },
              { v: 95, suffix: "%", label: "Passive Rental Automation" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: 0.1 * i, duration: 0.6 }} className="glass rounded-2xl p-4">
                <div className="font-display text-2xl md:text-3xl font-bold text-[#0033A0]">
                  <Counter to={s.v} prefix={s.prefix || ""} suffix={s.suffix} />
                </div>
                <div className="text-xs text-slate-600 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative">
          <div className="relative rounded-[28px] overflow-hidden ring-royal">
            <img src={hero} alt="Luxury tokenized skyline" width={1920} height={1280} className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0033A0]/60 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#0057FF] flex items-center justify-center text-white"><Coins className="h-4 w-4" /></div>
              <div>
                <div className="text-xs text-slate-500">Live token price</div>
                <div className="font-display font-bold text-[#0B1F4D]">$16.42 <span className="text-emerald-500 text-xs">+6.2%</span></div>
              </div>
            </div>
            <div className="absolute bottom-5 right-5 glass rounded-2xl px-4 py-3 animate-float">
              <div className="text-xs text-slate-500">Monthly rental yield</div>
              <div className="font-display font-bold text-[#0B1F4D]">9.8% APY</div>
            </div>
            <div className="absolute bottom-5 left-5 glass rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-[#0033A0] font-semibold"><Network className="h-3.5 w-3.5" /> Polygon · Ethereum L2</div>
            </div>
          </div>
          <img src={blockchainImg} alt="Blockchain network" width={1280} height={1024} loading="lazy" className="absolute -bottom-12 -left-10 w-44 h-44 object-contain animate-float" />
        </motion.div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    { icon: Banknote, t: "Low liquidity", d: "Selling takes months; capital is locked." },
    { icon: TrendingUp, t: "Huge ticket size", d: "Entry barriers exclude most investors." },
    { icon: Globe2, t: "Cross-border friction", d: "Foreign investment is slow & expensive." },
    { icon: Users, t: "Limited investor reach", d: "Geographic and KYC bottlenecks." },
    { icon: FileCheck2, t: "Complex paperwork", d: "Manual notarization, escrow, fees." },
    { icon: Home, t: "Rental management chaos", d: "Distribution, taxes and reporting." },
  ];
  const compare = [
    { k: "Liquidity", trad: "Months", tok: "Seconds" },
    { k: "Min. investment", trad: "$100,000+", tok: "$10" },
    { k: "Investor base", trad: "Local only", tok: "Global" },
    { k: "Settlement", trad: "Weeks", tok: "Instant" },
    { k: "Rental payout", trad: "Manual", tok: "Smart contract" },
    { k: "Transparency", trad: "Opaque", tok: "On-chain" },
  ];
  return (
    <section className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Heading kicker="Section 01 · Problem"
          title={<>Traditional real estate is <span className="gradient-text">broken</span> for modern investors</>}
          subtitle="Illiquid markets, high entry costs and friction-heavy ownership lock out billions of capital from the world's largest asset class."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0057FF]/40 hover:-translate-y-1 transition soft-shadow">
              <div className="h-12 w-12 rounded-xl bg-[#E8F1FF] text-[#0057FF] flex items-center justify-center mb-4 group-hover:bg-[#0057FF] group-hover:text-white transition">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#0B1F4D]">{p.t}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Traditional Real Estate</div>
            <ul className="mt-5 divide-y divide-slate-200">
              {compare.map((c) => (
                <li key={c.k} className="py-3 flex justify-between"><span className="text-slate-600">{c.k}</span><span className="font-semibold text-slate-800">{c.trad}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8 glass-dark relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Tokenized Real Estate</div>
            <ul className="mt-5 divide-y divide-white/15">
              {compare.map((c) => (
                <li key={c.k} className="py-3 flex justify-between"><span className="text-white/80">{c.k}</span><span className="font-semibold">{c.tok}</span></li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    { icon: Layers, t: "Fractional ownership", d: "Split any property into thousands of tradable tokens." },
    { icon: Cpu, t: "Smart contracts", d: "Automated, audited, on-chain ownership." },
    { icon: Globe2, t: "Global onboarding", d: "KYC, AML and investor accreditation built-in." },
    { icon: Repeat, t: "Automated rental", d: "Rent distributed on-chain every month." },
    { icon: ShieldCheck, t: "Secure transfer", d: "Custody-grade wallets & multi-sig." },
    { icon: BarChart3, t: "Marketplace trading", d: "Instant secondary liquidity 24/7." },
  ];
  const flow = ["Property", "Tokenization", "Investors", "Rental Income", "Secondary Trading"];
  return (
    <section id="solution" className="py-28 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Heading kicker="Section 02 · Solution"
          title={<>A complete <span className="gradient-text">blockchain real estate</span> ecosystem</>}
          subtitle="One platform connecting property owners, fractional investors and a global secondary market — fully automated by smart contracts."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.55 }}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0057FF] to-[#4D8BFF] text-white flex items-center justify-center mb-4">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#0B1F4D]">{it.t}</h3>
              <p className="text-sm text-slate-600 mt-1.5">{it.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-16 rounded-3xl glass p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0B1F4D]">Tokenization flow</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="px-5 py-3 rounded-2xl bg-white border border-[#0057FF]/20 text-[#0B1F4D] font-semibold soft-shadow">
                  {step}
                </motion.div>
                {i < flow.length - 1 && <ChevronRight className="h-5 w-5 text-[#0057FF]" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Building2, t: "Property Onboarding", d: "Owner submits documents, valuation & photography." },
    { icon: Scale, t: "Legal Verification", d: "Regulatory check, title verification, compliance review." },
    { icon: FileCheck2, t: "SPV Creation", d: "A Special Purpose Vehicle holds the legal title." },
    { icon: Coins, t: "Token Generation", d: "ERC-3643 / 1400 security tokens minted on-chain." },
    { icon: Wallet, t: "Investor Purchase", d: "KYC-verified investors buy via fiat or crypto." },
    { icon: TrendingUp, t: "Rental & Trading", d: "Recurring yield + secondary market liquidity." },
  ];
  return (
    <section id="how" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Heading kicker="Section 03 · Process"
          title={<>How tokenization <span className="gradient-text">works</span></>}
          subtitle="A 6-step institutional pipeline — from physical property to global on-chain investment."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.06 }}
              className="relative p-7 rounded-2xl border border-slate-200 bg-white hover:border-[#0057FF]/40 soft-shadow group">
              <div className="absolute -top-4 right-5 h-9 w-9 rounded-full bg-[#0057FF] text-white text-sm font-bold font-display flex items-center justify-center soft-shadow">
                {String(i + 1).padStart(2, "0")}
              </div>
              <s.icon className="h-7 w-7 text-[#0057FF] mb-4" />
              <h3 className="font-display text-lg font-semibold text-[#0B1F4D]">{s.t}</h3>
              <p className="text-sm text-slate-600 mt-1.5">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const roiData = Array.from({ length: 12 }).map((_, i) => ({
  month: `M${i + 1}`,
  value: 10000 + i * 480 + Math.round(Math.random() * 400),
}));

function BuyModule() {
  const features = ["Property listings", "HD galleries", "Wallet integration", "Fiat + Crypto", "Investor dashboard", "Smart contract ownership"];
  return (
    <section className="py-28 gradient-bg">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div {...fadeUp}>
          <SectionLabel>Section 04 · Buy Module</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold text-[#0B1F4D] leading-tight">
            Own real estate from <span className="gradient-text">$10</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">Browse listings, connect a wallet, pay in fiat or crypto. Receive on-chain proof of ownership instantly.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#0B1F4D]"><Check className="h-4 w-4 text-[#0057FF]" /> {f}</li>
            ))}
          </ul>

          <div className="mt-8 glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">Business example</div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div><div className="font-display text-2xl font-bold text-[#0033A0]">$1M</div><div className="text-xs text-slate-500">Property value</div></div>
              <div><div className="font-display text-2xl font-bold text-[#0033A0]">100K</div><div className="text-xs text-slate-500">Tokens minted</div></div>
              <div><div className="font-display text-2xl font-bold text-[#0033A0]">$10</div><div className="text-xs text-slate-500">Per token</div></div>
            </div>
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[#0057FF] to-[#4D8BFF] text-white">
              <div className="text-sm opacity-90">60% tokens sold</div>
              <div className="font-display text-3xl font-bold">$600,000 raised instantly</div>
              <div className="text-xs mt-1 opacity-90">Owner keeps 40% · No bank loan · No EMI burden</div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="relative">
          <div className="rounded-3xl glass p-5 soft-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-xs text-slate-500">platform.bitdecentro.com</div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={propertyImg} alt="Luxury property" width={1280} height={896} loading="lazy" className="w-full h-56 object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500">Tokens owned</div>
                <div className="font-display font-bold text-[#0B1F4D] text-xl">1,250</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500">Portfolio value</div>
                <div className="font-display font-bold text-[#0B1F4D] text-xl">$20,525</div>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-white border border-slate-200 p-4">
              <div className="text-xs text-slate-500 mb-2">ROI over 12 months</div>
              <ResponsiveContainer width="100%" height={140}>
                <AreaChart data={roiData}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={ROYAL} stopOpacity={0.45} />
                      <stop offset="100%" stopColor={ROYAL} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke={ROYAL} strokeWidth={2.5} fill="url(#g1)" />
                  <XAxis dataKey="month" hide />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const tradeData = Array.from({ length: 20 }).map((_, i) => ({
  t: i,
  price: 10 + Math.sin(i / 2) * 1.5 + i * 0.3 + Math.random() * 0.6,
}));

function SellModule() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div {...fadeUp} className="lg:order-2">
          <SectionLabel>Section 05 · Marketplace</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold text-[#0B1F4D] leading-tight">
            A <span className="gradient-text">24/7 exchange</span> for property tokens
          </h2>
          <p className="mt-4 text-slate-600 text-lg">Investors trade tokens peer-to-peer with smart-contract escrow and instant ownership transfer.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#0B1F4D]">
            {["Buy/sell marketplace", "Live token prices", "P2P trading", "Smart contract escrow", "Instant transfer", "Order book + AMM"].map(f => (
              <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#0057FF]" /> {f}</li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="glass rounded-xl p-4"><div className="text-xs text-slate-500">Buy price</div><div className="font-display font-bold text-[#0033A0] text-2xl">$10</div></div>
            <div className="glass rounded-xl p-4"><div className="text-xs text-slate-500">Sell price</div><div className="font-display font-bold text-[#0033A0] text-2xl">$16</div></div>
            <div className="glass rounded-xl p-4"><div className="text-xs text-slate-500">Profit</div><div className="font-display font-bold text-emerald-600 text-2xl">+60%</div></div>
          </div>
          <div className="mt-5 p-5 rounded-2xl bg-gradient-to-r from-[#0033A0] to-[#0057FF] text-white">
            Investment $10,000 → Value $16,000 → <span className="font-bold">Profit $6,000</span>. Platform earns <span className="font-bold">2% trading fee</span>.
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="lg:order-1">
          <div className="rounded-3xl border border-slate-200 p-6 bg-white soft-shadow">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-xs text-slate-500">BITDC/USDT</div>
                <div className="font-display font-bold text-2xl text-[#0B1F4D]">$16.42 <span className="text-emerald-500 text-sm font-medium">+6.20%</span></div>
              </div>
              <div className="flex gap-1">
                {["1H","1D","1W","1M","1Y"].map((p,i)=>(
                  <button key={p} className={`px-2.5 py-1 rounded-md text-xs ${i===2?'bg-[#0057FF] text-white':'bg-slate-100 text-slate-600'}`}>{p}</button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={tradeData}>
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={ROYAL} stopOpacity={0.45} />
                    <stop offset="100%" stopColor={ROYAL} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                <XAxis dataKey="t" hide />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
                <Area type="monotone" dataKey="price" stroke={ROYAL} strokeWidth={2.5} fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="rounded-xl bg-emerald-500 text-white py-3 font-semibold hover:bg-emerald-600 transition">Buy</button>
              <button className="rounded-xl bg-rose-500 text-white py-3 font-semibold hover:bg-rose-600 transition">Sell</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const rentalData = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"].map((m,i)=>({
  m, income: 1100 + i*30 + Math.round(Math.random()*100),
}));

function RentalModule() {
  return (
    <section className="py-28 gradient-bg">
      <div className="mx-auto max-w-7xl px-6">
        <Heading kicker="Section 06 · Rental Income"
          title={<>Passive income, <span className="gradient-text">automated on-chain</span></>}
          subtitle="Tenants pay → smart contract distributes rent pro-rata to every token holder, every month."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <motion.div {...fadeUp} className="lg:col-span-2 glass rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-[#0B1F4D]">Monthly rental distribution</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">Auto-paid</span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={rentalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                <XAxis dataKey="m" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
                <Bar dataKey="income" fill={ROYAL} radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-4">
            {[
              { l: "Monthly property rent", v: "$12,000", icon: Home },
              { l: "Investor token share", v: "10%", icon: Layers },
              { l: "Investor passive income", v: "$1,200/mo", icon: Banknote, hi: true },
              { l: "Platform management fee", v: "10%", icon: Wallet },
            ].map((c,i)=>(
              <div key={i} className={`rounded-2xl p-5 ${c.hi?'glass-dark':'glass'}`}>
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${c.hi?'bg-white/15':'bg-[#E8F1FF] text-[#0057FF]'}`}>
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className={`text-xs ${c.hi?'text-white/70':'text-slate-500'}`}>{c.l}</div>
                    <div className={`font-display font-bold text-xl ${c.hi?'text-white':'text-[#0B1F4D]'}`}>{c.v}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const revenueStreams = [
  { s: "Property Token Sales", t: "One Time", v: "$600,000+" },
  { s: "Trading Fees", t: "Recurring", v: "$20,000+/mo" },
  { s: "Rental Management Fees", t: "Recurring", v: "$10,000+/mo" },
  { s: "Property Listing Charges", t: "Recurring", v: "$5,000+/mo" },
  { s: "Token Minting Fees", t: "One Time", v: "$8,000+" },
  { s: "Investor Subscription Plans", t: "Recurring", v: "$7,500+/mo" },
  { s: "KYC Processing Fees", t: "One Time", v: "$3,000+/mo" },
  { s: "Platform Transaction Charges", t: "Recurring", v: "$6,000+/mo" },
  { s: "Maintenance Charges", t: "Recurring", v: "$2,500+/mo" },
  { s: "Premium Property Promotion", t: "One Time", v: "$4,000+/mo" },
];

const revenuePie = [
  { name: "Token Sales", value: 45, color: ROYAL },
  { name: "Trading", value: 18, color: DARK },
  { name: "Rental", value: 14, color: SKY },
  { name: "Listings", value: 9, color: "#7BA8FF" },
  { name: "Other", value: 14, color: "#B4CDFF" },
];

function Revenue() {
  return (
    <section id="revenue" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Heading kicker="Section 07 · Revenue model"
          title={<>How the <span className="gradient-text">client earns</span></>}
          subtitle="Ten compounding revenue streams across primary issuance, secondary markets and ongoing management."
        />

        <motion.div {...fadeUp} className="mt-14 grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-6">
            <div className="text-xs text-slate-500">Projected monthly recurring</div>
            <div className="mt-1 font-display text-4xl font-bold text-[#0033A0]"><Counter to={51000} prefix="$" suffix="+" /></div>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={revenuePie} dataKey="value" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {revenuePie.map((e,i)=>(<Cell key={i} fill={e.color} />))}
                </Pie>
                <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 overflow-hidden soft-shadow">
            <table className="w-full text-sm">
              <thead className="bg-[#0033A0] text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Revenue Stream</th>
                  <th className="text-left p-4 font-semibold">Type</th>
                  <th className="text-right p-4 font-semibold">Monthly Potential</th>
                </tr>
              </thead>
              <tbody>
                {revenueStreams.map((r,i)=>(
                  <tr key={i} className={i%2?'bg-slate-50':'bg-white'}>
                    <td className="p-4 text-[#0B1F4D] font-medium">{r.s}</td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${r.t==='Recurring'?'bg-emerald-50 text-emerald-600':'bg-blue-50 text-blue-600'}`}>{r.t}</span>
                    </td>
                    <td className="p-4 text-right font-semibold text-[#0033A0]">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const investorReturns = [
  { y: "Y1", tokenized: 18, traditional: 6 },
  { y: "Y2", tokenized: 36, traditional: 12 },
  { y: "Y3", tokenized: 58, traditional: 19 },
  { y: "Y4", tokenized: 82, traditional: 26 },
  { y: "Y5", tokenized: 110, traditional: 34 },
];

function InvestorEarnings() {
  return (
    <section className="py-28 gradient-bg">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <SectionLabel>Section 08 · Investors</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold text-[#0B1F4D] leading-tight">
            Three ways investors <span className="gradient-text">make money</span>
          </h2>
          <div className="mt-8 space-y-4">
            {[
              { i: TrendingUp, t: "Property appreciation", d: "Token value rises with the underlying asset." },
              { i: Banknote, t: "Monthly rental income", d: "Pro-rata yield paid via smart contract." },
              { i: Repeat, t: "Secondary trading profit", d: "Sell tokens on the marketplace any time." },
              { i: Globe2, t: "Global diversification", d: "Build a portfolio across multiple cities." },
            ].map((x,i)=>(
              <div key={i} className="flex gap-4 glass rounded-2xl p-5">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#0057FF] to-[#4D8BFF] text-white flex items-center justify-center"><x.i className="h-5 w-5"/></div>
                <div>
                  <div className="font-display font-semibold text-[#0B1F4D]">{x.t}</div>
                  <div className="text-sm text-slate-600">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="glass rounded-3xl p-6">
          <h3 className="font-display font-semibold text-[#0B1F4D]">ROI comparison · 5 years</h3>
          <p className="text-xs text-slate-500">Tokenized vs traditional real estate (% cumulative)</p>
          <ResponsiveContainer width="100%" height={300}>
            <RLineChart data={investorReturns}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
              <XAxis dataKey="y" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="tokenized" stroke={ROYAL} strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="traditional" stroke="#94a3b8" strokeWidth={2.5} strokeDasharray="6 6" dot={{ r: 3 }} />
            </RLineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}

function Security() {
  const risks = [
    "Smart contract hacks can drain investor funds",
    "Rental payouts can be manipulated",
    "Marketplace exploits & front-running",
    "Wallet & key management vulnerabilities",
    "Investor trust depends on audited security",
  ];
  const audits = [
    { i: Cpu, t: "Smart Contract Audit" },
    { i: ShieldCheck, t: "VAPT" },
    { i: KeyRound, t: "Wallet Security Testing" },
    { i: Network, t: "Infrastructure Security" },
    { i: BadgeCheck, t: "KYC/AML Compliance" },
  ];
  return (
    <section id="security" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Heading kicker="Section 09 · Security"
          title={<>Why a security audit is <span className="gradient-text">mandatory</span></>}
          subtitle="In Web3, one missed line of code can wipe out millions. Audits are not optional — they are the foundation of investor trust."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-square max-w-[440px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-[#0057FF]/10 blur-3xl" />
              <img src={shieldImg} alt="Security shield" width={1024} height={1024} loading="lazy" className="relative w-full h-full object-contain animate-float" />
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-3">
            {risks.map((r,i)=>(
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Lock className="h-5 w-5 text-rose-500 mt-0.5" />
                <p className="text-[#0B1F4D]">{r}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="mt-16 grid md:grid-cols-5 gap-4">
          {audits.map((a,i)=>(
            <div key={i} className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition">
              <a.i className="h-7 w-7 text-[#0057FF] mx-auto mb-3" />
              <div className="font-display font-semibold text-[#0B1F4D] text-sm">{a.t}</div>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl p-8 border border-rose-200 bg-rose-50/40">
            <div className="text-xs uppercase tracking-wider text-rose-600 font-semibold">Before audit</div>
            <div className="mt-2 font-display text-3xl font-bold text-rose-700">12% investor trust</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>· Hidden vulnerabilities</li>
              <li>· Low investor inflow</li>
              <li>· Regulatory uncertainty</li>
            </ul>
          </div>
          <div className="rounded-3xl p-8 glass-dark">
            <div className="text-xs uppercase tracking-wider text-white/70 font-semibold">After audit</div>
            <div className="mt-2 font-display text-3xl font-bold">96% investor trust</div>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>· Code verified by experts</li>
              <li>· Investor-grade reporting</li>
              <li>· Compliance & insurance ready</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AuditPricing() {
  const rows = [
    { c: "CertiK", s: "Audit Only", p: "$25,000 – $150,000" },
    { c: "Hacken", s: "Audit Only", p: "$15,000 – $80,000" },
    { c: "Bitdecentro", s: "Development + Audit", p: "Competitive Enterprise Pricing", hi: true },
  ];
  return (
    <section className="py-28 gradient-bg">
      <div className="mx-auto max-w-7xl px-6">
        <Heading kicker="Section 10 · Audit pricing"
          title={<>End-to-end security at <span className="gradient-text">global benchmarks</span></>}
          subtitle="Most firms only audit. Bitdecentro builds and audits — in-house, faster, at a fraction of the cost."
        />
        <motion.div {...fadeUp} className="mt-14 rounded-3xl border border-slate-200 overflow-hidden soft-shadow bg-white">
          <table className="w-full">
            <thead className="bg-[#0033A0] text-white text-sm">
              <tr><th className="text-left p-5">Company</th><th className="text-left p-5">Services</th><th className="text-right p-5">Pricing</th></tr>
            </thead>
            <tbody>
              {rows.map((r,i)=>(
                <tr key={i} className={r.hi?'bg-gradient-to-r from-[#0057FF]/10 to-[#4D8BFF]/10':''}>
                  <td className="p-5 font-display font-bold text-[#0B1F4D] text-lg">{r.c} {r.hi && <span className="ml-2 text-xs px-2 py-1 rounded-full bg-[#0057FF] text-white">Recommended</span>}</td>
                  <td className="p-5 text-slate-700">{r.s}</td>
                  <td className="p-5 text-right font-semibold text-[#0033A0]">{r.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {[
            { i: Cpu, t: "In-house blockchain security experts" },
            { i: Zap, t: "Faster turnaround" },
            { i: Banknote, t: "Lower pricing" },
            { i: ShieldCheck, t: "Development + Audit together" },
          ].map((x,i)=>(
            <motion.div key={i} {...fadeUp} transition={{ delay: i*0.05 }} className="glass rounded-2xl p-5">
              <x.i className="h-6 w-6 text-[#0057FF] mb-3" />
              <div className="font-medium text-[#0B1F4D]">{x.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Timeline() {
  const phases = [
    { w: "Week 1–2", t: "UI/UX Design", d: "Design system, wireframes, prototypes." },
    { w: "Week 3–5", t: "Backend Development", d: "APIs, KYC, fiat rails, infra." },
    { w: "Week 5–7", t: "Blockchain & Smart Contracts", d: "Token standard, SPV mapping, multi-sig." },
    { w: "Week 7–9", t: "Marketplace Development", d: "Listings, trading, escrow, dashboards." },
    { w: "Week 9–10", t: "Testing & QA", d: "Unit, integration & security testing." },
    { w: "Week 10–12", t: "Deployment", d: "Mainnet launch, monitoring, handover." },
  ];
  return (
    <section className="py-28 gradient-bg">
      <div className="mx-auto max-w-7xl px-6">
        <Heading kicker="Section 12 · Roadmap"
          title={<>12-week <span className="gradient-text">delivery timeline</span></>}
        />
        <div className="mt-14 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0057FF]/40 to-transparent hidden md:block" />
          <div className="space-y-6">
            {phases.map((p,i)=>(
              <motion.div key={i} {...fadeUp} transition={{ delay: i*0.06 }} className={`grid md:grid-cols-2 gap-6 items-center ${i%2?'md:[direction:rtl]':''}`}>
                <div className="md:[direction:ltr] glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2"><Calendar className="h-4 w-4 text-[#0057FF]" /><span className="text-xs font-semibold uppercase tracking-wider text-[#0057FF]">{p.w}</span></div>
                  <h3 className="font-display font-bold text-xl text-[#0B1F4D]">{p.t}</h3>
                  <p className="text-sm text-slate-600 mt-1">{p.d}</p>
                </div>
                <div className="hidden md:flex justify-center"><div className="h-12 w-12 rounded-full bg-[#0057FF] text-white flex items-center justify-center font-display font-bold soft-shadow">{i+1}</div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Future() {
  const items = [
    { i: Sparkles, t: "Agriculture Tokenization", d: "Tokenize farms, yields, and crops." },
    { i: Building2, t: "Hotel Tokenization", d: "Fractionalize hospitality assets." },
    { i: Network, t: "Commercial Property DAO", d: "Investor-governed CRE portfolios." },
    { i: BadgeCheck, t: "NFT Ownership Certificates", d: "Immutable title deeds on-chain." },
    { i: Cpu, t: "AI Property Valuation", d: "Realtime valuation models." },
    { i: Globe2, t: "Metaverse Property Showcase", d: "VR walkthroughs for global buyers." },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Heading kicker="Section 13 · Future"
          title={<>Beyond real estate · <span className="gradient-text">a tokenization ecosystem</span></>}
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((x,i)=>(
            <motion.div key={i} {...fadeUp} transition={{ delay: i*0.04 }}
              className="group p-6 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#F4F8FF] hover:-translate-y-1 transition soft-shadow">
              <div className="h-12 w-12 rounded-xl bg-[#0057FF] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition"><x.i className="h-5 w-5" /></div>
              <h3 className="font-display font-semibold text-lg text-[#0B1F4D]">{x.t}</h3>
              <p className="text-sm text-slate-600 mt-1.5">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBitdecentro() {
  const stats = [
    { v: 100, suffix: "+", l: "Blockchain Solutions" },
    { v: 50, suffix: "+", l: "Web3 Experts" },
    { v: 25, suffix: "+", l: "Security Architects" },
    { v: 12, suffix: "+", l: "Enterprise Clients" },
  ];
  const bullets = [
    { i: Network, t: "Deep blockchain expertise" },
    { i: Layers, t: "End-to-end Web3 ecosystem development" },
    { i: Cpu, t: "Smart contract specialists" },
    { i: ShieldCheck, t: "In-house security & audit team" },
    { i: Sparkles, t: "AI + Blockchain integration" },
    { i: Globe2, t: "Global project delivery capability" },
    { i: Rocket, t: "Enterprise-grade architecture" },
  ];
  return (
    <section className="py-28 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <SectionLabel>Section 14 · Why Bitdecentro</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold text-[#0B1F4D] leading-tight">
            The partner serious <span className="gradient-text">Web3 projects</span> trust
          </h2>
          <p className="mt-4 text-slate-600 text-lg">From smart-contract architecture to AI-driven valuation, Bitdecentro is a full-stack blockchain product studio.</p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bullets.map((b,i)=>(
              <li key={i} className="flex items-center gap-3 glass rounded-xl p-3.5">
                <div className="h-9 w-9 rounded-lg bg-[#0057FF] text-white flex items-center justify-center"><b.i className="h-4 w-4" /></div>
                <span className="text-sm font-medium text-[#0B1F4D]">{b.t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp} className="grid grid-cols-2 gap-5">
          {stats.map((s,i)=>(
            <div key={i} className={`rounded-3xl p-8 ${i%3===0?'glass-dark':'glass'}`}>
              <div className={`font-display text-5xl font-bold ${i%3===0?'text-white':'text-[#0033A0]'}`}>
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <div className={`mt-2 text-sm ${i%3===0?'text-white/80':'text-slate-600'}`}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden">
      <img src={hero} alt="Skyline" width={1920} height={1280} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0033A0]/90 via-[#0057FF]/85 to-[#0B1F4D]/95" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <motion.div {...fadeUp}>
          <SectionLabel>Section 15 · Let's build</SectionLabel>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Transform real estate into a <span className="bg-gradient-to-r from-white to-[#B4CDFF] bg-clip-text text-transparent">global digital investment ecosystem</span>
          </h2>
          <p className="mt-6 text-white/85 text-lg max-w-2xl mx-auto">
            Partner with Bitdecentro to launch a regulated, audit-ready tokenization platform for Georgia and global investors.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="https://bitdecentro.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0057FF] px-7 py-4 font-semibold soft-shadow hover:-translate-y-0.5 transition">
              Start Tokenization <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://bitdecentro.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/40 backdrop-blur px-7 py-4 font-semibold hover:bg-white/10 transition">
              Schedule Consultation
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 text-white/70 text-xs">
            <ShieldCheck className="h-4 w-4" /> Investor-grade · Audit-ready · Regulation-friendly
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Bitdecentro" className="h-7" />
          <span className="text-xs text-slate-500">Powered by Bitdecentro · <a href="https://bitdecentro.com" className="text-[#0057FF] font-medium" target="_blank" rel="noreferrer">bitdecentro.com</a></span>
        </div>
        <div className="text-xs text-slate-500">© {new Date().getFullYear()} Bitdecentro — Real Estate Tokenization Platform. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function Presentation() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <BuyModule />
        <SellModule />
        <RentalModule />
        <Revenue />
        <InvestorEarnings />
        <Security />
        <AuditPricing />
        <Timeline />
        <Future />
        <WhyBitdecentro />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}