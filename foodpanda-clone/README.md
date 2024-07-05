
# FoodPanda Clone - React + Vite

This project is a clone of the FoodPanda website built using React and Vite. It includes routing, error handling, and a layout with a header and footer.

## Getting Started

This template provides a minimal setup to get a FoodPanda clone working with React in Vite with HMR (Hot Module Replacement) and some ESLint rules.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/foodpanda-clone.git
   ```

2. Navigate to the project directory:

   ```sh
   cd foodpanda-clone
   ```

3. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

## Development

### Start Development Server

To start the development server with hot module replacement:

```sh
npm run dev
# or
yarn dev
```

This will open the project in your default web browser. If it doesn't, you can manually visit [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the project for production:

```sh
npm run build
# or
yarn build
```

This will create an optimized build in the `dist` directory.

## Project Structure

```
public/
  favicon.png         # Your project's favicon
src/
  components/
    Header.jsx        # The header component
    Footer.jsx        # The footer component (if you have one)
    Layout.jsx        # The layout component that includes header, footer, and main content
  pages/
    Home.jsx          # The home page component
    Restaurants.jsx   # The restaurants page component
    error.jsx         # The error page component
  App.jsx             # The main app component
  main.jsx            # The entry point of the application
  index.css           # Global styles
index.html            # The main HTML file
```

## Features

- **React Router:** For client-side routing.
- **Error Handling:** Custom error page for handling 404 errors.
- **Layout:** A common layout that includes a header and footer.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run serve`: Serves the production build from the `dist` folder.

## Learn More

To learn more about React and Vite, check out the following resources:

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): For Fast Refresh using Babel
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): For Fast Refresh using SWC

## Contributing

Feel free to submit issues and pull requests!

## License

This project is licensed under the MIT License.