# Pizza App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Detais](#folder-details)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Pizza App is a simple web application that allows users to browse through different pizza options, add them to a cart, and manage their orders. This project was developed as part of a software engineering internship.

## Features

- User authentication and login functionality
- Browse pizza options
- Add and remove pizzas from the cart
- View cart details and manage orders

## Technologies Used

- **Frontend**: React, Vite, Ant Design, React Router
- **State Management**: Redux
- **Styling**: CSS, Ant Design

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/abdulhaseeb-dharwa/se-internship.git
   cd se-internship/pizza-app
   ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Start the mock server:

    ```bash
    npx json-server -p 3500 -w data/db.json
    ```

## Usage

To start using the application, open your browser and navigate to <http://localhost:3000>. You will be presented with the home page. From here, you can:

- Navigate through the different pizza options.
- Log in with your credentials
- Browse pizzas and add them to your cart
- View and manage your cart.

## Folder Details

`api/`

Contains API-related code for interacting with backend services.

- `pizzaApi.js`: Handles API requests related to pizza data.

`components/`

Contains reusable React components used throughout the application.

- `Cart.jsx`: Displays the cart details and manages cart functionality.
- `LoginForm.jsx`: Handles user login functionality.
- `Navbar.jsx`: Contains the responsive navigation bar.
- `PizzaCard.jsx`: Displays individual pizza information.

`hooks/`

Contains custom React hooks.

- `useAuth.js`: Manages authentication state and logic.

`pages/`

Contains the main pages of the application.

- `Cart.jsx`: The cart page where users can view and manage their cart.
- `Home.jsx`: The home page of the application.
- `Login.jsx`: The login page for user authentication.
- `Pizzas.jsx`: The page displaying available pizzas.

`private/`

Contains components related to protected routes.

- `PrivateRoute.jsx`: Handles route protection based on user authentication.

`redux/`

Contains Redux-related code for state management.

- `actions/`: Contains action creators for Redux.
  - `pizzaActions.js`: Actions related to pizza operations.
- `reducers/`: Contains Redux reducers for state management.
  - `cartReducer.js`: Manages the state of the shopping cart.
  - `userReducer.js`: Manages user authentication state.
- `store.js`: Configures the Redux store.

`services/`

Contains services for handling business logic and API calls.

- `authService.js`: Handles authentication-related logic and API calls.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request.

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

Abdul Haseeb Dharwarwala - <haseebfaisal2002@gmail.com>

```markdown
Feel free to modify any section to better fit your project specifics. Let me know if there's anything specific you'd like to add or change!
```
