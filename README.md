# JWT Authentication with Access & Refresh Tokens

## Overview
This is a sample application demonstrating how to implement authentication using JWT access tokens and refresh tokens. The project utilizes:

- **Express.js** for backend API development
- **JWT (JSON Web Token)** for authentication
- **Axios interceptors** for handling token refresh in the frontend

## Features
- User login & authentication
- Access token generation
- Refresh token implementation
- Automatic token refresh using Axios interceptors
- Secure API routes using JWT middleware

## Technologies Used
- Node.js
- Express.js
- JSON Web Token (JWT)
- Axios
- dotenv (for environment variables)

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   cd repository-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:
   ```env
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
### Authentication
- `POST /login` - Authenticate user and return access & refresh tokens
- `POST /refresh` - Refresh expired access token
- `POST /logout` - Invalidate refresh token

### Protected Routes
- `GET /protected` - Example of a protected route that requires authentication

## Token Handling with Axios
- Axios interceptors are used to automatically refresh tokens when an access token expires.
- If the refresh token is invalid or expired, the user is logged out.

## License
This project is licensed under the MIT License.

## Contributing
Pull requests are welcome! Feel free to open an issue for feature requests or bug reports.

## Author
[Harshavardhan](https://github.com/02harsha)
