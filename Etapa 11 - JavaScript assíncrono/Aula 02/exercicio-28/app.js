/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  const isRequestOk = request.readyState === 4 && request.status === 200
  const isRequestNotOk = request.readyState === 4

  if (isRequestOk) {
    console.log(request.responseText)
    return
  }

  if (isRequestNotOk) {
    console.log('Não foi possível obter os dados do pokémon')
  }
})

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachuu')
request.send()

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const person = {
  name: 'Gabriel',
  lastName: 'Ramos',
  gender: 'Masculino',
  age: 20,
  height: 1.75,
  weight: 1.55,
  isWalking: false,
  walkedMeters: 0
}

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

person.incrementAge = () => {
  person.age++
}

for (let i = 0; i < 5; i++) {
  person.incrementAge()
}

console.log(person.age)

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

person.walk = meters => {
  person.walkedMeters += meters
  person.isWalking = true
}

const meters = [10, 17, 5, 81]

meters.forEach(meter => person.walk(meter))

console.log(person.walkedMeters)

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const getSingularOrPlural = (quantity, singular, plural) => {
  return quantity === 1 ? singular : plural
}

person.getIntroduction = () => {
  const { gender, age, height, walkedMeters, name, lastName, weight } = person
  const correctGender = gender === 'Feminino' ? 'a' : 'o'
  const ageInSingularOrPlural = getSingularOrPlural(age, 'ano', 'anos')
  const heightMeterInSingularOrPlural = 
    getSingularOrPlural(height, 'metro', 'metros')
  const walkedMetersInSingularOrPlural = 
    getSingularOrPlural(walkedMeters, 'metro', 'metros')
    
  return `Oi. Eu sou ${correctGender} ${name} ${lastName}, tenho ${age} ${ageInSingularOrPlural}, ${height} ${heightMeterInSingularOrPlural} de altura, peso ${weight} quilos e, só hoje, eu já caminhei ${walkedMeters} ${walkedMetersInSingularOrPlural}.`
}

console.log(person.getIntroduction())

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const isTruthy = value => Boolean(value)

const falsyValues = [false, 0, '', null, undefined, NaN]
const truthyValues = [[], {}, 1, () => {}, 'Oi', function () {}, '0']

falsyValues.forEach(falsyValue => {
  console.log(isTruthy(falsyValue))
})

truthyValues.forEach(truthyValue => {
  console.log(isTruthy(truthyValue))
})

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const getBook = bookName => {
  const books = {
    'O poder da ação': {
      pages: 256,
      author: 'Paulo Vieira',
      publishingCompany: 'Gente' 
    },
    'O poder do hábito': {
      pages: 464,
      author: 'Charles Duhigg',
      publishingCompany: 'Objetiva'
    },
    'Jurassic Park': {
      pages: 528,
      author: 'Michael Crichton',
      publishingCompany: 'Editora Aleph'
    }
  }

  return books[bookName] || books
}

console.log(getBook('Jurassic Park'))