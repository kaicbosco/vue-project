# Tarefa 2: Anatomia de SFC

## Principais Descobertas

### 1. Script Setup

As principais particularidades do script setup são a automação do processo de codar o setup(), tirando a antiga necessidade de declarar ele dentro da tag de script, e a remoção da necessidade de retornar manualmente qualquer conteúdo, fazendo com o que o Vue assuma automaticamente tudo que for declarado, além do que deve estar disponível no template.

### 2. Reatividade

O ref se trata de uma função com o papel de declarar um estado reativo. Após receber o argumento, ela realiza o retorno do argumento criando um objeto de referência e armazenando-o dentro dele juntamente da propriedade .value. Simplificando, a função ref é chamada para armazenar um valor de variável (que antes seria uma variável comum) qualquer dentro de um objeto reativo de referência e nos permitindo acessar esse objeto com .value, tornando-a assim uma variável reativa.
O reactive() segue a mesma proposta, porém ele possui menos flexibilidade e mais limitações devido ao fato de não permitir alterações após sua aplicação (caso contrário é causada a perca de reatividade), ser limitado ao funcionamento apenas com tipos de objetos (objetos e vetores) e não conseguir funcionar com tipos primitivos (string, number ou boolean), não possuir um processo amigável de desestruturação, entre outros.
(Leia mais sobre reatividade na documentação oficial: https://pt.vuejs.org/guide/essentials/reactivity-fundamentals.html)

### 3. Computed Properties

As funções computed possuem uma grande diferença em específico que pode ser muito vantajosa em certos cenários se comparada com as funções comuns (methods), essa diferença é chamada de Caching Reativo.
De forma curta e simples de entender, o caching reativo aplica uma particularidade às funções computed que é o comportamento de executá-las apenas quando alguma dependência da mesma sofrer alterações, consequentemente aumentando sua performance e eficiência visando "filtrar" os processos desnecessários e poupar processamento.
Essa é a grande diferença. Funções comuns do tipo method sempre serão executadas quando interpretadas ou chamadas.

### 4. Scoped Styles

O Vue utiliza o mecanismo de Scoped CSS para definir qual stylesheet único será aplicado a certo componente, tornando aquele stylesheet aplicável e utilizável
exclusivamente no componente declarado. Ou seja, com o a tag "style scoped" presente no seu componente, essa particularidade de exclusividade do estilo evitará mudanças globais (como h1 {},entre outros) ou até mesmo conflitos entre nomes de classes repetidos, já que a estilização daquele componente que estiver utilizando scoped só poderá ser alterada dentro de seu próprio CSS.
