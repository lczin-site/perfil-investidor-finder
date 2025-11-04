import { CheckCircle2, Target, LineChart, Shield } from "lucide-react";

const ImportanceSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Decisões Alinhadas",
      description: "Investimentos compatíveis com seus objetivos e tolerância ao risco",
    },
    {
      icon: LineChart,
      title: "Melhor Performance",
      description: "Estratégias adequadas aumentam chances de sucesso nos investimentos",
    },
    {
      icon: Shield,
      title: "Controle Emocional",
      description: "Reduz ansiedade ao entender e aceitar a volatilidade do seu perfil",
    },
    {
      icon: CheckCircle2,
      title: "Planejamento Eficaz",
      description: "Permite construir uma carteira diversificada e equilibrada",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Por que Conhecer seu Perfil?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entender seu perfil de investidor é fundamental para tomar decisões financeiras inteligentes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-[var(--shadow-soft)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
