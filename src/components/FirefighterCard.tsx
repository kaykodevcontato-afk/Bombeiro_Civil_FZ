import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Shield } from "lucide-react";
import React, { useState, useRef, MouseEvent } from "react";

interface FirefighterProps {
  title?: string;
  name: string;
  status: string;
  currentLocation: string;
  hometown: string;
  bloodType: string;
  allergies: string;
  skills: string[];
  redImageUrl: string;
  greyImageUrl: string;
  blackImageUrl: string;
  key?: React.Key;
}

export default function FirefighterCard({ 
  title = "Bombeiro", 
  name, 
  status, 
  currentLocation, 
  hometown, 
  bloodType,
  allergies,
  skills, 
  redImageUrl, 
  greyImageUrl, 
  blackImageUrl 
}: FirefighterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });

  // Fallbacks for testing if user images are empty/missing
  const fbRed = "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop";
  const fbGrey = "https://images.unsplash.com/photo-1516567837740-f47ecfd96025?q=80&w=2071&auto=format&fit=crop";
  const fbBlack = "https://images.unsplash.com/photo-1621539266395-5ac838a68894?q=80&w=2071&auto=format&fit=crop";

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    mouseX.set(x);
  };

  // Improved 3-stage interaction:
  // 1. x: 0 -> 0.45 (Red transitioning to Grey)
  // 2. x: 0.45 -> 0.55 (Full Grey)
  // 3. x: 0.55 -> 1 (Grey transitioning to Black)
  
  const greyReveal = useTransform(springX, [0, 0.45, 0.55, 1], [0, 100, 100, 100]);
  const blackReveal = useTransform(springX, [0, 0.45, 0.55, 1], [0, 0, 0, 100]);

  // The slider line position resets for each transition to look like a new reveal
  const linePos = useTransform(springX, [0, 0.45, 0.55, 1], [0, 100, 0, 100]);
  
  // Fade out line at center (Cinza zone) and boundaries
  const lineOpacity = useTransform(springX, 
    [0, 0.03, 0.42, 0.45, 0.55, 0.58, 0.97, 1], 
    [0, 1, 1, 0, 0, 1, 1, 0]
  );

  // Labels opacity based on zones
  const redLabelAlpha = useTransform(springX, [0, 0.1, 0.35], [1, 1, 0]);
  const greyLabelAlpha = useTransform(springX, [0.3, 0.5, 0.7], [0, 1, 0]);
  const blackLabelAlpha = useTransform(springX, [0.65, 0.9, 1], [0, 1, 1]);

  const fallbackImg = "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop";

  const [registrationId] = useState(() => 1000 + Math.floor(Math.random() * 9000));

  return (
    <div id={`profile-${name.toLowerCase().replace(/\s/g, '-')}`} className="group relative bg-[#151619] border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 transition-all hover:border-red-600/50">
      {/* Interactive Image Container */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => mouseX.set(0.5)}
        className="relative w-full md:w-72 aspect-[3/4] rounded-lg overflow-hidden cursor-crosshair shadow-2xl bg-black"
      >
        {/* Layer 1: Red (Bottom) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={redImageUrl} 
            onError={(e) => (e.currentTarget.src = fallbackImg)}
            alt={`${name} - Vermelho`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Layer 2: Grey (Revealed from Left) */}
        <motion.div 
          className="absolute inset-0 z-10" 
          style={{ clipPath: useTransform(greyReveal, (v) => `inset(0 ${100 - v}% 0 0)`) }}
        >
          <img 
            src={greyImageUrl} 
            onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1516567837740-f47ecfd96025?q=80&w=2071&auto=format&fit=crop")}
            alt={`${name} - Cinza`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Layer 3: Black (Revealed from Left after Grey) */}
        <motion.div 
          className="absolute inset-0 z-20" 
          style={{ clipPath: useTransform(blackReveal, (v) => `inset(0 ${100 - v}% 0 0)`) }}
        >
          <img 
            src={blackImageUrl} 
            onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1621539266395-5ac838a68894?q=80&w=2071&auto=format&fit=crop")}
            alt={`${name} - Preto`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Zone Labels */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between z-30 pointer-events-none">
          <motion.div style={{ opacity: redLabelAlpha }} className="bg-red-600 px-3 py-1.5 rounded-lg text-xs font-black text-white uppercase tracking-widest shadow-xl">Vermelho</motion.div>
          <motion.div style={{ opacity: greyLabelAlpha }} className="bg-gray-500 px-3 py-1.5 rounded-lg text-xs font-black text-white uppercase tracking-widest shadow-xl">Cinza</motion.div>
          <motion.div style={{ opacity: blackLabelAlpha }} className="bg-white px-3 py-1.5 rounded-lg text-xs font-black text-black uppercase tracking-widest shadow-xl">Preto</motion.div>
        </div>

        {/* Divider Slider Line */}
        <motion.div 
          className="absolute inset-y-0 w-1 bg-white/80 z-40 pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          style={{ 
            left: useTransform(linePos, (v) => `${v}%`),
            opacity: lineOpacity
          }}
        />
      </div>

      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        <div>
          <h3 className="text-3xl font-bold text-white mb-1 uppercase tracking-tighter">{title} {name}</h3>
          <p className="text-red-500 font-mono text-sm tracking-[0.2em]">NOME DE GUERRA: {name.toUpperCase()}</p>
        </div>

        <div className="h-px bg-white/10 w-full" />

        <div>
          <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-3">Habilidades & Especialidades</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 hover:text-red-400 transition-colors">
                <Shield className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/5 bg-white/5 rounded-lg px-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase font-mono mb-1">Tipo Sanguíneo</span>
            <span className="text-sm font-black text-red-500 tracking-tighter">{bloodType}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase font-mono mb-1">Alergias</span>
            <span className="text-xs font-bold text-white/70 truncate" title={allergies}>{allergies}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-wrap gap-4 md:gap-8">
            <div className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase font-mono mb-1">Status</span>
                <span className={`text-xs font-bold flex items-center gap-1.5 px-2 py-1 rounded-md ${
                  status === "EM OPERAÇÃO" 
                    ? "text-green-500 bg-green-500/10" 
                    : "text-white/40 bg-white/5"
                }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      status === "EM OPERAÇÃO" ? "bg-green-500 animate-pulse" : "bg-white/20"
                    }`} />
                    {status}
                </span>
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase font-mono mb-1">Operação</span>
                <span className="text-xs text-white/80 font-medium">{currentLocation}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase font-mono mb-1">Origem</span>
                <span className="text-xs text-white/80 font-medium">{hometown}</span>
            </div>
            <div className="flex flex-col md:ml-auto">
                <span className="text-[10px] text-white/30 uppercase font-mono mb-1">ID Registro</span>
                <span className="text-xs text-white/50 font-mono">BC-{registrationId}</span>
            </div>
        </div>
      </div>
    </div>
  );
}
