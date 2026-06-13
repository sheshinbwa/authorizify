# Authorizify

A React authentication system designed for secure user management and authentication flows.

## Key Features

- **User Authentication**: Secure Login and Registration forms.
- **Account Recovery**: Forgot Password, Password Reset, and Account Verification flows.
- **State Management**: Uses React Context API for centralized authentication state handling.
- **Routing**: Implemented with React Router v7 for robust navigation, including protected routes and URL parameters.
- **API Integration**: Axios configured with `withCredentials: true` to handle cookie-based authentication securely.
- **Styling**: Clean and consistent CSS design across all pages (Login, Dashboard, Verification, etc.).

## Skills Learned

- **React Core**: Leveraged functional components and React Hooks (`useState`, `useEffect`, `useContext`, `useNavigate`, `useParams`).
- **Global State**: Developed a custom `AuthContext` to manage user sessions and authentication status globally.
- **Advanced Routing**: Configured complex routing patterns using `react-router` v7, including dynamic routes with parameters for verification and password reset workflows.
- **HTTP Client Configuration**: Configured `axios` to ensure secure transmission of cookies and tokens for backend interaction.
- **UI Consistency**: Applied modular CSS to create a professional and unified interface.

## Setup & Running

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Access Application**: Open the local URL provided by the development server (usually `http://localhost:4000`).
