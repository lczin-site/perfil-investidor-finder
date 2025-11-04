import { Shield, TrendingUp, Zap } from "lucide-react";
import ProfileCard from "./ProfileCard";

const ProfilesSection = () => {
  const profiles = [
    {
      title: "Conservador",
      description: "Busca segurança e preservação do capital, preferindo investimentos de baixo risco com retornos previsíveis.",
      icon: Shield,
      riskLevel: "Baixo Risco",
      color: "primary" as const,
      characteristics: [
        "Prioriza a segurança e liquidez dos investimentos",
        "Aceita retornos menores em troca de menor volatilidade",
        "Prefere renda fixa e investimentos conservadores",
        "Foco na preservação do patrimônio",
      ],
    },
    {
      title: "Moderado",
      description: "Equilibra segurança com crescimento, aceitando certo nível de risco para buscar retornos superiores.",
      icon: TrendingUp,
      riskLevel: "Risco Moderado",
      color: "success" as const,
      characteristics: [
        "Busca equilíbrio entre segurança e rentabilidade",
        "Diversifica entre renda fixa e renda variável",
        "Aceita oscilações moderadas no curto prazo",
        "Visão de médio a longo prazo",
      ],
    },
    {
      title: "Agressivo",
      description: "Foca em maximizar retornos no longo prazo, aceitando alta volatilidade e riscos significativos.",
      icon: Zap,
      riskLevel: "Alto Risco",
      color: "accent" as const,
      characteristics: [
        "Busca máxima rentabilidade no longo prazo",
        "Alta concentração em renda variável",
        "Confortável com grandes oscilações",
        "Visão de longo prazo e tolerância ao risco",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Tipos de Perfil
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça os três principais perfis de investidor e suas características
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
