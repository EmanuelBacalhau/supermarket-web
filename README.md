# Supermarket Unifacisa - Trabalho da faculdade!!

## É necessário executar o servidor
## Segue o link: https://github.com/EmanuelBacalhau/supermarket-unifacisa

## Comandos necessários para iniciar o projeto

### -> npm i ou npm install
### -> npm run dev

### Telas

#### Login

<img src="/public/telas/login.png">

##### Para acessarmos nosso app é preciso ter um usuário cadastrado, caso não tenha e tentar por um usuário fictício aparecerá um toast no canto superior direito, o campo de email e password são obrigatórios. 
##### Clicando em “Do not have an account? Register” você é direcionado para uma nova página, sendo ela a de criar um novo usuário.

#### Sign up

<img src="/public/telas/signUp.png">

##### Nesta página, precisamos passar os campos: name, cpf, birthday, email, password, confirm password. Todos eles são obrigatórios, existe algumas validações, sendo elas: O birthday não pode ser maior que o dia atual; O email é único, ou seja, não pode ser criado usuários com email iguais; Os campos password e confirm password devem ser idênticos.
 
##### Caso não corresponda algumas dessas validações, aparecerá um toast no canto superior direito.
##### Clicando em “Already have an account? Access”, você é redirecionado para tela de login.

#### Dashboard

<img src="/public/telas/dashboard.png">

##### Aqui será onde aparecerá todos os produtos criados e um navbar para página de categoria (responsável pela a criação das categorias) e para página de produtos (responsável por criar o produto), essa página precisa estar autenticada e com um token válido, caso seja um token “fake”, você será redirecionado para página de login, assim que você atualizar a página ou tentar acessar um nova página.
##### Nesta tela também será possível excluir um produto, clicando no ícone da lixeira no canto superior do card.

#### Category

<img src="/public/telas/category.png">

##### Nesta página, precisamos passar o nome da categoria para ser criada, esse campo é obrigatório e único, só pode existir uma categoria com o mesmo nome, caso passe o mesmo nome, aparecerá um toast, nele conterá um mensagem falando que já existe categoria com esse nome. Esta página, também é autenticada, só pode ser acessada caso seu token seja válido.

#### Product

<img src="/public/telas/product.png">

##### Nesta página, essa página é responsável por criar um novo produto, precisamos passar esses campos: image, name, description, bar code, category, price, amount, manufacturing date, expiration date. Todos esses campos são obrigatórios, e existem validações, sendo elas: o bar code é único, e a expiration date deve ser maior manufacturing date, caso algum dos campos não passar nas validações, aparecerá um toast de erro. Esta página, também é autenticada, só pode ser acessada caso seu token seja válido.

##### E por fim, ao clicar no botão de logout você é desconectado do sistema.
