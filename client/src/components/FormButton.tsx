import { Button } from "@/components/ui/button";

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function FormButton({ children, isLoading, className, ...props }: FormButtonProps) {
  return (
    <Button
      className={`w-full h-12 text-base font-medium ${className || ""}`}
      disabled={isLoading}
      data-testid="button-submit"
      {...props}
    >
      {isLoading ? "Carregando..." : children}
    </Button>
  );
}
