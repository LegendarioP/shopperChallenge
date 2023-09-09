# Configuração do Banco de Dados MySQL e Integração com Prisma.io

Este guia descreve os passos necessários para configurar um banco de dados MySQL e realizar a integração com o Prisma.io em seu projeto. O Prisma.io é uma ferramenta ORM (Object-Relational Mapping) que simplifica a interação com o banco de dados em aplicativos Node.js.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha instalado o seguinte em seu sistema:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/)

## Configuração do Banco de Dados MySQL

1. **Instale o MySQL**: Se você ainda não o instalou, siga as instruções do [site oficial](https://dev.mysql.com/downloads/installer/) para instalar o MySQL em seu sistema.

2. **Crie um banco de dados**: Use um cliente MySQL, como o MySQL Workbench ou o comando `mysql` para criar um banco de dados para o seu projeto.

# integração do banco baseado no arquivo database contido no desafio 

3. **Instalando o Prisma**:  Será necessario integra-lo com o banco de dados prisma(o qual foi utilizado)
   
Integração com o Prisma.io
Instale o Prisma CLI: Abra o terminal e execute o seguinte comando para instalar o Prisma CLI globalmente:
```
npm install -g prisma
```

Inicie um projeto Prisma: No diretório do seu projeto, execute o seguinte comando para iniciar um projeto Prisma:


```
prisma init
```
Isso iniciará um assistente que ajudará você a configurar as opções de conexão com o banco de dados. Escolha a opção "MySQL" quando solicitado e forneça as informações de conexão (nome do banco de dados, usuário e senha).

Gerencie o modelo de dados: Agora, você pode definir seus modelos de dados no arquivo schema.prisma. Use a linguagem de modelagem do Prisma para definir suas tabelas e relacionamentos.

Gerar arquivos de migração: Após definir seus modelos, execute o seguinte comando para gerar arquivos de migração:

```
prisma migrate dev
```
Aplicar migrações: Aplique as migrações ao banco de dados com o seguinte comando:

```
prisma db_shopper push
```
Agora, você configurou com sucesso um banco de dados MySQL e integrou-o ao seu projeto usando o Prisma.io. Você pode começar a criar modelos e acessar o banco de dados de forma mais conveniente usando o Prisma.

Para obter mais informações sobre o Prisma.io, consulte a [documentação oficial](https://www.prisma.io/docs).
