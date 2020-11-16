let user = {
  name: 'John',
  age: 19,
  email: 'john@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
}

// console.log(user) Obtém a referência do objeto.

// console.log(user.name) Acessa o valor da propriedade name do objeto user.

/*
  - Sobrescrevendo o valor da propriedade city do objeto user.

  user.city = 'Rio de Janeiro'
  console.log(user.city)
*/

// console.log(user['name']) Acessando o valor de uma propriedade por notação de colchete.

/*
  - Sobrescreve o valor da propriedade age do objeto user, por meio da notação de colchete.

  user['age'] = 25
  console.log(user['age'])
*/

/*
  - Uma das vantagens de se utilizar notação de colchete é que a string que passamos dentro dos colchetes pode ser armazenada em uma variável, e depois só referenciamos esta variável para acessar a propriedade que desejamos.

  const property = 'name'  
  console.log(user[property])
*/

// console.log(typeof user) Obtém o tipo de dado, no caso um "object".