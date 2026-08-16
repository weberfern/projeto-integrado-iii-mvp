# 🎯 Projeto Integrado III - Feira Conectada

Universidade Federal do Cariri (UFCA)  
Análise e Desenvolvimento de Sistemas (ADS)  
Disciplina: Projeto Integrado III [ADS0038]  
Professor: Prof. Luís Fabrício de Freitas Souza

---

## 🔗 Continuidade do Projeto e Histórico de Entregas

Este repositório abriga a evolução contínua do projeto "Feira Conectada". Para manter o histórico unificado e facilitar a evolução, o projeto vem sendo construído de forma incremental no mesmo repositório:

- **EP1:** Evolução do wireframe e sitemap para o **protótipo de alta fidelidade**, validando a proposta visual.
- **EP2:** Elaboração do **modelo arquitetural** do MVP Web.
- **EP3 (Fase Atual):** Implementação de uma **versão funcional da aplicação** (código real em React/Vite).

*Aviso: Tudo o que se refere ao desenvolvimento em código e aplicação web funcional faz parte da entrega do **Entregável Parcial 3 (EP3)**.*

---

## 👥 Equipe

| Nome | Matrícula |
| --- | --- |
| Iago Ronan Almino Oliveira | 2025012453 |
| Jefferson Rodrigues de Oliveira | 2025013432 |
| Lucas Gabriel Correia Gonçalves | 2025013479 |
| Luiz Filipy Soares da Silva | 2025013503 |
| Marcelo dos Santos Alves | 2023010825 |
| Weber Fernandes da Silva | 2025019356 |

---

# 📦 Entregável Parcial 1 e 2 (EP1 e EP2) - Protótipo e Arquitetura

> **Aviso:** Toda a documentação presente nesta seção foi estruturada nas Sprints anteriores (EP1 e EP2), referentes ao levantamento de requisitos, elaboração do protótipo de alta fidelidade e definição da arquitetura do software.

## 🌐 Visão Geral

O projeto Feira Conectada tem como proposta apoiar a organização, divulgação e acesso às informações de uma feira conectada em ambiente web. 

Atualmente, no **Entregável Parcial 3 (EP3)**, apresentamos a implementação funcional do front-end do MVP. As fases anteriores (EP1 e EP2) estabeleceram a base visual (protótipos) e a base estrutural (arquitetura) para que o sistema chegasse a esta versão executável.

---

## 🧩 Problema que a solução resolve

Feiras e iniciativas semelhantes costumam depender de processos pouco centralizados para organizar informações, apresentar conteúdo ao público e facilitar a navegação entre as principais áreas do sistema. Isso pode gerar confusão, demora no acesso às informações e uma experiência pouco consistente para os usuários.

O Feira Conectada busca reduzir esse problema com uma interface clara, organizada e acessível, centralizando a experiência em um único ambiente digital.

---

## 🎯 Objetivo do Sistema

O objetivo do sistema é oferecer uma experiência web simples e intuitiva para apresentar o projeto da feira, apoiar a navegação entre suas principais funcionalidades e servir como base para a evolução incremental do MVP.

**Evolução dos Objetivos por Entregável:**
- No **EP1**, o foco esteve na construção do protótipo de alta fidelidade, validando a proposta visual e a estrutura de interação antes da implementação final.
- No **EP2**, foi elaborado o modelo arquitetural do MVP Web desenvolvido no projeto, orientando as decisões de tecnologia e estrutura.
- Neste **EP3 (Fase Atual)**, o foco é implementar uma versão funcional da aplicação, trazendo o design e a arquitetura para o código.

---

## ⚙️ Como o Sistema Funciona

Em visão geral, o sistema organiza a apresentação da solução em blocos de informação e em telas com fluxo coerente de navegação. O usuário deve conseguir:

- entender rapidamente o propósito da plataforma;
- acessar as seções principais com poucos cliques;
- visualizar conteúdos e informações relevantes de forma organizada;
- reconhecer padrões visuais consistentes durante toda a navegação.

O protótipo foi pensado para demonstrar esse fluxo de forma fiel ao produto desejado, usando componentes, hierarquia visual e padrões de interação que aproximam a experiência do resultado final.

