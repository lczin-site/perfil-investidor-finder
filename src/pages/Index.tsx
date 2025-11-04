import Hero from "@/components/Hero";
import ProfilesSection from "@/components/ProfilesSection";
import ImportanceSection from "@/components/ImportanceSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProfilesSection />
      <ImportanceSection />
      
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Perfil de Investidor. Trabalho educacional.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
