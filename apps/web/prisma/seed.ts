import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Iniciando seed do Freya CRM...");

  // ──────────────────────────────────────────────
  // Pipeline padrão com 7 etapas
  // ──────────────────────────────────────────────
  const pipeline = await prisma.crmPipeline.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000001",
      name: "Funil Padrão",
      description: "Funil comercial padrão do Freya CRM",
      isDefault: true,
    },
  });

  const stages = [
    { name: "Entrada", order: 1, probability: 10, isFinal: false, isWon: false, isLost: false },
    { name: "Qualificação", order: 2, probability: 25, isFinal: false, isWon: false, isLost: false },
    { name: "Diagnóstico", order: 3, probability: 40, isFinal: false, isWon: false, isLost: false },
    { name: "Proposta", order: 4, probability: 60, isFinal: false, isWon: false, isLost: false },
    { name: "Negociação", order: 5, probability: 80, isFinal: false, isWon: false, isLost: false },
    { name: "Fechado Ganho", order: 6, probability: 100, isFinal: true, isWon: true, isLost: false },
    { name: "Fechado Perdido", order: 7, probability: 0, isFinal: true, isWon: false, isLost: true },
  ];

  for (const stage of stages) {
    const stageId = `00000000-0000-0000-0000-0000000000${String(stage.order).padStart(2, "0")}`;
    await prisma.crmPipelineStage.upsert({
      where: { id: stageId },
      update: {},
      create: {
        id: stageId,
        pipelineId: pipeline.id,
        name: stage.name,
        order: stage.order,
        probability: stage.probability,
        isFinal: stage.isFinal,
        isWon: stage.isWon,
        isLost: stage.isLost,
      },
    });
  }

  console.log(`✅ Pipeline "${pipeline.name}" criado com ${stages.length} etapas`);

  // ──────────────────────────────────────────────
  // Motivos de perda padrão
  // ──────────────────────────────────────────────
  const lossReasons = [
    { name: "Preço", description: "Cliente escolheu concorrente por preço menor" },
    { name: "Concorrência", description: "Cliente fechou com concorrente" },
    { name: "Sem orçamento", description: "Cliente não tem orçamento disponível" },
    { name: "Timing inadequado", description: "Não é o momento certo para o cliente" },
    { name: "Sem necessidade", description: "Cliente não tem necessidade do serviço" },
    { name: "Sem decisão", description: "Cliente não tomou decisão e ficou parado" },
    { name: "Produto/Serviço não atende", description: "Nossa oferta não atende às necessidades" },
    { name: "Outro", description: "Motivo não categorizado" },
  ];

  for (let i = 0; i < lossReasons.length; i++) {
    const reasonId = `00000000-0000-0000-0001-0000000000${String(i + 1).padStart(2, "0")}`;
    await prisma.crmLossReason.upsert({
      where: { id: reasonId },
      update: {},
      create: {
        id: reasonId,
        name: lossReasons[i].name,
        description: lossReasons[i].description,
        isActive: true,
      },
    });
  }

  console.log(`✅ ${lossReasons.length} motivos de perda criados`);
  console.log("🌱 Seed concluído com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Erro no seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