---

## 🛠️ Tecnologias Utilizadas

Para o EP1, as tecnologias e recursos utilizados foram:

- Figma, para criação do protótipo de alta fidelidade;
- Componentes reutilizáveis e auto layout, para manter consistência visual;
- Princípios de UI e UX, para orientar a organização da interface;
- Estrutura de documentação em Markdown, para registrar o projeto no GitHub.

---

## ▶️ Como Executar ou Utilizar a Aplicação

Este entregável é um protótipo no Figma, portanto será por meio da navegação do protótipo.

Para utilizar o material:

1. Acesse o link do Figma na seção correspondente abaixo.
2. Navegue pelas telas do protótipo.
3. Observe os fluxos principais, a organização dos componentes e as decisões visuais.
4. Se necessário, consulte as imagens incluídas neste README para referência rápida das telas.

---

## 🔗 Link do Figma

[Acessar o protótipo no Figma](https://www.figma.com/proto/Y6Gp707VJ8QontEII1u2kv/Projeto-Integrado-III---Sprint-1---Feira-Conectada?node-id=2045-47&t=4iMK7GwI5DYnqT3e-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2145%3A148)

---

## 🖼️ Protótipo de Alta Fidelidade

O MVP foi dividido em duas experiências principais: telas para visitantes, sem login ou cadastro, e telas para usuário logado, com acesso à área administrativa. As interfaces mudam de acordo com o perfil de uso, mas mantêm consistência visual, hierarquia clara e identidade do projeto.

### 👤 Telas para visitantes (usuário não cadastrados/logados)

#### Tela inicial

Mostra a primeira impressão do sistema, com apresentação da proposta da Feira Conectada, destaque para feiras, produtos e produtores, e acesso rápido às principais áreas públicas.

![Tela inicial](./images/tela-inicial-para-visitantes.png)

#### Login e cadastro

Apresenta as telas de autenticação, permitindo que o visitante entre na plataforma ou crie uma nova conta para acessar a área logada.

![Login e cadastro](./images/login-cadastro.png)

#### Feiras 

Exibe o catálogo de feiras com busca, filtros e cards informativos para facilitar a descoberta de opções próximas.

![Feiras](./images/feiras-para-visitantes.png)

#### Mapa de feiras 

Apresenta as feiras em um mapa com pontos de referência e lista lateral, reforçando a navegação por localização.

![Mapa de feiras](./images/mapa-feiras-para-visitantes.png)

#### Produtores 

Mostra produtores em destaque e um diretório com cards, reforçando a conexão entre origem dos produtos e a feira.

![Produtores](./images/produtores-para-visitantes.png)

#### Produtos 

Organiza o catálogo de produtos com categorias, vitrines e paginação, permitindo explorar os itens de forma visual e direta.

![Produtos](./images/produtos-para-visitantes.png)

### 🔒 Telas para usuário logado

#### Dashboard administrativo

Concentra os indicadores estratégicos do sistema, com gráficos, cards e informações de gestão para apoiar decisões administrativas.

![Dashboard administrativo](./images/dashboard.png)

#### Gerenciar feiras

Permite cadastrar uma nova feira por meio de formulário com campos estruturados para organizar dados essenciais da operação.

![Gerenciar feiras](./images/gerenciar-feiras.png)

#### Gerenciar produtos

Permite cadastrar e manter produtos, além de listar os itens já registrados com ações de edição e remoção.

![Gerenciar produtos](./images/gerenciar-produtos.png)

---

## 🧭 Decisões Tomadas ao Longo do Desenvolvimento

Algumas decisões importantes orientaram a construção do protótipo:

- priorizar uma navegação simples, com menos distrações e mais clareza;
- manter consistência de cores, tipografia e espaçamento em todas as telas;
- destacar as informações mais importantes em primeiro plano;
- organizar a interface para facilitar leitura rápida e entendimento do fluxo;
- criar uma base visual que permita evolução gradual nas próximas entregas.

Essas decisões ajudam a transformar o protótipo em uma representação mais próxima do uso real do sistema e tornam a experiência mais previsível para o usuário.

---

## 💡 Importância da Experiência do Usuário (UX)

Um bom design de interface impacta diretamente a forma como as pessoas entendem, usam e confiam em um sistema. Quando uma aplicação é clara, visualmente organizada e fácil de navegar, o usuário encontra o que precisa com menos esforço, comete menos erros e se sente mais seguro para continuar usando a plataforma.

Na prática, isso faz diferença porque sistemas bem projetados tendem a ser mais aceitos no mundo real. Eles reduzem barreiras de aprendizado, aumentam a satisfação e facilitam o acesso de pessoas com perfis diferentes, inclusive aquelas que não têm familiaridade com tecnologia. Por isso, a experiência do usuário não é apenas um detalhe estético: ela influencia diretamente a utilidade, a adoção e o sucesso de uma solução digital.

No Feira Conectada, a preocupação com UX orientou escolhas como organização visual, legibilidade, padronização dos elementos e clareza nos fluxos. O objetivo é que a interface seja compreendida com rapidez e que o protótipo já transmita uma sensação de produto maduro e confiável.

---

## 💼 Possíveis usos da nossa solução

Na prática, o Feira Conectada poderia ajudar uma associação de produtores, uma feira comunitária ou até um pequeno negócio local que precise divulgar seus produtos e organizar informações em um único ambiente digital. Com uma interface clara, pessoas que nunca tiveram contato com o sistema poderiam encontrar feiras, visualizar produtos, localizar produtores e acessar informações importantes com mais facilidade.

Para um negócio real, isso significaria ganhar mais visibilidade, reduzir dúvidas frequentes dos usuários e facilitar o contato entre quem vende e quem compra. Já para o público visitante, a solução poderia tornar a experiência de buscar produtos locais mais simples, rápida e confiável. Mesmo sendo um MVP, o projeto mostra como a tecnologia pode apoiar iniciativas do dia a dia e aproximar serviços digitais de problemas concretos.

---

## ⚙️ O que é Arquitetura de Software?

A arquitetura de software é a estrutura fundamental de um sistema. Ela não se resume apenas a escrever código, mas a tomar decisões estratégicas sobre como os diferentes componentes da aplicação vão se organizar, comunicar e funcionar em conjunto. É como a planta baixa de uma casa: antes de construir as paredes, precisamos definir onde passarão os canos e os fios para que tudo suporte o uso diário.
Sua importância no desenvolvimento de sistemas é vital. Uma boa arquitetura impacta a escalabilidade, permitindo que o projeto "Feira Conectada" suporte um aumento repentino de usuários sem sair do ar. Ela fortalece a segurança, blindando dados sensíveis de produtores e consumidores. Melhora o desempenho, garantindo que as buscas por produtos sejam rápidas. Facilita a manutenção e evolução, pois um código bem estruturado em módulos permite que a equipe adicione novas funcionalidades (como um chat entre produtor e cliente) sem quebrar o que já existe. Em suma, a arquitetura é o pilar que define a qualidade, a vida útil e o sucesso de um projeto de software no mundo real.

---

# 🚀 Entregável Parcial 3 (EP3) - Aplicação Web Funcional

> **Aviso:** Toda a seção abaixo refere-se exclusivamente às evoluções e códigos implementados durante a Sprint 3 (Entregável Parcial 3), onde o projeto evoluiu de um protótipo estático para uma aplicação funcional.

## a) Descrição do projeto

**1. Objetivo do Sistema:**
O objetivo nesta etapa é entregar a versão funcional em código (MVP Web) do Feira Conectada, implementando a interface gráfica validada nas fases anteriores e garantindo uma navegação simples e intuitiva.

**2. Problema que busca resolver:**
Feiras costumam depender de processos descentralizados e informais para divulgar produtos e organizar o acesso do público. O sistema resolve isso centralizando essas informações num ambiente digital claro, reduzindo a confusão e facilitando a busca por produtores locais.

**3. Público-Alvo:**
- **Visitantes / Consumidores:** Pessoas que buscam alimentos frescos e desejam encontrar feiras na região do Cariri.
- **Produtores Rurais:** Agricultores e artesãos que precisam de um canal digital para escoar sua produção.
- **Gestores (Associações):** Administradores que gerenciam feiras e produtores através do sistema.

**4. Principais Funcionalidades Implementadas no EP3:**
- **Navegação Pública (Home):** Visualização de propostas de valor, categorias de produtos e acesso aos módulos principais.
- **Autenticação:** Telas responsivas de Login e Cadastro.
- **Dashboard Administrativo:** Painel de gestão estratégica com simulação de métricas (crescimento de vendas, adesões, tarefas pendentes).
- **Estrutura de Rotas:** Navegação Fluida (SPA) para as telas de "Feiras", "Produtores", "Produtos" e "Mapa".

---

## b) Tecnologias utilizadas

A implementação do EP3 foi feita utilizando as seguintes ferramentas:

- **Linguagem:** `JavaScript (ES6+)`
  - *Justificativa:* Ampla adoção, suporte nativo aos navegadores e integração indispensável com o ecossistema React.
- **Framework Front-end:** `React.js` (via `Vite`)
  - *Justificativa:* O React garante a construção de interfaces através de componentes reutilizáveis (como o Navbar genérico). O Vite foi escolhido como bundler pela extrema velocidade no ambiente de desenvolvimento.
- **Estilização e UI:** `Tailwind CSS v4` e `Lucide React`
  - *Justificativa:* Tailwind agiliza o desenvolvimento com classes utilitárias modernas, evitando arquivos CSS gigantes. Lucide traz ícones SVG padronizados, garantindo consistência visual.
- **Roteamento:** `React Router DOM v7`
  - *Justificativa:* Ferramenta padrão e mais robusta do mercado para construção de Single Page Applications (SPAs) em React.
- **Dados:** Mock local (Front-end)
  - *Justificativa:* O foco do EP3 é validar o fluxo e o front-end. Integrações com banco de dados real ficarão para etapas futuras.

---

## c) Estrutura do projeto

O código-fonte da aplicação React foi organizado modularmente no diretório `src/`:

```text
📦 feira-conectada-mvp
 ┣ 📂 public         # Arquivos estáticos servidos diretamente (ex: favicon.png)
 ┣ 📂 src
 ┃ ┣ 📂 components   # Componentes reutilizáveis em várias telas (ex: Navbar.jsx)
 ┃ ┣ 📂 layouts      # Telas de estrutura (ex: MainLayout.jsx com cabeçalho fixo)
 ┃ ┣ 📂 pages        # Telas que representam páginas completas (Home, Login, Dashboard)
 ┃ ┣ 📜 App.jsx      # Definição e agrupamento de todas as rotas (React Router)
 ┃ ┣ 📜 index.css    # Estilos globais e injeção do framework Tailwind v4
 ┃ ┗ 📜 main.jsx     # Ponto de entrada (Entrypoint) do React no navegador
 ┣ 📜 package.json   # Dependências do Node (Bibliotecas)
 ┗ 📜 vite.config.js # Configurações da ferramenta de build (Vite)
```

---

## d) Instalação e execução

Para que outro desenvolvedor consiga executar o projeto localmente, basta seguir este passo a passo:

**1. Pré-requisitos:**
- Ter o [Node.js](https://nodejs.org/) (versão 18+) instalado.
- Ter o Git instalado.

**2. Download e Configuração do Ambiente:**
No seu terminal, clone o repositório, acesse a pasta da aplicação e instale as dependências:

```bash
# 1. Clone o projeto (se ainda não tiver feito)
git clone https://github.com/weberfern/projeto-integrado-iii-mvp.git

# 2. Acesse a pasta do projeto React
cd "projeto-integrado-iii-mvp/feira-conectada-mvp"

# 3. Instale todas as dependências do package.json
npm install
```

**3. Execução da Aplicação:**
Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

**4. Acesso ao Sistema:**
- O Vite irá iniciar um servidor local. No terminal aparecerá o link (ex: `http://localhost:5173/`).
- Abra esse link no seu navegador.
- Você terá acesso imediato à **Home**. Clicando no botão **"Entrar"**, você visualizará a tela de **Login**.
- Dentro do Login, basta clicar no botão de "Acessar" (mesmo com os campos vazios) para ser redirecionado e testar a estrutura do **Dashboard**.

---
