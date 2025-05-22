# Project Name: tastyNest
**tastyNest** is a modern, responsive web application focused on delivering a delightful food experience online. Whether you want to explore new recipes, order tasty meals, or share your food adventures, tastyNest is your go-to platform!

# Purpose
The primary goal of tastyNest is to offer a platform for food enthusiasts to discover and share culinary creations. It provides a seamless and interactive interface for browsing recipes based on cuisine types, managing personal recipes, and securely logging in via email or Google.

# Live link
You can access the live link here:  
https://client-tastynest.web.app/

# Features
## User Authentication (Email/Password + Google Sign-In)
- Secure login and registration using Firebase Authentication.
- Supports both traditional email/password and Google OAuth.
- Stores user session to manage access to private routes.

## Light/Dark Theme Toggle
- Allows users to switch between light and dark modes.
- Remembers the selected theme using localStorage.
- Integrates with daisyUI to apply theme styling site-wide.

## Browse All Recipes by Cuisine Type
- Dynamically fetches and displays recipes categorized by cuisine.
- “All” option shows every available recipe regardless of cuisine.
- Cuisine types are extracted from the recipe data automatically.

## Add and Manage Your Own Recipes
- Logged-in users can submit new recipes with full details.
- Recipes are associated with the user's account.
- Users can view and manage their submitted recipes via “My Recipes”.

## Private Route Protection for Authenticated Users
- Routes like "Add Recipe" and "My Recipes" are restricted to logged-in users.
- Unauthorized users are redirected to the login page.
- Ensures secure access to sensitive features.

## Responsive Design
- Mobile-first layout using Tailwind CSS and Flexbox/Grid.
- Navigation and content adapt smoothly to all screen sizes.
- Hamburger menu enabled for mobile viewports.

## Toast Notifications for Real-Time Feedback
- Uses react-toastify for real-time alert messages.
- Displays success/error notifications for login, logout, registration, etc.
- Improves UX by providing instant feedback.

## Social Media Icons in Footer
- Includes Facebook, Twitter, YouTube, and Instagram icons.
- Styled using react-icons for consistent design.
- Easy to extend with links to social profiles or contact pages.

# NPM Packages Used
- React.js  
- React Router  
- Firebase Authentication  
- React Toastify  
- Tailwind CSS
- Daisy UI  
- React Icons 
- Sweet Alert2
- React Lottie
- React Type Writer
- React Slick






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
