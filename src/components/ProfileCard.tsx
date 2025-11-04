import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  characteristics: string[];
  riskLevel: string;
  color: "primary" | "success" | "accent";
}

const ProfileCard = ({
  title,
  description,
  icon: Icon,
  characteristics,
  riskLevel,
  color,
}: ProfileCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    success: "bg-success/10 text-success border-success/20",
    accent: "bg-accent/10 text-accent-foreground border-accent/20",
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-border/50 bg-[var(--gradient-card)]">
      <CardHeader className="space-y-4">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorClasses[color]} transition-transform group-hover:scale-110 duration-300`}>
          <Icon className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <Badge variant="outline" className="w-fit">
            {riskLevel}
          </Badge>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
            Características
          </h4>
          <ul className="space-y-2">
            {characteristics.map((char, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full mt-2 ${
                  color === "primary" ? "bg-primary" : 
                  color === "success" ? "bg-success" : "bg-accent"
                }`} />
                <span className="text-sm text-foreground/80">{char}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
