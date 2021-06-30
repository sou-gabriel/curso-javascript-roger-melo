# O que é orientação a objetos - Aula 02-05
## Definição

- Orientação a objetos é uma maneira de programar, ou seja, é um paradigma onde dados são armazenados em objetos.
- O JavaScript é uma linguagem fortemente orientada a objetos. Nota-se também que é possível combinar diversos paradigmas, pois o JavaScript apesar de ser fortemente orientado a objetos é uma linguagem multiparadigma.

## Tipos de dados em JavaScript

### Tipos primitivos

- String
- Boolean
- Null
- BigInt

### Tipos de referência

- São todos os objetos.

## Construtores

### Definição

- São utilizados basicamente para criar novos objetos.

### O operador new

- Este operador é utilizado para fazer com que a invocação de um construtor retorne um novo objeto.

### Construindo um novo objeto: Construtores *vs* Literais

- Sempre prefeira criar objetos da forma literal, até porque no final das contas o resultado será o mesmo, mas com bem menos energia gasta comparado a utilização de um construtor.

### Wrapper Object

- São construtores que por baixo dos panos envolve um valor do tipo primitivo.
- Todas as vezes que encadeamos uma propriedade ou método em um valor do tipo primitivo um Wrapper Object é criado na memória para que a propriedade ou método que estamos acessando seja executado.
- A ação que ocorre por baixo dos panos é essa:

![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/01f4454c-9284-4566-bfdd-060a721a6e02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T191644Z&X-Amz-Expires=86400&X-Amz-Signature=3a06f03967d2ef60b70700c4bea890cf8a6b1681ea48388e910916e06b85981b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/01f4454c-9284-4566-bfdd-060a721a6e02/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T191644Z&X-Amz-Expires=86400&X-Amz-Signature=3a06f03967d2ef60b70700c4bea890cf8a6b1681ea48388e910916e06b85981b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

- O Wrapper Object é removido da memória toda vez que a execução da propriedade ou método termina.
- Em JavaScript nem todos os valores são objetos, mas quase todos os valores se comportam como tal quando envolvidos por um Wrapper Object.
- Null e undefined são os dois valores primitivos que não são envolvidos num Wrapper Object.

--- 

Introdução a Classes - Aula 02-06
## Definição

- É um tipo de **construtor**.
- Classes em JavaScript é uma abstração de prototypes. Ou seja, por baixo dos panos uma classe trabalha com prototypes.
- Um construtor como uma classe, por exemplo, pode ser entendido como um modelo para criação de um objeto.
- Geralmente utilizamos algum tipo de construtor quando queremos criar multiplos objetos com características semelhantes.
- É dentro do corpo da classe que é setado todas as características (propriedades) e ações (métodos) do objeto criado.
- Um construtor (independente de qual seja) deve ser sempre nomeada com a primeira letra do nome maiúscula.
- O método **constructor** é um método especial da classe responsável por criar as propriedades no objeto que a classe gera.

## Operador new

- O operador **new** é responsável por 4 coisas:
    - Criar um objeto vazio no escopo da classe;
    - Fazer o **this** referenciar o objeto que está sendo criado no escopo da classe;
    - Criar uma propriedade **__proto__** nas instâncias da classe;
    - Faz com que a invocação do **construtor** retorne um novo objeto.

## O que é uma instância

- Trata-se de um objeto criado a partir de algum construtor.

## Analogias

Podemos comparar uma classe a um blue-print ou com uma planta de uma casa, por exemplo. Ambos são modelos para criação de algo, e com as classes não é diferente.

![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8afe241b-8492-4990-9ef7-333215ade908/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T191719Z&X-Amz-Expires=86400&X-Amz-Signature=ca8f848dbaeb93cdcd5422a22b491df31fa2b36786b4c2ea55bcce9ff6c899ee&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8afe241b-8492-4990-9ef7-333215ade908/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T191719Z&X-Amz-Expires=86400&X-Amz-Signature=ca8f848dbaeb93cdcd5422a22b491df31fa2b36786b4c2ea55bcce9ff6c899ee&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3df8dec-d9de-4d91-9ed8-8042b2f91388/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T191728Z&X-Amz-Expires=86400&X-Amz-Signature=af76cf2abbbbd2353a1d9360e4fdaf92685d4a5689e9e86262b10b9d65e5a4b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3df8dec-d9de-4d91-9ed8-8042b2f91388/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210630T191728Z&X-Amz-Expires=86400&X-Amz-Signature=af76cf2abbbbd2353a1d9360e4fdaf92685d4a5689e9e86262b10b9d65e5a4b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

--- 

# Métodos em classes - Aula 02-07

## Como declará-los

- Os métodos que serão criados numa instância de uma classe são declarados fora do método ***constructor***.

--- 

# Herança entre classes 02-08

## Como realizar a herença entre classes

- Utilizamos palavra-chave **extends** é utilizada para realizar a ligação de uma classe a outra. Utilizando-o criamos uma subclasse que herdará propriedades e métodos de uma superclasse.

## Herdando propriedades e métodos

- Uma **subclasse** herda propriedades e métodos de uma **superclasse**.
- É totalmente possível que uma **subclasse** tenha suas características (propriedades) e ações (métodos) únicos.
- Quando uma **subclasse** não possui um método especial **constructor** declarado o **constructor** da superclasse será utilizado.

## O super

- É uma palavra-chave utilizada para acessar a **superclasse**.
- Quando utilizamos essa palavra-chave dentro de um método **constructor** ela deve ser invocada para que o **constructor** da **superclasse** seja executado.
- Para acessar métodos de uma **superclasse** podemos utilizar essa palavra-chave.