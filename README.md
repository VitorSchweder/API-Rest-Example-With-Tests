## Como configurar essa aplicação
<p>Após clonar o repositório, executar o comando a seguir para instalar os pacotes:</p>
<pre>
yarn install
</pre>

## Ambientes
<p>Configurar os valores nos arquivos .env e .env.test (para executar os testes), arquivos de exemplo: .env.example e .env.test.example.</p>

## Dados
<p>Para criar as tabelas no banco de dados rodar as <b>migrations</b> e em seguida rodar os <b>seeders</b> para criar os perfis de acesso: Administrador e Funcionário e também para criar o usuário do tipo Administrador com acesso a todas as rotas da API:</p>
<pre>
E-mail: admintest@email.com,
Senha: admin@321
</pre>.

## Endpoints - API
<p>O arquivo contendo o ambiente / end-points da API está na pasta raíz do projeto, chamado: <b>Insomnia.json</b>.</p>

## Segurança
<p>Todas as rotas são privadas, necessitam do token de acesso, para gerar o token é necessário efetuar o login na rota: /auth e adicionar na variável de ambiente o endereço e token seguindo exemplo:</p>
<pre>
{
  "BASE_URL": "http://127.0.0.1:3000",
  "TOKEN": "eyJhbGciOiJIUzCI6IkpXVCJ9.eyJpZCI6MSwioxNjUxNTg4OTcyfQ.Y24Tf2CpGrYtm-BGy1oTxbng6ou19SFy0JY"
}
</pre>


## ACL
<p>
* Usuários com o perfil <b>Administrador</b> possuem acesso a todas as rotas. <br>
* Usuários com o perfil <b>Funcionário</b> possuem acesso apenas as rotas de usuários (users) com o próprio id e o mesmo nas rotas de funcionários (employees).</p>

## Testes
<p>Para rodar os testes de unidade e integração rodar o comando:</p>
<pre>yarn test</pre>

## Executar aplicação
<p>Para iniciar o servidor em ambiente de desenvolvimento rodar o comando:</p>
<pre>yarn dev</pre>
