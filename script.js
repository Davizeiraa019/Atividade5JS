// 1. Roteador de Métodos HTTP
// Cenário: Quando criamos uma API, uma mesma URL pode realizar ações diferentes dependendo 
// do "método" enviado pelo cliente (GET para buscar, POST para salvar, etc.).

// Tarefa: Crie uma variável const metodoHttp e atribua a ela uma string (ex: "GET", "POST", "PUT", "DELETE"). 
// Use um switch para simular o comportamento da API:
// Se for "GET": imprima "Buscando dados no banco de dados..."
// Se for "POST": imprima "Criando um novo registro..."
// Se for "PUT": imprima "Atualizando os dados do registro..."
// Se for "DELETE": imprima "Registro removido com sucesso."
// Padrão (default): imprima "Erro: Método não permitido para esta rota."

// const metodoHttp = prompt('Digite a sua frase')

// switch (metodoHttp) {
//     case 'GET':
//         console.log('Buscando dados no banco de dados');
//         break;
//     case 'POST':
//         console.log('Criando um novo registro');
//         break;
//     case 'PUT':
//         console.log('Atualizando os dados do registro.');
//         break;
//     case 'DELETE':
//         console.log('Registro removido com sucesso.');
//         break;
//     default:
//         console.log('Erro: Método não permitido para esta rota.');
//         break;
// }

// 2. Seletor de Banco de Dados por Ambiente
// Cenário: Aplicações reais rodam em diferentes ambientes 
// (no computador do programador, no servidor de testes ou no servidor real para os clientes). 
// O sistema precisa saber em qual banco de dados se conectar dependendo de onde está rodando.
// Tarefa: Crie uma variável const ambiente (ex: "dev", "test", "prod"). Use um switch/case para definir a conexão:
// "dev" (Desenvolvimento): imprima "Conectando ao banco de dados local (SQLite)."
// "test" (Testes): imprima "Conectando ao banco de dados em memória."
// "prod" (Produção): imprima "Conectando ao banco de dados oficial na nuvem (PostgreSQL)."
// Padrão: imprima "CRÍTICO: Ambiente não reconhecido. Encerrando o servidor."

const ambiente = prompt('Digite sua ação')

switch (ambiente) {
    case 'dev':
        console.log('Conectando ao banco de dados local (SQLite).');
        break;
    case 'test':
        console.log('Conectando ao banco de dados em memória.');
        break;
    case 'prod':
        console.log('Conectando ao banco de dados oficial na nuvem');
        break;
    default:
        console.log('CRÍTICO: Ambiente não reconhecido. Encerrando o servidor.');
        break;
}