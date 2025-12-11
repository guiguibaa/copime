import MovementRow from "../MovementRow";

export default function MovementRowExample() {
  return (
    <div className="p-4 space-y-3 max-w-lg">
      <MovementRow
        id="1"
        produto="Produto A"
        tipo="entrada"
        quantidade={50}
        data="11/12/2024"
        lote="L001"
      />
      <MovementRow
        id="2"
        produto="Produto B"
        tipo="saida"
        quantidade={10}
        data="10/12/2024"
        lote="L002"
      />
    </div>
  );
}
