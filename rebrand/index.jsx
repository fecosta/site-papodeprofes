import { useState } from "react";

const brandColors = {
  old: [
    { hex: "#F57C42", name: "Laranja Intenso" },
    { hex: "#FF726E", name: "Coral Vivo" },
    { hex: "#FBFF87", name: "Amarelo Neon" },
    { hex: "#438fcc", name: "Azul Médio" },
    { hex: "#ac127a", name: "Magenta Forte" },
  ],
  new: {
    primary: [
      { hex: "#6C5CE7", name: "Violeta Digital", role: "Cor principal da marca" },
      { hex: "#A29BFE", name: "Lavanda", role: "Hover, destaques" },
      { hex: "#ECEAFF", name: "Lavanda Clara", role: "Fundos suaves" },
    ],
    secondary: [
      { hex: "#FF7675", name: "Coral Soft", role: "CTAs e destaques" },
      { hex: "#FFB8B8", name: "Rosa Claro", role: "Badges e alertas" },
      { hex: "#FFF0F0", name: "Blush", role: "Fundos quentes" },
    ],
    support: [
      { hex: "#00B894", name: "Menta", role: "Sucesso e progresso" },
      { hex: "#0984E3", name: "Azul Vivo", role: "Links informativos" },
      { hex: "#FDCB6E", name: "Amarelo Suave", role: "Avisos e badges" },
    ],
    neutral: [
      { hex: "#1A1A2E", name: "Navy Escuro", role: "Texto principal" },
      { hex: "#636E83", name: "Slate", role: "Corpo de texto" },
      { hex: "#F8F9FC", name: "Ghost White", role: "Fundo geral" },
      { hex: "#FFFFFF", name: "Branco", role: "Cards e superfícies" },
    ],
  },
};

function ColorSwatch({ hex, name, role }) {
  const lum = parseInt(hex.slice(1, 3), 16) * 0.299 + parseInt(hex.slice(3, 5), 16) * 0.587 + parseInt(hex.slice(5, 7), 16) * 0.114;
  const isDark = lum < 140;
  const needsBorder = lum > 230;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 64 }}>
      <div style={{
        width: 64, height: 64, borderRadius: 12, background: hex,
        border: needsBorder ? "1px solid #E2E4EA" : "none",
        display: "flex", alignItems: "flex-end", padding: 6,
      }}>
        <span style={{ fontSize: 9, color: isDark ? "#fff" : "#444", opacity: 0.85, fontFamily: "monospace" }}>{hex}</span>
      </div>
      <span style={{ fontSize: 11, fontWeight: 600, color: "#1A1A2E" }}>{name}</span>
      {role && <span style={{ fontSize: 10, color: "#636E83" }}>{role}</span>}
    </div>
  );
}

