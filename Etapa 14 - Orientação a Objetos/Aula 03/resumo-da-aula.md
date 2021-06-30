# Funções construtoras - Aula 03-06

## As classes são na verdade funções construtoras

- Classes em JavaScript não existem, pelo menos não da mesma maneira que em outras linguagens. Em JavaScript as classes são apenas abstrações de funções construtoras.

## O operador new e suas responsabilidades

- O operador ***new*** em uma função construtora possui as mesmas responsabilidades quando usado para invocar uma classe, sendo elas:
    - Criar um objeto vazio no escopo da função construtora;
    - Fazer o ***this*** dentro da função construtora referenciar o objeto que está sendo criado;
    - Invocar a função construtora e fazê-la retornar um objeto com propriedades e métodos já definidos;
    - Criar uma propriedade ***__proto__*** no objeto criado.

## Nomeando uma função construtora

- A primeira letra do nome de uma função construtora deve ser obrigatório para que possamos bater o olho e identificar que ela não é uma função comun, mas sim uma função construtora. Isso é uma convenção adotada, use-a.

## Como declarar uma função construtora

- Declaramos uma função construtora por meio da sintaxe de ***function declaration*** por causa do ***this***. O ***this*** em uma ***arrow function*** não referencia o objeto que está sendo criado pelo **new**, mas sim o objeto que o ***this*** do escopo léxico armazena.
- Uma função construtora é o que realmente é executado por baixo dos panos quando usamos classes.

## Declarar métodos dentro de uma função construtora?

- Não é nada recomendado declarar os métodos do objeto criado dentro do escopo da função construtora, isso porque todas as instâncias dessa função construtora terão métodos semelhantes, que realizam a mesma coisa, porém, estão em posições diferentes na memória.

---

## O que é

- Um objeto de ***prototype*** é um objeto que armazena métodos e propriedades que serão herdados ao longo de uma cadeia de protótipo. Ou seja, sempre que declaramos uma propriedade ou método automaticamente todas as instâncias que herdam esse objeto de ***prototype*** terão acessado a estes métodos e propriedades.
- Cada tipo de objeto em JavaScriot possui seu próprio ***prototype***. Por exemplo, um construtor do tipo ***Date*** armazena uma propriedade ***prototype*** que armazena métodos e propriedades acessíveis apenas para objetos do tipo ***Date***, o mesmo vale para os construtores ***String***, ***Array***, ***Function*** etc**.**

