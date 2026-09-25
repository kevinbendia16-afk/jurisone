import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { calcularPrazo } from '../src/prazos.js';

const prisma = new PrismaClient();

async function main() {
  // Usuário de acesso (advogado solo)
  const email = 'kevin@jurisone.local';
  const senha = 'jurisone123';
  await prisma.usuario.upsert({
    where: { email },
    update: {},
    create: { nome: 'Kevin', email, senhaHash: bcrypt.hashSync(senha, 10) },
  });
  // Usuário público de DEMONSTRAÇÃO (usado pelo botão "Ver demonstração" do site /site)
  await prisma.usuario.upsert({
    where: { email: 'demo@jurisone.com.br' },
    update: { nome: 'Dra. Helena Duarte' },
    create: { nome: 'Dra. Helena Duarte', email: 'demo@jurisone.com.br', senhaHash: bcrypt.hashSync('demo1234', 10) },
  });

  // Evita duplicar dados de exemplo em re-seeds
  if ((await prisma.cliente.count()) === 0) {
    const cliente = await prisma.cliente.create({
      data: {
        tipo: 'PF', nome: 'João da Silva Teste', cpfCnpj: '123.456.789-00',
        telefone: '(11) 98888-0000', email: 'joao.teste@exemplo.com', status: 'ativo',
      },
    });
    const processo = await prisma.processo.create({
      data: {
        clienteId: cliente.id, titulo: 'Ação de cobrança de honorários (teste)',
        numeroCnj: '0001234-56.2026.8.26.0100', area: 'Cível', status: 'ativo',
      },
    });
    const t = calcTerceiro({ valorBruto: 100000, honorarioPct: 30, custas: 2000, irRetido: 5000 });
    await prisma.valorTerceiro.create({
      data: {
        clienteId: cliente.id, processoId: processo.id, tipo: 'precatorio', ...t,
        tribunal: 'TJSP', enteDevedor: 'Estado de São Paulo', status: 'aguardando',
      },
    });
    const p = calcularPrazo(new Date(), 15, 'uteis');
    await prisma.prazo.create({
      data: {
        titulo: 'Prazo para recurso (exemplo)', processoId: processo.id, clienteId: cliente.id,
        dataInicio: p.dataInicio, dataFatal: p.dataFatal, dias: 15, tipoContagem: 'uteis',
      },
    });
  }
  console.log('Seed concluído. Login: kevin@jurisone.local / jurisone123');
}

function calcTerceiro(b) {
  const valorBruto = Number(b.valorBruto) || 0;
  const honorarioPct = Number(b.honorarioPct) || 0;
  const custas = Number(b.custas) || 0;
  const irRetido = Number(b.irRetido) || 0;
  const honorarioValor = valorBruto * (honorarioPct / 100);
  const valorLiquido = valorBruto - honorarioValor - custas - irRetido;
  return { valorBruto, honorarioPct, custas, irRetido, honorarioValor, valorLiquido };
}

main().finally(() => prisma.$disconnect());
