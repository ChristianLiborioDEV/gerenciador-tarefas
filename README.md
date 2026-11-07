# Gerenciador de Tarefas

Projeto desenvolvido para praticar JavaScript puro — manipulação de arrays,
funções, closures e DOM. Consiste em um sistema de gerenciamento de tarefas
com suporte a prioridades, busca e filtros.

Depois de pronto em JavaScript puro, o projeto foi evoluído para React, mantendo a lógica separada da interface.

## Funcionalidades
- Visualizar tarefas, com cor por prioridade
- Adicionar tarefa com prioridade
- Pesquisar tarefas
- Concluir ou remover tarefas
- Mostrar só as tarefas pendentes
- Contador de tarefas pendentes (versão React)

## Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)

## Vercel
https://gerenciador-tarefas-1.vercel.app/

## Como rodar o projeto
1. Clone o repositório:

```bash
git clone https://github.com/ChristianLiborioDEV/gerenciador-tarefas.git
cd gerenciador-tarefas
```

2. Instale as dependências e rode:

```bash
npm install
npm run dev
```

3. Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Evolução do projeto
1. **JavaScript puro** — lógica com arrays e objetos, interface montada pelo DOM ([ver código](https://github.com/ChristianLiborioDEV/gerenciador-tarefas/tree/v1-js-puro))
2. **Módulos ES6** — código separado em `dados.js`, `tarefas.js`, `interface.js` e `app.js`
3. **React** — interface em componentes, estado com `useState`, lógica pura mantida em `tarefas.js`


## Conceitos aplicados

### JavaScript
- Arrow Functions — usadas em todas as funções do projeto
- Métodos de Array — `map`, `filter`, `findIndex`, `sort`, `splice`
- Closures — gerador de ids únicos com contador encapsulado
- Spread — atualização de objetos sem mutar o original
- Manipulação do DOM — renderização dinâmica da lista de tarefas
- Módulos ES6 — código organizado em arquivos separados com import/export

### React
- Componentes e props — interface dividida em `App`, `ItemTarefa` e `Formulario`
- `useState` — estado da lista, da busca e do filtro de pendentes
- Estado imutável — atualizações com `map`, `filter` e spread, sem `push` nem `splice`
- `key` em listas — identificação de cada item renderizado com `map`
- Funções como props — `onConcluir`, `onRemover` e `onAdicionar` levam os eventos do filho para o pai
- Inputs controlados — o valor digitado fica guardado no state
- Dados derivados — contador, busca e filtro calculados a partir do state
- Renderização condicional — o botão "Concluir" some nas tarefas já concluídas
- `useEffect` e `localStorage`: as tarefas continuam salvas depois de recarregar a página

## Exemplos de uso

### Versão React (`src/tarefas.js`)
As funções recebem a lista e devolvem uma nova, sem alterar a original:

```javascript
adicionarTarefa(tarefas, "Estudar React", "alta");
concluirTarefa(tarefas, 1);
removerTarefa(tarefas, 2);
buscarPorTitulo(tarefas, "lavar");
```

### Versão JavaScript puro
```javascript
// Adicionar uma tarefa
adicionarTarefa("Estudar JavaScript", "alta");

// Buscar por titulo
buscarPorTitulo("lavar");

// Marcar tarefa como realizada
marcarRealizada(2)
```