![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b1194d3-846d-4f8d-ab39-caa3490b4df6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T183030Z&X-Amz-Expires=86400&X-Amz-Signature=d4242732ebe8d8e4844d3c67202177a317f2bb6a2a05f03ed7995ed62d18d8cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b1194d3-846d-4f8d-ab39-caa3490b4df6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T183030Z&X-Amz-Expires=86400&X-Amz-Signature=d4242732ebe8d8e4844d3c67202177a317f2bb6a2a05f03ed7995ed62d18d8cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

- Um ***prototype*** é um objeto único na memória que pode ser comparado de forma análoga como um depósito que armazena métodos e propeidades que serão herdados ao longo de uma cadeia de ***prototypes***.

## Problema inicial e solução

- Todas as vezes que um método é declarado diretamente no escopo de uma função construtora todas as instâncias dessa função construtora terão esse método, porém, cada um desses métodos estará em uma posição diferente na memória, e o nome disso é desperdício de memória.
- Para solucionar tal problema posso utilizar os ***prototypes***: um objeto que armazena propriedades e métodos que serão herdados ao longo de uma cadeia de protótipos.

## A propriedade __**proto**__

- Todos os objetos possuem uma propriedade ***__proto__*** que armazena a referência do ***prototype***  do seu construtor.

## O que acontece se uma propriedade/método não existir no objeto?

- Se uma propriedade/método não existe diretamente no objeto a engine do JavaScript percorre toda a cadeia de ***prototypes*** do objeto em busca dessa propriedade/método que está sendo buscado.

## Obtendo e setando um prototype

- A propriedade ***prototype*** que armazena o objeto que será herdado é quanto um ***getter*** quanto um ***setter***, ou seja, por meio dessa propriedade eu posso acessar e também manipular o objeto de ***prototype.***

## Curiosidade a respeito dos prototypes em classes

- Em classes quando declaramos um método o mesmo é armazenado automaticamente no objeto de ***prototype*** dessa classe.

## Métodos estáticos

- São métodos declarados diretamente no construtor. Estes métodos só podem ser acessados por meio do construtor e não pelas suas instâncias. Este tipod e método é útil quando preciso de um método utilitário (útil em situações frequentes na aplicação).
- Geralmente declarado um método estático quando necessito de uma funcionalidade específica para o construtor e não para suas instâncias.

## Métodos anônimos jamais!

- Métodos que são declarados a partir de uma ***function declaration*** anônima possuem uma propriedade ***name*** que armazena uma ***string*** vazia, isso por que nenhum nome foi declarado para o método, pois ele é anônimo. Lembrando: métodos → funções → objetos.
- Não há justificativa para trabalhar com ***function declaration*** anônimos, a não ser que o mesmo seja atribuído para uma variável ou constante.

**JUSTIFICATIVA:** **Todas as vezes que um erro é lançado por causa de um método anônimo a mensagem de erro vai renderizar uma *string* vazia ao invés do nome do método, dificultando o *debugging* da aplicação.**

--- 

# Herança prototipal - Aula 03-08
## Importância de entendê-la

- Entender a herença prototipal vai me permitir entender como o JavaScript compõe objetos e, também que herança clássica não é o que o JavaScript faz.

## Como fazer uma herança prototipal com funções construtoras

- Utilizamos a palavra-chave ***extends*** sempre que queremos definir que uma classe herda métodos e propriedades de outra. Mas isso tudo por baixo dos panos são funções construtoras sendo exutadas.
- Para definir uma função construtora ******que herdará propriedades de outra função construtora devemos primeiramente invocar a função construtora pai dentro da função construtora filha e, fazemos isso por meio dos métodos ***Function.apply*** e/ou ***Function.call**.* Realizando essa invocação o objeto criado a partir da função construtora filha terá todas as propriedades do objeto criado pela função construtora pai.
- Contudo para herdarmos os métodos armazenados no ***prototype*** da função construtora pai nos objetos criados pela função construtora filha devemos criar um novo objeto no ***prototype*** da função construtora filha e fazer esse objeto armazenar a referência do objeto de ***prototype*** da função construtora pai e, isso fazemos por meio do método ***Object.create***.

---

## O método Function.call()

- É um método responsável por invocar a função na qual sua invocação está encadeada, e também setar o valor do ***this*** dentro dessa função.

### Argumentos

1. O valor ***this*** que será utilizado dentro da função que está sendo invocada pelo método.
2. A partir desse argumento adiente é especificado os argumentos que a função invocada irá receber por parâmetro.

### Retorno

- Undefined

---

## O método estático Object.crate()

- É um método utilitário responsável por criar um novo objeto e inserir como ***prototype*** desse novo objeto recém-criado o objeto fornecido como argumento da invocação deste método.

### Argumentos

1. O objeto que será utilizado como ***prototype*** do objeto criado pelo método.

### Retorno

- Um novo objeto que contém como ***prototype*** o objeto fornecido como argumento da invocação do método.

---

## Ilustração do que vimos na aula

- *O objetivo era fazer com que todos os objetos criados a partir da função construtora TeacherAssistant tivessem acesso aos métodos definidos no construtor da função construtora Student.*

![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2bea00d-41a9-42a2-ad50-bfd8be5005ac/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T184839Z&X-Amz-Expires=86400&X-Amz-Signature=b80aa19ec546c72063a426dc0d154fe09711f3d6a03237d4edcb45458e1d4a41&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2bea00d-41a9-42a2-ad50-bfd8be5005ac/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T184839Z&X-Amz-Expires=86400&X-Amz-Signature=b80aa19ec546c72063a426dc0d154fe09711f3d6a03237d4edcb45458e1d4a41&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

--- 

# Factory functions e composição de objetos - Aula 03-09

## O que é?

- É uma alternativa para criar e compor objetos. Trata-se de uma função que não é uma classe, não é uma função construtora, não é um construtor, mas que retorna um novo objeto
- Em JavaScript qalquer função pode retornar um novo objeto, porém, a utilização da factory function me possibilita criar e compor objetos de uma forma simples, manutenível, flexível e testável.

## Declarando um dado privado em uma factory function

- Para declararmos um dado privado em uma classe utilizávamos a features ***private field***, mas para criar um dado privado em uma factory function basta declaramos dentro do seu escopo essa variável e/ou constante, pois o escopo irá delimiar a visilibidade desse dado apenas dentro da factory function.

---

## Clousures

- São criadas todas as vezes que uma função aninhada é criada a partir da invocação de uma função externa.
- É combinação entre uma função aninhada e seu escopo léxico (escopo que envolve a declaração da função).
- Uma clousure é independente uma da outra, posso ter diversas clousures, criadas a partir da mesma invocação, armazenadas na memória.
- Quando uma clousure é criada a referência do escopo léxico a função aninhada é mantida na memória mesmo após a função que cria as funções aninhadas ter terminado sua execução.

```jsx
const external = () => {
	let score = 0
	
	const internal = () => {
		console.log(score)
	}
	
	return internal
}

const internal1 = external() // ƒ internal () {} -> ambiente léxico 1
const internal2 = external() // ƒ internal () {} -> ambiente léxico 2
```

- Quando a ***external*** é invocada ela retorna a referência de uma função chamada ***internal*** que por sua vez armazena a referência do escopo léxico, ou seja, dentro dela é mantido a referência da ***`let score`***. Porém, toda vez que a ***internal*** é executada uma nova ***clousure*** é criada, ou seja, uma nova combinação entre a função aninhada e seu escopo léxico é criada em memória.
- Quando a ***external*** é invocada pela segunda vez nenhum erro é disparado dizendo que já existe na memória uma ***`let score`***, isso se deve pelo fato das ***clousures*** serem uma independente da outra.

---

## Desvantagens ao utilizar classes ou funções construtoras

- Vou tender a fazer herança clássica, e isso não é bom.
    - É inflexível;
    - The gorilla banana problem.
- Complexidade;
- Preciso me preocupar com ***new***, ***this***, construtor com a primeira letra maiúscula, constructor, etc.

## Vantagens das factory functions

- Menos problema para refatoração;
- Não preciso me preocupar com o ***new***;
- O valor do ***this*** volta ao padrão, proporcionando também menos o uso do próprio ***this***, e isso é bom porque o ***this*** é imprevisível e quanto mais previsível é minha aplicação melhor é.

### Desvantagens das factory functions

- Microotimizadamente mais lenta que as classes. Porém isso só devo me preocupar depois de fazer a perceived perfomance (performance percebida).