import './config/env';
import express from 'express';
import { PrismaClient } from '../generated/prisma';
import participanteRoutes from './routes/participante.routes';
import rifaRoutes from './routes/rifa.routes';
import bilheteRoutes from './routes/bilhete.routes';
import authRoutes from './routes/auth.routes';
import usuarioRoutes from './routes/usuario.routes';
import { authMiddleware } from './middleware/auth.middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerJSdoc from 'swagger-jsdoc'



const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rifas da Sorte API',
      version: '1.0.0',
      description: 'API para gerenciar Usuarios, Rifas e Bilhetes',
    },
    servers: [{
      description: 'Servidor Principal'
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  security: [
  {
    bearerAuth: [],
  },
  ],
},
  apis: ['./src/schemas/*.swagger.ts'],
};

const swaggerSpec = swaggerJSdoc(swaggerOptions);



const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas de Documentação (públicas)
app.get('auth', authRoutes);
app.get('usuarios', usuarioRoutes);



// Rotas protegidas (documentação)
app.get('/participantes', authMiddleware, participanteRoutes);
app.get('/rifas', authMiddleware, rifaRoutes);
app.get('/bilhetes', authMiddleware, bilheteRoutes);




/*app.get('/api', (req, res) => {
  res.json({
    endpoints: {
      auth: {
        login: 'POST /api/auth/login'
      },
      usuarios: {
        criar: 'POST /api/usuarios',
        obter: 'GET /api/usuarios/:id'
      },
      participantes: {
        listar: 'GET /api/participantes',
        detalhes: 'GET /api/participantes/:id'
      },
      rifas: {
        listar: 'GET /api/rifas',
        criar: 'POST /api/rifas',
        detalhes: 'GET /api/rifas/:id'
      },
      bilhetes: {
        comprar: 'POST /api/bilhetes',
        detalhes: 'GET /api/bilhetes/:id'
      }
    }
  });
});*/

// Inicialização do servidor
async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Banco de dados conectado');

   app.listen(PORT, () => {
  /*console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log('\n🟢 Rotas públicas:');
  console.log(`- POST /api/auth/login`.padEnd(35) + 'Autenticação de usuário');
  console.log(`- POST /api/usuarios`.padEnd(35) + 'Cadastro de novo usuário');
  
  console.log('\n🔐 Rotas protegidas (requer autenticação):');
  console.log('\n👤 Usuários:');
  console.log(`- GET /api/usuarios/:id`.padEnd(35) + 'Obter usuário por ID');
  
  console.log('\n🎟️ Participantes:');
  console.log(`- GET /api/participantes`.padEnd(35) + 'Listar participantes');
  console.log(`- GET /api/participantes/:id`.padEnd(35) + 'Obter participante por ID');
  console.log(`- GET /api/participantes/:id/bilhetes`.padEnd(35) + 'Listar bilhetes do participante');
  
  console.log('\n🎪 Rifas:');
  console.log(`- GET /api/rifas`.padEnd(35) + 'Listar todas as rifas');
  console.log(`- POST /api/rifas`.padEnd(35) + 'Criar nova rifa');
  console.log(`- GET /api/rifas/:id`.padEnd(35) + 'Obter rifa por ID');
  console.log(`- PUT /api/rifas/:id`.padEnd(35) + 'Atualizar rifa');
  console.log(`- DELETE /api/rifas/:id`.padEnd(35) + 'Remover rifa');
  console.log(`- GET /api/rifas/:id/bilhetes`.padEnd(35) + 'Listar bilhetes da rifa');
  console.log(`- POST /api/rifas/:id/sortear`.padEnd(35) + 'Sortear vencedor da rifa');
  
  console.log('\n🎫 Bilhetes:');
  console.log(`- GET /api/bilhetes`.padEnd(35) + 'Listar todos os bilhetes');
  console.log(`- POST /api/bilhetes`.padEnd(35) + 'Comprar bilhete');
  console.log(`- GET /api/bilhetes/:id`.padEnd(35) + 'Obter bilhete por ID');
  
  console.log('\n📚 Documentação completa:');
  console.log(`- GET /api`.padEnd(35) + 'Listar todos os endpoints');
  console.log(`- GET /api/health`.padEnd(35) + 'Verificar status do servidor\n');*/

  console.log(`Server running on port ${PORT}`);
});

  } catch (error) {
    console.error('❌ Falha na inicialização:', error);
    process.exit(1);
  }
}

// Encerramento seguro
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('🔴 Servidor encerrado');
  process.exit(0);
});

startServer();