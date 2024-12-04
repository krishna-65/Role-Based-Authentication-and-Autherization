Role-Based Authentication and Authorization Dashboard
This project is a Role-Based Authentication and Authorization system built using React, Node.js, and Express, with a focus on providing different access levels based on user roles (e.g., "Admin" and "User").

**Features**
User Authentication:
            Login and logout functionality using JWT tokens.
            Tokens are stored in local storage for session persistence.

Role-Based Authorization:
Different content is displayed based on user roles:
            Admin: Access to an admin panel to view all users and manage permissions.
            User: Access to a user dashboard with their profile and account settings.

Dynamic Routing:
        Users without a valid token are redirected to the login page.
        Admin-specific features are restricted to admin users only.


Responsive UI:
        A clean and responsive design built using Tailwind CSS.


**Technology Stack**
Frontend
        React.js: For building the dynamic UI.
        Axios: For API calls.
        React Router: For navigation and routing.
        Tailwind CSS: For styling components.
Backend
        Node.js: Backend runtime environment.
        Express.js: Web framework for handling API requests.
        MongoDB: Database for storing user data and roles.
        JWT (Json Web Tokens): For secure authentication.

**API Endpoints**
User Routes
        POST /api/auth/register: Register the user with informtaion .
        POST /api/auth/login: Authenticate the user and provide a token.
        GET /api/users: Retrieve logged-in user information (requires a valid token).
        GET /api/users/getALLUsers: Admin-only route to fetch all users.

Role-Based Content
            Admin user can View all users.
            Regular user can View their own profile.
