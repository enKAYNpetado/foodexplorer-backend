# FoodExplorer Backend

Com a API, o administrador tem a capacidade de modificar o menu adicionando, modificando ou removendo pratos. Eles também podem fazer upload de imagens e rastrear o status dos pedidos para garantir que os clientes sejam mantidos informados. Por outro lado, os utilizadores regulares têm o privilégio de navegar pelo menu ou selecionar um prato específico. Eles podem adicionar quantos pratos desejarem ao carrinho e especificar a quantidade. Quando estiverem prontos, eles podem finalizar o pedido selecionando uma forma de pagamento e até criar uma lista de seus pratos preferidos.




## Rodando o projeto



```bash
  npm i
```


```bash
  npm run migrate
```

```bash
  npm run dev
```

Inicie o servidor

```bash
  # Admin login
  $ email: vitorhue4@gmail.com
  $ password: 123456
```
## Endpoints

### Users

`POST`: 
```bash 
/users/
```
para criar um usurário administrador, basta fazer uma requisição em /users/, informando o nome, email, senha e isAdmin = 1; (int). 

### login

`POST`: 
```bash 
/sessions/
```

### Pratos favoritos 

`POST`: 
```bash 
/favorites/
```

`GET`: 
```bash 
/favorites/
```

`DELETE`: 
```bash 
/favorites/:id
```

### Dishes

`POST`: 
```bash 
/dishes/
```

`PUT`: 
```bash 
/dishes/:id
```

`DELETE`: 
```bash 
/dishes/:id
```

`GET`: 
```bash 
/dishes/
```

`GET`: 
```bash 
/dishes/:id
```

`PATCH`: 
```bash 
/dishes/photo/:id
```

### Ver produtos no carrinho

`POST`: 
```bash 
/requests/
```

`GET`: 
```bash 
/requests/
```

`DELETE`: 
```bash 
/requests/:id
```

### Compras feitas

`POST`: 
```bash 
/purchases/
```

`GET`: 
```bash 
/purchases/
```

`PATCH`: 
```bash 
/purchases/:id
```

