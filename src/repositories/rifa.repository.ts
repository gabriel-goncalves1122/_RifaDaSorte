import { PrismaClient, Rifa } from '../../generated/prisma'
const prisma = new PrismaClient();

export default class RifaRepository {
  async listar(): Promise<Rifa[]> {
    return prisma.rifa.findMany();
  }

  async obterPorId(id: number): Promise<Rifa | null> {
    return prisma.rifa.findUnique({
      where: { id }
    });
  }

  async criar(data: Omit<Rifa, 'id'>): Promise<Rifa> {
    return prisma.rifa.create({ data });
  }

  async atualizar(id: number, data: Partial<Rifa>): Promise<Rifa> {
    return prisma.rifa.update({ where: { id }, data });
  }

  async remover(id: number): Promise<void> {
    await prisma.rifa.delete({ where: { id } });
  }

  async listarBilhetes(rifaId: number) : Promise<Rifa[]> {
    return await prisma.rifa.findMany();
  }

  /*async sortear(rifaId: number) {
    const bilhetesComprados = await prisma.bilhete.findMany({
      where: { rifaId, status: 'Vendido' }
    });

    const vencedor = bilhetesComprados[Math.floor(Math.random() * bilhetesComprados.length)];
    
    await prisma.rifa.update({
      where: { id: rifaId },
      data: { status: 'Finalizada' }
    });

    return prisma.sorteio.create({
      data: {
        rifaId,
        vencedorId: vencedor.participanteId!,
        bilhetes: {
          create: { bilheteId: vencedor.id }
        }
      },
      include: { vencedor: true }
    });
  }*/
}