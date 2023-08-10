# teste-tecnico

## Instalando dependências
No terminal: ir para a pasta backend e usar o comando npm install.

## Variáveis de ambiente
Criar um arquivo .env dentro de backend com as variáveis:

PORT = 3333

MYSQL_HOST = localhost

MYSQL_USER = root

MYSQL_PASSWORD = root

MYSQL_DB = testetecnico

## Criando a database
No terminal: na pasta backend usar o comando docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql. 

Instalar a extensão do vscode Database Client. Dentro dela ir na opção de "Create Connection", escolher o server type como MySql, preencher o campo password com root e ir na opção connect. Com a conexão criada, passar o mouse sobre a nova conexão(lugar com o número do host), ir na opção com um símbolo "+", deletar o script que já vem nessa opção e colocar o seguinte script:

CREATE DATABASE IF NOT EXISTS testetecnico;

USE testetecnico;

CREATE TABLE pessoas(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(15) NOT NULL 
);

Para executar o script é necessário selecionar ele por completo apertando ctrl+a e depois ctrl+enter.

## Iniciando o servidor
Para iniciar o servidor é necessário ir no terminal e na pasta backend usar o comando npm start.

Para ver as funcionalidades do código basta abrir o arquivo index.html.
