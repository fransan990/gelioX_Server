# gelioX (Ecommerce) 🛒👕

<img  src="https://github.com/fransan990/gelioX_Client/blob/main/public/images/InicioPagina.png" style="max-width: 100%;"/>

## TEST OUR WEB

<p>netlify (Front-End)</p>
<a href="https://geliox.netlify.app/" target="_blank" rel="noreferrer"> 
 <p>gelioX</p>
</a>

<p>Glitch (Back-End)</p>

## ABOUT

<p> Web application in which users can see all the products created by themselves and by the community and search for any other product or save it in the shopping cart to buy it later. They can also save the products they like the most in their profiles so they can buy them later and they can also like the products they have liked. </p>

## LANGUAJES AND TOOLS

<p align="left">
 
 <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
 </a>

 <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
  <img src="https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain-wordmark.svg" title="CSS3" alt="CSS" width="40" height="40" style="max-width: 100%;">
 </a>
 
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>  </a>



<a href="https://es.reactjs.org/" target="_blank" rel="noreferrer"> 
  <img src="https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"></a>
  

<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
 </a> 
 
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
 
 <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>  </a>
 
</p>



## RUTES Back-End


### Auth

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `POST` | `/api/auth/signup` | Signup | False |  | 
| `POST`| `/api/auth/login` | Login | False | All | 
| `GET` | `/api/auth/verify` | Login | True | All | 


### User

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `GET` | `/api/user/profile` | Profile | True | All | 
| `PUT`| `/api/user/editProfile` | EditProfile | False | All | 


### Cart

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `GET` | `/api/cart/getCart` | Cart | True | All | 
| `POST`| `/api/cart/addItem` | AddItem | True | All | 
| `PUT`| `/api/cart/updateQuantity` | UpdateQuantity | True | All | 
| `PUT`| `/api/cart/deleteItem` | DeleteItem | True | All | 
| `GET`| `/api/cart/getAllItems` | AllItems | True | All | 


### Comment

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `POST` | `/api/comment/createComment` | CreateComment | True | All | 
| `GET`| `/api/comment/getAllComments` | AllComments | True | All | 
| `POST`| `/api/comment/edit/:id` | EditComment | True | All | 
| `POST`| `/api/comment/delete/:id` | DeleteComment | False | All | 


### Order

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `POST` | `/api/order/createOrder/:cart` | CreateOrder | True | All | 
| `GET`| `/api/order/getOrder` | OneOrder | True | All | 


### Products

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `GET` | `/api/product/getAllProducts` | AllProducts | False | All | 
| `GET`| `/api/product/editProduct/:id` | EditProduct | False | All | 
| `GET`| `/api/product/getOneProduct/:product_id` | OneProduct | False | All | 
| `POST`| `/api/product/saveProduct` | SaveProduct | False | All | 
| `POST`| `/api/product/productdelete/:id` | ProductDelete | False | All | 
| `POST`| `/api/product/visitCounter/:id` | Counter OneProduct | False | All | 
| `POST`| `/api/product/visitCounter` | Counter | False | All |
| `GET`| `/api/product/listProductSearch` | listProductSearch | False | All |
| `POST`| `/api/product/:id/productFav` | ProductFav | TRUE | All | 
| `POST`| `/api/product/:id/productUnFav` | ProductFavList | TRUE | All |
| `GET`| `/api/product/listProductSize/:form` | ProductSize | FALSE | All | 


### Upload

| Method | URL | Description | Protected | Roles |
|--------|-----|-------------|-----------|-------|
| `POST` | `/api/upload/image` | UploadImage | True | All | 

   
