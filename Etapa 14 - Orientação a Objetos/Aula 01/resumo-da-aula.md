# Etapa 14 (Orientação a Objetos) - Aula 01 

## O que é o spread operator?

- Trata-se de uma feature de espalhamento. Posso utilizá-lo todas as vezes que precisar espalhar propriedades de um objeto literal dentro de um novo objeto, por exemplo. Ou então espalhar um array literal e/ou uma string dentro de um novo array literal ou na invocação de uma função.
- O espalhamento deve ocorrer em locais esperados, ou seja, não posso utilizá-lo em qualquer parte do meu código.

## Como o spread copia os valores?

O spread realiza uma cópia rasa dos valores que ele está espalhando, isso significa que, objetos aninhados ao invés de serem copiados são referenciados. Mas, em contrapartida, valores do primitivo são de fato copiados e armazenados em uma nova posição na memória, mais precisamente na stack.

## Sobrescrevendo propriedades em um objeto

- A última propriedade declarada sempre sobrescreverá propriedades de mesmo nome declaradas anteriormente à ela no objeto.

```jsx
const user = {
	name: undefined,
	name: 'Gabriel'
}

console.log(user) // -> { name: 'Gabriel' }

```

## Inspecionando de forma interativa as propriedades de um objeto

- Utilizamos o método *`dir()`* do *`console`* para acessar todas as propriedades e métodos de um objeto no devTools.