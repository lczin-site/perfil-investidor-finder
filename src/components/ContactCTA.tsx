import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ContactCTA = () => {
  const phoneNumber = "5545991168098";
  const message = "Olá, gostaria de saber mais sobre como ser um bom investidor.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
          <MessageCircle className="w-8 h-8 text-success" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold">
          Aprimore Seus Conhecimentos em Investimentos
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Para aprofundar seu conhecimento sobre estratégias de investimento e receber 
          orientações personalizadas para se tornar um investidor de sucesso, entre em 
          contato através do WhatsApp.
        </p>

        <div className="pt-4">
          <Button 
            size="lg" 
            className="gap-2 text-lg px-8 py-6"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            (45) 99116-6898
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
