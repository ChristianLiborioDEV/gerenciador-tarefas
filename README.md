# Gerenciador de tarefas
Projeto desenvolvido para praticar JavaScript puro — manipulação de arrays,
funções, closures e DOM. Consiste em um sistema de gerenciamento de tarefas
com suporte a prioridades, busca e filtros.

## Funcionalidades
- Visualizar tarefas 
- Adicionar tarefa com prioridade
- Pesquisar tarefas
- Concluir ou remover tarefas 

## Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)

## Vercel
https://gerenciador-tarefas-1.vercel.app/

## Como rodar o projeto
1. Clone o repositório:

git clone https://github.com/ChristianLiborioDEV/gerenciador-tarefas.git
2. Abra a pasta no VS Code

3. Abra o arquivo `index.html` com a extensão *Live Server*

Não é necessário instalar dependências, o projeto usa JavaScript puro.

## Conceitos aplicados
- Arrow Functions — usadas em todas as funções do projeto
- Métodos de Array — `map`, `filter`, `reduce`, `find`, `findIndex`, `sort`
- Closures — gerador de ids únicos com contador encapsulado
- Spread  — atualização de objetos sem mutar o original
- Manipulação do DOM — renderização dinâmica da lista de tarefas
- Módulos ES6 — código organizado em arquivos separados com import/export


## Exemplos de uso 
```javascript
// Adicionar uma tarefa
adicionarTarefa("Estudar JavaScript", "alta");

// Buscar por titulo
buscarPorTitulo("lavar");

// Marcar tarefa como realizada 
marcarRealizada(2)
//
```
