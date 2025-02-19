# Node Users API

This project is a REST API built using Node.js, Fastify, and pnpm. It's designed for use within an Administrator Platform, providing user management functionalities.

## Features

*   **User Creation:** Allows creation of users with either `ADMIN` or `USER_MEMBER` roles.
*   **User Update:** Enables modification of existing user details.
*   **User Deletion:** Provides functionality to delete users.
*   **Authentication:**
    *   JWT (JSON Web Token) based authentication for secure access.
    *   Refresh token mechanism for renewing access tokens without requiring re-login.
*   **User Listing:** Exposes all user information (accessible only to users with the `ADMIN` role).

## Technologies Used

*   Node.js
*   Fastify 
*   pnpm 
*   JWT 
*   Prisma
*   PostgreSQL
*   Docker

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/JulioRarick/node-users-api
    ```

2.  Navigate to the project directory:

    ```bash
    cd node-users-api
    ```

3.  Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

## Development


1. Up docker container:

    ```bash
    docker compose up -d
    ```

2. Default variables for application `.env.local`

- PORT=
- NODE_ENV=

#### Authentication

- JWT_SECRET=

#### Database

- DATABASE_URL=

3. Init PostgreSQL database with Prisma:

    ```bash
    pnpm dlx prisma db push
    ```

4. Start the development server:

    ```bash
    pnpm run dev 
    ```
