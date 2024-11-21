import express from 'express';
import dotenv from 'dotenv';
import homeRoutes from './routes/homeRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Configurações
app.set('view engine', 'ejs'); // Configura EJS como o mecanismo de template
app.set('views', './views'); // Define o diretório das views
app.use(express.static('public')); // Servir arquivos estáticos
app.use(express.urlencoded({ extended: true })); // Permitir parsing de dados do formulário

// Rotas
app.use('/', homeRoutes); // Rota da tela inicial
app.use('/products', productRoutes); // Rota para lista e detalhes dos produtos
app.use('/cart', cartRoutes); // Rota do carrinho

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