function OwlLogo({ palette = "new", scale = 1 }) {
  const c = palette === "new"
    ? { body: "#6C5CE7", belly: "#A29BFE", bellyInner: "#ECEAFF", eye: "#FFFFFF", pupil: "#1A1A2E", highlight: "#fff", beak: "#FDCB6E", feet: "#FDCB6E", wing: "#5541D6", ear: "#5541D6" }
    : { body: "#8B4513", belly: "#CD853F", bellyInner: "#DEB887", eye: "#FFFFFF", pupil: "#000000", highlight: "#fff", beak: "#F0C040", feet: "#F0C040", wing: "#6B3410", ear: "#6B3410" };
  return (
    <svg width={120 * scale} height={130 * scale} viewBox="0 0 120 130" fill="none">
      <defs>
        {palette === "new" && <linearGradient id={`bg${scale}`} x1="60" y1="20" x2="60" y2="125" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#7C6EF0"/><stop offset="100%" stopColor="#5541D6"/></linearGradient>}
      </defs>
      <path d="M15 45 Q5 18 30 33 Q35 22 45 40" fill={c.ear}/>
      <path d="M105 45 Q115 18 90 33 Q85 22 75 40" fill={c.ear}/>
      <ellipse cx="60" cy="75" rx="45" ry="48" fill={palette === "new" ? `url(#bg${scale})` : c.body}/>
      <ellipse cx="60" cy="82" rx="33" ry="37" fill={c.belly}/>
      <ellipse cx="60" cy="85" rx="24" ry="28" fill={c.bellyInner} opacity="0.5"/>
      <circle cx="42" cy="62" r="18" fill={c.eye}/><circle cx="42" cy="63" r="11" fill={c.pupil}/><circle cx="45" cy="59" r="3.5" fill={c.highlight}/><circle cx="39" cy="66" r="1.5" fill={c.highlight} opacity="0.5"/>
      <circle cx="78" cy="62" r="18" fill={c.eye}/><circle cx="78" cy="63" r="11" fill={c.pupil}/><circle cx="81" cy="59" r="3.5" fill={c.highlight}/><circle cx="75" cy="66" r="1.5" fill={c.highlight} opacity="0.5"/>
      <path d="M55 76 L60 85 L65 76 Z" fill={c.beak}/>
      <path d="M40 120 Q35 128 30 124 Q35 130 40 126 Q42 130 46 124 Q42 128 40 120" fill={c.feet}/>
      <path d="M80 120 Q75 128 70 124 Q75 130 80 126 Q82 130 86 124 Q82 128 80 120" fill={c.feet}/>
      {palette === "new" && <ellipse cx="60" cy="82" rx="20" ry="12" fill="#A29BFE" opacity="0.15"/>}
    </svg>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2.5, color: "#6C5CE7", fontWeight: 700, marginBottom: 20 }}>{title}</h2>
      {children}
    </div>
  );
}

