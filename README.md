# Video Content Sales & Subscription Platform

A platform for selling video content through one-time purchases and subscriptions.

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Firebase Functions
- **Authentication**: Firebase Authentication
- **Payment Processing**: Stripe
- **Database**: Firestore
- **Video Hosting**: Vimeo with signed URLs
- **Development Environment**: Docker & Docker Compose

## Features

1. Home page with featured and new videos
2. Video details page
3. Purchase options (one-time or subscription)
4. Stripe payment integration
5. User authentication
6. User dashboard (purchase history, viewing history)
7. Video player with access control
8. Admin dashboard for content management

## Project Structure

The project follows a modular architecture with clear separation of concerns:

- `src/app`: Next.js App Router pages and layouts
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and shared code
- `src/services`: External service integrations (Firebase, Stripe, etc.)
- `src/types`: TypeScript type definitions
- `src/hooks`: Custom React hooks
- `src/styles`: Global styles and theme configuration
- `public`: Static assets
- `functions`: Firebase Cloud Functions
- `docker-compose.yml`: Docker Compose configuration
- `Dockerfile` & `Dockerfile.dev`: Docker configurations

## Docker Development Environment

This project uses Docker to provide a consistent development environment without installing dependencies directly on your local machine.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Setup Instructions

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Configure environment variables

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your Firebase, Stripe, and Vimeo credentials.

3. Start the Docker containers

   ```bash
   docker-compose up -d
   ```

4. Access the application

   - Frontend: http://localhost:3000
   - Firebase Emulator UI: http://localhost:4000
   - Stripe Mock: http://localhost:12111

5. Stop the containers
   ```bash
   docker-compose down
   ```

### Docker Services

- **frontend**: Next.js application with hot reloading
- **firebase-emulator**: Firebase emulator for local development
- **stripe-mock**: Mock Stripe API for testing payments

### Development Workflow

1. Make changes to the code
2. The changes will be automatically reflected due to volume mounting
3. If you need to install new dependencies:

   ```bash
   docker-compose exec frontend npm install <package-name>
   ```

4. To run commands inside the container:
   ```bash
   docker-compose exec frontend <command>
   ```

## Manual Setup (Without Docker)

If you prefer not to use Docker, you can set up the project manually:

1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local`
3. Run the development server: `npm run dev`

## Environment Variables

Create a `.env` file with the following variables:

```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@your_project_id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Firebase Admin SDK private key here\n-----END PRIVATE KEY-----\n"

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Vimeo Configuration
VIMEO_ACCESS_TOKEN=your_vimeo_access_token
VIMEO_CLIENT_ID=your_vimeo_client_id
VIMEO_CLIENT_SECRET=your_vimeo_client_secret
```

## Building for Production

To build the application for production:

```bash
# Using Docker
docker build -t videohub-production .
docker run -p 3000:3000 videohub-production

# Without Docker
npm run build
npm start
```

## VS Code DevContainer Setup

This project includes configuration for developing with VS Code's Remote Containers feature. This provides a consistent development environment for all team members without installing dependencies directly on your local machine.

### Prerequisites

- Docker and Docker Compose installed
- VS Code with the Remote - Containers extension

### Getting Started with DevContainer

1. Open the project in VS Code
2. When prompted, click "Reopen in Container" or run the "Remote-Containers: Reopen in Container" command from the Command Palette (F1)
3. VS Code will build the container and set up the development environment
4. Once the container is built, you can start developing!

For more details, see the [DevContainer README](.devcontainer/README.md).
