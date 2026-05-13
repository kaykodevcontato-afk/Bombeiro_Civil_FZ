import { Shield, Flame, HeartPulse, HardHat, Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, Menu, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import FirefighterCard from "./components/FirefighterCard";

const services = [
  {
    title: "Prevenção de Incêndios",
    desc: "Vistorias técnicas, elaboração de planos de evacuação e manutenção de equipamentos de combate.",
    icon: Flame
  },
  {
    title: "Primeiros Socorros",
    desc: "Atendimento pré-hospitalar emergencial em ambientes industriais, comerciais e eventos.",
    icon: HeartPulse
  },
  {
    title: "Segurança em Eventos",
    desc: "Equipe especializada para garantir a integridade física de participantes em shows e feiras.",
    icon: Shield
  },
  {
    title: "Resgate e Salvamento",
    desc: "Técnicas avançadas de resgate em altura, espaços confinados e situações de risco crítico.",
    icon: HardHat
  }
];

const team = [
  {
    title: "Bombeiro Civil",
    name: "Santos",
    status: "EM OPERAÇÃO",
    currentLocation: "Pedra PE",
    hometown: "Arcoverde PE",
    bloodType: "A+",
    allergies: "Nenhuma",
    skills: [
      "Atendimento Pré-Hospitalar (APH) Avançado",
      "Combate a Incêndio e Pânico",
      "Resgate Vertical e Trabalho em Altura",
      "Gestão de Crises e Contingência",
      "Suporte Tático: Iluminação e Sinalização",
      "Operações de Mata: Equipamentos Táticos"
    ],
    redImageUrl: "/images/BCvermelhomasculino.jpg",
    greyImageUrl: "/images/BCcinzamasculino.jpg",
    blackImageUrl: "/images/BCpretomasculino.jpg"
  },
  {
    title: "Bombeira Civil",
    name: "Laura",
    status: "EM OPERAÇÃO",
    currentLocation: "Arcoverde PE",
    hometown: "Arcoverde PE",
    bloodType: "O+",
    allergies: "Nenhuma",
    skills: [
      "Suporte Básico de Vida e Primeiros Socorros",
      "Prevenção e Brigada em Áreas Industriais",
      "Sobrevivência e Tática em Mata Fechada",
      "Salvamento Aquático e Resgate em Altura",
      "Instrutora de Segurança do Trabalho (NR23)"
    ],
    redImageUrl: "/images/BCvermelhofeminino.jpg",
    greyImageUrl: "/images/BCcinzafeminino.jpg",
    blackImageUrl: "/images/BCpretofeminino.jpg"
  },
  {
    title: "Bombeiro Civil",
    name: "Oliveira",
    status: "DISPONÍVEL",
    currentLocation: "-",
    hometown: "Sertânia PE",
    bloodType: "B-",
    allergies: "Dipirona",
    skills: [
      "Suporte Básico de Vida",
      "Brigadista de Incêndio Industrial",
      "Prevenção de Pânico",
      "Primeiros Socorros em Eventos",
      "Monitoramento de Riscos"
    ],
    redImageUrl: "/images/BCvermelhomasculino.jpg",
    greyImageUrl: "/images/BCcinzamasculino.jpg",
    blackImageUrl: "/images/BCpretomasculino.jpg"
  },
  {
    title: "Bombeiro Civil",
    name: "Messias",
    status: "DISPONÍVEL",
    currentLocation: "-",
    hometown: "Pedra PE",
    bloodType: "AB+",
    allergies: "Nenhuma",
    skills: [
      "Atendimento Pré-Hospitalar",
      "Combate a Incêndio Urbano",
      "Salvamento em Altura",
      "Prevenção de Riscos",
      "Primeiros Socorros"
    ],
    redImageUrl: "/images/BCvermelhomasculino.jpg",
    greyImageUrl: "/images/BCcinzamasculino.jpg",
    blackImageUrl: "/images/BCpretomasculino.jpg"
  }
];

const plans = [
  {
    name: "Plano Básico",
    price: "R$ 449",
    desc: "Para pequenos estabelecimentos e rotinas de baixa complexidade.",
    features: [
      "Atendimento em emergências",
      "Cobertura em horário comercial com rondas preventivas",
      "Checklist de equipamentos",
      "Orientações preventivas"
    ],
    highlight: false
  },
  {
    name: "Plano Standard",
    price: "R$ 890",
    desc: "Equilíbrio ideal entre suporte operacional e conformidade técnica.",
    features: [
      "Atendimento em emergências",
      "Cobertura em horário comercial com rondas preventivas",
      "Checklist de equipamentos",
      "Relatório Trimestral de segurança",
      "Treinamento básico semestral de primeiros Socorros"
    ],
    highlight: true
  },
  {
    name: "Plano Premium",
    price: "Sob consulta",
    desc: "Segurança total com monitoramento constante e treinamentos avançados.",
    features: [
      "Atendimento prioritário",
      "Checklist de equipamentos",
      "Cobertura operacional contínua em horário comercial",
      "Manutenção preventiva",
      "Consultoria sobre documentação obrigatória",
      "Plano de evacuação personalizado",
      "Relatórios mensais de segurança",
      "Treinamento semestral de brigada e APH"
    ],
    highlight: false
  }
];

const avulsoShifts = [
  {
    title: "Eventos",
    desc: "Segurança especializada para feiras, congressos e encontros corporativos."
  },
  {
    title: "Shows",
    desc: "Gestão tática de multidões e controle de acesso para grandes apresentações."
  },
  {
    title: "Igrejas",
    desc: "Proteção preventiva em cultos, celebrações e eventos religiosos especiais."
  },
  {
    title: "Inaugurações de Empresas ou Lojas",
    desc: "Vigilância intensiva em aberturas com alta circulação inicial de público."
  }
];

const avulsoPricing = [
  { hours: "4h", price: "R$ 180" },
  { hours: "8h", price: "R$ 300" },
  { hours: "12h", price: "R$ 450" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0B0D]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter uppercase italic">Bombeiro Civil</span>
                <span className="text-[10px] font-mono text-red-500 tracking-[0.3em] uppercase">Especializado</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/60">
              <a href="#hero" className="hover:text-red-500 transition-colors">Início</a>
              <a href="#services" className="hover:text-red-500 transition-colors">Serviços</a>
              <a href="#team" className="hover:text-red-500 transition-colors">Equipe</a>
              <a href="#plans" className="hover:text-red-500 transition-colors">Planos</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">Contato</a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95">
                Emergência
              </button>
            </div>

            {/* Mobile Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[120px] -z-10 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-500/20 text-red-400 text-[10px] font-mono uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Prevenção • Proteção • Salvamento
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
              Segurança <br /> <span className="text-red-600">Proativa.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Mais que apagar incêndios, nossa missão é prevenir riscos e salvar vidas com treinamento tático e equipamentos de última geração.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-white text-black px-8 py-4 rounded-xl font-bold transition-all hover:bg-red-600 hover:text-white flex items-center gap-2">
                Conhecer Serviços
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all">
                Falar com Consultor
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden grayscale contrast-125 border border-white/5 shadow-2xl">
              <img 
                src="/images/serviço01.jpg" 
                onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop")}
                alt="Segurança Proativa - Serviço 01" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-[#151619] rounded-2xl border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-red-600 tracking-tighter">+500</span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-tight">Vidas <br/> Protegidas</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white tracking-tighter">24/7</span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-tight">Suporte <br/> Operacional</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0A0B0D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-red-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">O que fazemos</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Soluções em Segurança</h2>
            <p className="max-w-2xl mt-4 text-white/40 text-sm uppercase tracking-widest font-mono">
              Serviços especializados para eventos de grande e médio porte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-[#151619] rounded-2xl border border-white/5 hover:border-red-600/30 transition-all group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all text-red-600">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#0F1012] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-red-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Nossa Equipe</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Especialistas Táticos</h2>
            </div>
            <p className="max-w-md text-white/40 text-sm font-mono uppercase tracking-wider bg-white/5 p-4 border-l-2 border-red-600">
              Deslize o mouse sobre a foto para visualizar os uniformes operacionais (Vermelho, Cinza, Preto).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {team.map((member, i) => (
              <FirefighterCard 
                key={i} 
                title={member.title} 
                name={member.name} 
                status={member.status}
                currentLocation={member.currentLocation}
                hometown={member.hometown}
                bloodType={member.bloodType}
                allergies={member.allergies}
                skills={member.skills} 
                redImageUrl={member.redImageUrl} 
                greyImageUrl={member.greyImageUrl} 
                blackImageUrl={member.blackImageUrl} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 bg-[#0A0B0D] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] -z-10 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-red-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Planos Mensais</h2>
            <p className="max-w-2xl mt-4 text-white/40 text-sm uppercase tracking-widest font-mono">
              Segurança contínua para sua empresa ou patrimônio.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border ${plan.highlight ? 'bg-[#1a1b1e] border-red-600/50 scale-105 shadow-2xl z-10' : 'bg-[#151619] border-white/5'} flex flex-col`}
              >
                {plan.highlight && (
                  <div className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">Recomendado</div>
                )}
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-black tracking-tight">{plan.price}</span>
                  {plan.price !== "Sob consulta" && <span className="text-white/40 text-xs font-mono uppercase">/mês</span>}
                </div>
                <p className="text-white/40 text-sm mb-8 leading-relaxed">{plan.desc}</p>
                
                <div className="flex-1 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-red-500' : 'text-white/20'}`} />
                      <span className="text-sm text-white/70 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-10 py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/10' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                  Consultar Valor
                </button>
              </motion.div>
            ))}
          </div>

          {/* Plantão Avulso Highlight */}
          <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-red-600 to-red-900 rounded-[2rem] relative overflow-hidden group">
            <Shield className="absolute -bottom-10 -right-10 w-64 h-64 text-black/10 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Plantão <br /> <span className="text-white/80">Avulso.</span></h2>
                <p className="text-white/80 text-sm font-medium mb-10 max-w-sm">Atendimento flexível para necessidades pontuais, garantindo segurança técnica em eventos de qualquer natureza.</p>
                
                <div className="flex flex-wrap gap-4">
                  {avulsoPricing.map((item, i) => (
                    <div key={i} className="bg-black/30 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/10 flex flex-col items-center min-w-[100px]">
                      <span className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">{item.hours}</span>
                      <span className="text-xl font-black text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid gap-4">
                {avulsoShifts.map((shift, i) => (
                  <div key={i} className="flex gap-4 items-start bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/10 group/item hover:bg-black/30 transition-colors">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">{shift.title}</span>
                      <p className="text-[10px] text-white/50 leading-tight font-medium">{shift.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0A0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">Vamos Conversar?</h2>
              <p className="text-white/50 mb-12 max-w-md">Para urgências ou orçamentos preventivos, nossa central está disponível 24 horas por dia.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-[#151619] rounded-2xl border border-white/5">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase">Central 24h</p>
                    <p className="text-xl font-bold">(11) 99999-0193</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#151619] rounded-2xl border border-white/5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase">E-mail</p>
                    <p className="text-xl font-bold">contato@bombeirocivil.pro</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-[#151619] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">Nome Completo</label>
                  <input type="text" className="w-full bg-[#0A0B0D] border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-red-600 outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">WhatsApp</label>
                  <input type="tel" className="w-full bg-[#0A0B0D] border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-red-600 outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">Serviço de Interesse</label>
                <select className="w-full bg-[#0A0B0D] border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-red-600 outline-none transition-all">
                  <option>Selecione um serviço</option>
                  <option>Segurança em Eventos</option>
                  <option>Prevenção Industrial</option>
                  <option>Treinamento de Brigada</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-1">Mensagem/Detalhes</label>
                <textarea className="w-full bg-[#0A0B0D] border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-red-600 outline-none transition-all h-32 resize-none" placeholder="Conte-nos sobre sua necessidade"></textarea>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-600/10 flex items-center justify-center gap-2">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050607] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50 grayscale">
            <Shield className="w-6 h-6" />
            <span className="text-sm font-bold uppercase tracking-tighter">Bombeiro Civil Pro © 2026</span>
          </div>
          <div className="flex gap-6 text-white/40 text-[10px] font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Licenciamento</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
