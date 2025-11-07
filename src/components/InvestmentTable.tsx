import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const InvestmentTable = () => {
  const investments = [
    {
      tipo: "Poupança",
      risco: "Baixo",
      prazo: "Curto prazo",
      retorno: "0,5% ao mês¹",
      perfil: "Conservador",
      badgeColor: "bg-primary/10 text-primary border-primary/20"
    },
    {
      tipo: "Tesouro Direto",
      risco: "Baixo",
      prazo: "Curto ou médio",
      retorno: "1,09% ao mês²",
      perfil: "Conservador",
      badgeColor: "bg-primary/10 text-primary border-primary/20"
    },
    {
      tipo: "CDB",
      risco: "Moderado",
      prazo: "Curto ou médio",
      retorno: "Aproximadamente 13,25% ao ano³",
      perfil: "Moderado",
      badgeColor: "bg-success/10 text-success border-success/20"
    },
    {
      tipo: "Ações",
      risco: "Alto",
      prazo: "Longo prazo",
      retorno: "Variável: pode ser negativo ou positivo",
      perfil: "Agressivo",
      badgeColor: "bg-accent/10 text-accent border-accent/20"
    },
    {
      tipo: "Criptomoedas",
      risco: "Muito alto",
      prazo: "Longo prazo",
      retorno: "Altamente variável e especulativo: grandes perdas e ganhos",
      perfil: "Agressivo",
      badgeColor: "bg-accent/10 text-accent border-accent/20"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Tabela Comparativa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como vimos os tipos de investimento, observe a tabela comparativa a seguir
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/20 hover:bg-primary/20">
                <TableHead className="font-bold text-foreground">Tipo de investimento</TableHead>
                <TableHead className="font-bold text-foreground">Risco</TableHead>
                <TableHead className="font-bold text-foreground">Prazo ideal</TableHead>
                <TableHead className="font-bold text-foreground">Retorno estimado</TableHead>
                <TableHead className="font-bold text-foreground">Perfil</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investments.map((investment, idx) => (
                <TableRow key={idx} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{investment.tipo}</TableCell>
                  <TableCell>{investment.risco}</TableCell>
                  <TableCell>{investment.prazo}</TableCell>
                  <TableCell>{investment.retorno}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={investment.badgeColor}>
                      {investment.perfil}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTable;