function WebPreview() {
  return (
    <div style={{ background: "#F8F9FC", borderRadius: 16, overflow: "hidden", border: "1px solid #E2E4EA", boxShadow: "0 4px 24px rgba(108,92,231,0.06)" }}>
      <div style={{ background: "#ECEAFF", padding: "8px 14px", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF7675" }}/>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FDCB6E" }}/>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00B894" }}/>
        <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 10, color: "#636E83", marginLeft: 8 }}>papodeprofes.com.br</div>
      </div>
      <div style={{ background: "#FFFFFF", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E4EA" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <OwlLogo scale={0.25}/>
          <span style={{ fontWeight: 700, fontSize: 13, color: "#1A1A2E" }}>Papo de Profes</span>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 11, color: "#636E83", alignItems: "center" }}>
          <span>Cursos</span><span>Mentorias</span><span>Materiais PLE</span><span>Blog</span>
          <span style={{ background: "#6C5CE7", color: "#fff", padding: "6px 16px", borderRadius: 8, fontWeight: 600, fontSize: 11 }}>Acessar plataforma</span>
        </div>
      </div>
      <div style={{ padding: "36px 24px 28px", textAlign: "center", background: "linear-gradient(180deg, #F8F9FC 0%, #ECEAFF40 100%)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ECEAFF", padding: "5px 14px", borderRadius: 20, fontSize: 11, color: "#6C5CE7", fontWeight: 600, marginBottom: 14 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B894", display: "inline-block" }}/>
          +1.500 alunas na plataforma
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1A1A2E", lineHeight: 1.3, marginBottom: 10 }}>
          Sua plataforma completa<br/>para ensinar PLE online
        </h1>
        <p style={{ fontSize: 12, color: "#636E83", maxWidth: 380, margin: "0 auto 20px", lineHeight: 1.6 }}>
          Cursos, mentorias e materiais didáticos digitais para professoras que querem transformar seu ensino em um negócio digital.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <div style={{ background: "#6C5CE7", color: "#fff", padding: "10px 22px", borderRadius: 10, fontSize: 12, fontWeight: 600, boxShadow: "0 2px 12px rgba(108,92,231,0.25)" }}>Começar agora</div>
          <div style={{ background: "#fff", color: "#6C5CE7", padding: "10px 22px", borderRadius: 10, fontSize: 12, fontWeight: 600, border: "1px solid #ECEAFF" }}>Ver cursos</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "#E2E4EA", margin: "0 24px", borderRadius: 12, overflow: "hidden" }}>
        {[{ num: "1.500+", label: "Alunas" }, { num: "40+", label: "Cursos" }, { num: "200+", label: "Materiais PLE" }].map((s, i) => (
          <div key={i} style={{ background: "#fff", padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#6C5CE7" }}>{s.num}</div>
            <div style={{ fontSize: 10, color: "#636E83", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "20px 24px 28px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { icon: "🎓", title: "Cursos Online", desc: "Metodologias e ensino digital", color: "#6C5CE7", bg: "#ECEAFF" },
          { icon: "🚀", title: "Mentorias", desc: "Para profes empreendedoras", color: "#FF7675", bg: "#FFF0F0" },
          { icon: "📱", title: "Materiais PLE", desc: "Plataforma digital completa", color: "#0984E3", bg: "#E8F4FD" },
        ].map((item, i) => (
          <div key={i} style={{ background: "#FFFFFF", padding: 14, borderRadius: 12, border: "1px solid #E2E4EA" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, marginBottom: 10 }}>{item.icon}</div>
            <h3 style={{ fontSize: 12, fontWeight: 700, color: "#1A1A2E", margin: "0 0 4px" }}>{item.title}</h3>
            <p style={{ fontSize: 10, color: "#636E83", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographyPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ padding: "20px 24px", background: "#FFFFFF", borderRadius: 12, border: "1px solid #E2E4EA" }}>
        <span style={{ fontSize: 10, color: "#A29BFE", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>Títulos</span>
        <p style={{ fontSize: 28, fontWeight: 700, color: "#1A1A2E", margin: "8px 0 0" }}>Plus Jakarta Sans</p>
        <p style={{ fontSize: 16, fontWeight: 500, color: "#636E83", margin: "4px 0 0" }}>Geométrica, moderna, digital</p>
      </div>
      <div style={{ padding: "20px 24px", background: "#FFFFFF", borderRadius: 12, border: "1px solid #E2E4EA" }}>
        <span style={{ fontSize: 10, color: "#A29BFE", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>Corpo</span>
        <p style={{ fontSize: 15, color: "#1A1A2E", lineHeight: 1.7, margin: "8px 0 0" }}>Inter — otimizada para telas, excelente legibilidade em textos longos. Ideal para descrições de cursos, módulos e conteúdo da plataforma.</p>
      </div>
      <div style={{ padding: "16px 24px", background: "#ECEAFF", borderRadius: 12 }}>
        <span style={{ fontSize: 10, color: "#6C5CE7", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>UI / Plataforma</span>
        <p style={{ fontSize: 14, color: "#5541D6", lineHeight: 1.6, margin: "8px 0 0", fontFamily: "monospace" }}>JetBrains Mono para dados, progresso e elementos técnicos</p>
      </div>
    </div>
  );
}

export default function BrandGuide() {
  const [activeTab, setActiveTab] = useState("visao");
  const tabs = [
    { id: "visao", label: "Visão Geral" },
    { id: "cores", label: "Paleta" },
    { id: "logo", label: "Logo" },
    { id: "site", label: "Preview Site" },
    { id: "tipo", label: "Tipografia" },
  ];

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "32px 16px", color: "#1A1A2E" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ECEAFF", padding: "5px 18px", borderRadius: 20, fontSize: 11, color: "#6C5CE7", fontWeight: 700, marginBottom: 16, letterSpacing: 0.5 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L7.5 4.5L11 5.5L8.5 8L9 11.5L6 10L3 11.5L3.5 8L1 5.5L4.5 4.5L6 1Z" fill="#6C5CE7"/></svg>
          Proposta de renovação v2
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, margin: "0 0 8px" }}>Papo de Profes</h1>
        <p style={{ fontSize: 15, color: "#636E83", margin: 0 }}>Identidade digital — moderna, vibrante e tech-friendly</p>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 32, background: "#F8F9FC", padding: 4, borderRadius: 12, border: "1px solid #E2E4EA", overflow: "auto" }}>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            flex: 1, padding: "10px 8px", borderRadius: 8, border: "none",
            background: activeTab === tab.id ? "#6C5CE7" : "transparent",
            color: activeTab === tab.id ? "#FFFFFF" : "#636E83",
            fontWeight: activeTab === tab.id ? 700 : 400,
            fontSize: 12, cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
          }}>{tab.label}</button>
        ))}
      </div>

      {activeTab === "visao" && (
        <div>
          <Section title="Conceito">
            <p style={{ fontSize: 14, color: "#636E83", lineHeight: 1.8, margin: "0 0 16px" }}>
              A nova identidade da <strong style={{ color: "#1A1A2E" }}>Papo de Profes</strong> comunica <strong style={{ color: "#6C5CE7" }}>plataforma digital</strong>. O violeta como cor principal transmite inovação e criatividade — é a cor das principais plataformas de educação online. O coral soft traz calor humano sem perder a modernidade, e o menta marca progresso e conquistas.
            </p>
            <p style={{ fontSize: 14, color: "#636E83", lineHeight: 1.8, margin: 0 }}>
              Tudo com saturação controlada: vibrante o suficiente para engajar, suave o suficiente para não cansar. Perfeito para uma plataforma onde alunas passam horas estudando.
            </p>
          </Section>

          <Section title="Antes → Depois">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ padding: 20, background: "#FFFFFF", borderRadius: 14, border: "1px solid #E2E4EA", textAlign: "center" }}>
                <span style={{ fontSize: 10, color: "#636E83", textTransform: "uppercase", letterSpacing: 1.5 }}>Atual</span>
                <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "14px 0" }}>
                  {brandColors.old.map((c, i) => <div key={i} style={{ width: 32, height: 32, borderRadius: 8, background: c.hex }}/>)}
                </div>
                <span style={{ fontSize: 11, color: "#636E83" }}>Intenso, saturado</span>
              </div>
              <div style={{ padding: 20, background: "#FFFFFF", borderRadius: 14, border: "2px solid #A29BFE", textAlign: "center" }}>
                <span style={{ fontSize: 10, color: "#6C5CE7", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>Proposta</span>
                <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "14px 0" }}>
                  {[brandColors.new.primary[0], brandColors.new.primary[1], brandColors.new.secondary[0], brandColors.new.support[0], brandColors.new.support[1]].map((c, i) => (
                    <div key={i} style={{ width: 32, height: 32, borderRadius: 8, background: c.hex }}/>
                  ))}
                </div>
                <span style={{ fontSize: 11, color: "#636E83" }}>Digital, moderno, plataforma</span>
              </div>
            </div>
          </Section>

          <Section title="DNA da marca digital">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {[
                { emoji: "💻", title: "Digital First", desc: "Cores de tela, não de impressão", bg: "#ECEAFF", accent: "#6C5CE7" },
                { emoji: "🦉", title: "Sabedoria Acessível", desc: "A coruja como guia digital", bg: "#FFF0F0", accent: "#FF7675" },
                { emoji: "⚡", title: "Plataforma", desc: "Experiência tech + humana", bg: "#E8FFF5", accent: "#00B894" },
              ].map((p, i) => (
                <div key={i} style={{ padding: 16, background: p.bg, borderRadius: 12, textAlign: "center" }}>
                  <span style={{ fontSize: 24 }}>{p.emoji}</span>
                  <h3 style={{ fontSize: 13, fontWeight: 700, margin: "8px 0 4px", color: p.accent }}>{p.title}</h3>
                  <p style={{ fontSize: 11, color: "#636E83", margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Referências de mercado">
            <div style={{ padding: 16, background: "#F8F9FC", borderRadius: 12, fontSize: 13, color: "#636E83", lineHeight: 1.7 }}>
              A paleta violeta + coral se alinha com plataformas de educação digital como <strong style={{ color: "#1A1A2E" }}>Domestika</strong>, <strong style={{ color: "#1A1A2E" }}>Hotmart</strong> e <strong style={{ color: "#1A1A2E" }}>Coursera</strong>, que usam cores vibrantes porém suaves para criar ambientes digitais acolhedores. A diferença é a coruja — nenhuma delas tem um mascote tão carismático.
            </div>
          </Section>
        </div>
      )}

      {activeTab === "cores" && (
        <div>
          <Section title="Primárias — Identidade digital">
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
              {brandColors.new.primary.map((c, i) => <ColorSwatch key={i} {...c}/>)}
            </div>
            <p style={{ fontSize: 12, color: "#636E83", lineHeight: 1.6, margin: 0 }}>O violeta é a cor central — botões, headers, navegação e identidade principal.</p>
          </Section>
          <Section title="Secundárias — Calor e ação">
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
              {brandColors.new.secondary.map((c, i) => <ColorSwatch key={i} {...c}/>)}
            </div>
            <p style={{ fontSize: 12, color: "#636E83", lineHeight: 1.6, margin: 0 }}>O coral traz calor humano — CTAs secundários, notificações e destaque emocional.</p>
          </Section>
          <Section title="Suporte — Funcional">
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
              {brandColors.new.support.map((c, i) => <ColorSwatch key={i} {...c}/>)}
            </div>
            <p style={{ fontSize: 12, color: "#636E83", lineHeight: 1.6, margin: 0 }}>Progresso de curso (menta), links informativos (azul), conquistas e avisos (amarelo).</p>
          </Section>
          <Section title="Neutros">
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {brandColors.new.neutral.map((c, i) => <ColorSwatch key={i} {...c}/>)}
            </div>
          </Section>
          <Section title="Configuração no Elementor">
            <div style={{ padding: 20, background: "#1A1A2E", borderRadius: 14, fontSize: 12, fontFamily: "monospace", lineHeight: 2.2, color: "#A29BFE", overflow: "auto" }}>
              <div><span style={{ color: "#636E83" }}>/* Global Colors - Elementor / Coursiva */</span></div>
              <div><span style={{ color: "#636E83" }}>--</span>e-global-color-primary: <span style={{ color: "#ECEAFF" }}>#6C5CE7</span>;</div>
              <div><span style={{ color: "#636E83" }}>--</span>e-global-color-secondary: <span style={{ color: "#ECEAFF" }}>#FF7675</span>;</div>
              <div><span style={{ color: "#636E83" }}>--</span>e-global-color-text: <span style={{ color: "#ECEAFF" }}>#1A1A2E</span>;</div>
              <div><span style={{ color: "#636E83" }}>--</span>e-global-color-accent: <span style={{ color: "#ECEAFF" }}>#00B894</span>;</div>
              <div style={{ marginTop: 12 }}><span style={{ color: "#636E83" }}>/* Backgrounds */</span></div>
              <div>body-bg: <span style={{ color: "#ECEAFF" }}>#F8F9FC</span>;</div>
              <div>card-bg: <span style={{ color: "#ECEAFF" }}>#FFFFFF</span>;</div>
              <div>surface-bg: <span style={{ color: "#ECEAFF" }}>#ECEAFF</span>;</div>
            </div>
          </Section>
        </div>
      )}

      {activeTab === "logo" && (
        <div>
          <Section title="Evolução do logo">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ padding: 24, background: "#FFFFFF", borderRadius: 14, border: "1px solid #E2E4EA", textAlign: "center" }}>
                <span style={{ fontSize: 10, color: "#636E83", textTransform: "uppercase", letterSpacing: 1.5 }}>Atual</span>
                <div style={{ margin: "16px 0" }}><OwlLogo palette="old" scale={0.8}/></div>
                <span style={{ fontSize: 11, color: "#636E83" }}>Tons terrosos</span>
              </div>
              <div style={{ padding: 24, background: "#FFFFFF", borderRadius: 14, border: "2px solid #A29BFE", textAlign: "center" }}>
                <span style={{ fontSize: 10, color: "#6C5CE7", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>Proposta</span>
                <div style={{ margin: "16px 0" }}><OwlLogo palette="new" scale={0.8}/></div>
                <span style={{ fontSize: 11, color: "#636E83" }}>Violeta digital</span>
              </div>
            </div>
          </Section>

          <Section title="Aplicações">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {[
                { bg: "#F8F9FC", label: "Fundo claro", tc: "#636E83", border: "1px solid #E2E4EA" },
                { bg: "#1A1A2E", label: "Fundo escuro", tc: "#A29BFE", border: "none" },
                { bg: "#6C5CE7", label: "Fundo marca", tc: "#ECEAFF", border: "none" },
              ].map((a, i) => (
                <div key={i} style={{ background: a.bg, borderRadius: 12, padding: 16, textAlign: "center", border: a.border }}>
                  <OwlLogo palette="new" scale={0.4}/>
                  <p style={{ fontSize: 10, color: a.tc, marginTop: 8, marginBottom: 0 }}>{a.label}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Lockup horizontal">
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: 24, background: "#FFFFFF", borderRadius: 14, border: "1px solid #E2E4EA" }}>
              <OwlLogo palette="new" scale={0.38}/>
              <div>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#1A1A2E" }}>Papo de Profes</span>
                <p style={{ fontSize: 11, color: "#6C5CE7", margin: "2px 0 0", fontWeight: 600, letterSpacing: 0.5 }}>Plataforma de ensino online de PLE</p>
              </div>
            </div>
          </Section>

          <Section title="Favicon e ícone de app">
            <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
              {[48, 36, 24].map((s, i) => (
                <div key={i} style={{ width: s, height: s, borderRadius: s * 0.22, background: "#6C5CE7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <OwlLogo palette="new" scale={s / 160}/>
                </div>
              ))}
              <span style={{ fontSize: 11, color: "#636E83", marginLeft: 8 }}>48 · 36 · 24px</span>
            </div>
          </Section>
        </div>
      )}

      {activeTab === "site" && (
        <Section title="Preview com identidade digital">
          <p style={{ fontSize: 13, color: "#636E83", lineHeight: 1.7, margin: "0 0 16px" }}>
            Nova paleta aplicada ao layout estilo Coursiva. O violeta funciona como cor principal, coral destaca mentorias, menta marca progresso — linguagem visual de plataforma digital.
          </p>
          <WebPreview/>
        </Section>
      )}

      {activeTab === "tipo" && (
        <div>
          <Section title="Sistema tipográfico"><TypographyPreview/></Section>
          <Section title="Escala tipográfica">
            <div style={{ padding: 20, background: "#FFFFFF", borderRadius: 14, border: "1px solid #E2E4EA" }}>
              {[
                { size: 32, weight: 800, label: "H1 Hero", text: "Ensine PLE online" },
                { size: 24, weight: 700, label: "H2 Seção", text: "Nossos cursos" },
                { size: 18, weight: 600, label: "H3 Card", text: "Metodologias ativas" },
                { size: 15, weight: 400, label: "Body", text: "Descrições de cursos e conteúdo da plataforma" },
                { size: 13, weight: 400, label: "Small", text: "Metadados, progresso, duração de aula" },
              ].map((t, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: i < 4 ? "1px solid #F8F9FC" : "none", display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontSize: 10, color: "#A29BFE", minWidth: 64, fontFamily: "monospace", fontWeight: 600 }}>{t.label}</span>
                  <span style={{ fontSize: t.size, fontWeight: t.weight, color: "#1A1A2E" }}>{t.text}</span>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Dica para o Elementor">
            <div style={{ padding: 16, background: "#ECEAFF", borderRadius: 12, fontSize: 13, color: "#5541D6", lineHeight: 1.7 }}>
              No Coursiva, configure as fontes em <strong>Elementor → Site Settings → Typography</strong>. Use Plus Jakarta Sans para títulos e Inter para corpo. Ambas são gratuitas no Google Fonts e otimizadas para web.
            </div>
          </Section>
        </div>
      )}

      <div style={{ marginTop: 48, padding: "20px 0", borderTop: "1px solid #E2E4EA", textAlign: "center", fontSize: 11, color: "#636E83" }}>
        Papo de Profes — Proposta de renovação · v2 Digital
      </div>
    </div>
  );
}
