import { TrendingUp, Users, Target, KanbanSquare } from "lucide-react";

export default function CRMPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <TrendingUp className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Freya CRM</h1>
        </div>
        <p className="mb-8 text-lg text-muted-foreground">
          Sistema comercial e de relacionamento com clientes
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-6">
            <Users className="h-8 w-8 text-muted-foreground" />
            <span className="text-sm font-medium">Leads</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-6">
            <KanbanSquare className="h-8 w-8 text-muted-foreground" />
            <span className="text-sm font-medium">Funil</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-6">
            <Target className="h-8 w-8 text-muted-foreground" />
            <span className="text-sm font-medium">Oportunidades</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-6">
            <TrendingUp className="h-8 w-8 text-muted-foreground" />
            <span className="text-sm font-medium">Dashboard</span>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Em construção — Sprint 0 em andamento
        </p>
      </div>
    </div>
  );
}
