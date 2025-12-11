import StatsCard from "../StatsCard";
import { Package, TrendingUp, AlertTriangle, ArrowLeftRight } from "lucide-react";

export default function StatsCardExample() {
  return (
    <div className="p-4 grid grid-cols-2 gap-4 max-w-2xl">
      <StatsCard
        title="Total de Produtos"
        value={42}
        icon={Package}
        description="Produtos cadastrados"
      />
      <StatsCard
        title="Estoque Total"
        value="1.250 un."
        icon={TrendingUp}
        description="Unidades em estoque"
      />
      <StatsCard
        title="Baixo Estoque"
        value={3}
        icon={AlertTriangle}
        description="Produtos com menos de 10 un."
      />
      <StatsCard
        title="Movimentações Hoje"
        value={8}
        icon={ArrowLeftRight}
        description="Entradas e saídas"
      />
    </div>
  );
}
