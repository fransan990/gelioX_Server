# gelioX_Server

| Method | URL | Description |
|--------|-----|-------------|
|SERVER| | |
| | | |
| AUTH | | |
| `GET` | `/signup` | Sign up |
| `POST` | `/signup` | Sign up |
| `GET` | `/login` | Log in |
| `POST` | `/login` | Log in |
| `POST` | `/logout` | Log out |
| | | |
| USERS | | |
| `GET` | `/` | All Users | 
| `PUT` |	`/:user_id/edit` | Edit User | 
| `DELETE` | `/:user_id/delete` | Delete User | 
| `POST` | `/:user_id/backOffice` | All BackOffice | 
| | | |
| PRODUCTS | | |
| `GET` | `/` | All product | 
| `POST` | `/create` | Create product | 
| `PUT` | `/:id/edit` | Edit product | 
| `DELETE` | `/:id/delete` | Delete product | 
| `GET` | `/:id/save` | Saved Product | 
| `POST` | `/:id/savedCart` | Cart | 
| `GET` | `/:id/details` | Details Product | 
| | | |
| CLIENT | | |
| | | |
| CLIENT | | |
| `GET` | `/` | Home | 
| `GET` | `/about` | About | 
| `GET` | `/products` | All products | 
| `GET` | `/product/:id` | Details product | 
| | | |
| PROFILES | | |
| `GET` | `/profile/:id` | View profiles |
| `GET` | `/profile/:id/edit` | Details profiles |

+ Components
    + Carousel
        + Carousel.jsx
        + Carousel.css
    + Footer
        + Footer.jsx
        + Footer.css
    + Nav
        + Nav.jsx
        + Nav.css
    + NewProductForm
        + NewProductForm.jsx
        + NewProductForm.css
    + ProductCard
        + ProductCard.jsx
        + ProductCard.css
    + ProductDetails
        + ProductDetails.jsx
        + ProductDetails.css
    + Products
        + Products.jsx
        + Products.css
    + ProductsList
        + ProductsList.jsx
        + ProductsList.css
    + Slider
        + Slider.jsx
        + Slider.css

   
