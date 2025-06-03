import 'dotenv/config'; // Adicione esta linha no topo do arquivo
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'] // Opcional: habilita logs do Prisma
});

async function testDatabaseConnection() {
  try {
    console.log('🔄 Testando conexão com o banco de dados...');
    console.log('ℹ️ DATABASE_URL:', process.env.DATABASE_URL);

    // Teste simplificado
    const result = await prisma.$queryRaw`SELECT 1+1 as soma`;
    console.log('✅ Teste de query:', result);

    const participantes = await prisma.participante.findMany({
      take: 3,
      select: {
        id: true,
        usuario: { select: { nome: true } }
      }
    });
    console.log('👥 Primeiros participantes:', participantes);

  } catch (error) {
    console.error('❌ Erro detalhado:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabaseConnection();