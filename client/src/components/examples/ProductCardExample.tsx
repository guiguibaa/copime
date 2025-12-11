import ProductCard from "../ProductCard";

export default function ProductCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ProductCard
        id="1"
        nome="Produto Exemplo"
        quantidade={150}
        fornecedor="Fornecedor ABC"
        lote="L001"
        dataEntrada="10/12/2024"
      />
    </div>
  );
}
