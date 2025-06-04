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

// Rotas públicas
app.use('/rifas', rifaRoutes);

// Rotas protegidas
app.use('/participantes', authMiddleware, participanteRoutes);
app.use('/bilhetes', authMiddleware, bilheteRoutes);
app.use('/auth', authRoutes);
app.use('/usuarios', usuarioRoutes);





// Inicialização do servidor
async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Banco de dados conectado');

   app.listen(PORT, () => {
 
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