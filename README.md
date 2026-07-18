<img width="507" height="293" alt="tastyNest_mockup" src="https://github.com/user-attachments/assets/37bca80d-7b5b-47de-8ddc-7fb318c619ff" />


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

# Tech Stack
###  Frontend
- React
- React Router 
- Tailwind CSS + DaisyUI
- Firebase Authentication

###  Backend
- Node.js
- Express.js
- MongoDB Atlas
- JSON Web Tokens (JWT)
- CORS & Dotenv

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

## Setup & Installation
#### 1. Clone the repo:

```
git clone [https://github.com/helal366/flexora_client.git](https://github.com/helal366/tastyNest_client.git)
cd tastyNest_client
```


#### 2. Install dependencies:
```
npm install
```

#### 3. Create a .env file with required environment variables (see below).
```
VITE_apiKey="YOUR API KEY"
VITE_authDomain="YOUR AUTH DOMAIN"
VITE_projectId="YOUR PROJECT ID"
VITE_storageBucket="YOUR STORAGE BUCKET"
VITE_messagingSenderId="YOUR MESSAGING SENDER"
VITE_appId="YOUR APP ID"
```

#### 4. Run the server:
```
npm start
```

