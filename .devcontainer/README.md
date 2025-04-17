# VS Code DevContainer for VideoHub

This directory contains configuration files for developing the VideoHub application using VS Code's Remote Containers feature.

## Prerequisites

1. [Docker](https://www.docker.com/products/docker-desktop) installed and running
2. [Visual Studio Code](https://code.visualstudio.com/) installed
3. [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed in VS Code

## Getting Started

1. Clone the repository to your local machine
2. Copy `.env.example` to `.env` and fill in the required environment variables
3. Open the project folder in VS Code
4. When prompted, click "Reopen in Container" or run the "Remote-Containers: Reopen in Container" command from the Command Palette (F1)
5. VS Code will build the container and set up the development environment (this may take a few minutes the first time)
6. Once the container is built, you can start developing!

## What's Included

The DevContainer setup includes:

- Next.js development environment with hot reloading
- Firebase emulator for local development
- Stripe mock for payment testing
- Pre-configured VS Code settings and extensions
- TypeScript support
- ESLint and Prettier for code quality
- Tailwind CSS support

## Container Structure

The development environment consists of the following services:

- **frontend**: Next.js application with hot reloading
- **firebase-emulator**: Local Firebase emulator for authentication, database, and storage
- **stripe-mock**: Mock Stripe API for testing payments

## Development Workflow

1. Make changes to the code - hot reloading is enabled, so changes will be reflected immediately
2. Use the integrated terminal in VS Code to run commands inside the container
3. Access the application at http://localhost:3000
4. Access the Firebase Emulator UI at http://localhost:4000
5. Access the Stripe Mock at http://localhost:12111

## Customizing the DevContainer

If you need to customize the DevContainer configuration:

1. Edit `.devcontainer/devcontainer.json` to change VS Code settings or extensions
2. Edit `.devcontainer/docker-compose.extend.yml` to modify container configuration
3. Rebuild the container using the "Remote-Containers: Rebuild Container" command from the Command Palette

## Troubleshooting

- **Container fails to build**: Check Docker logs for errors
- **Hot reloading not working**: Ensure the volume mounts are correctly configured
- **Can't connect to services**: Check that the ports are correctly forwarded
- **Node modules issues**: Try running `npm install` inside the container
- **VS Code Server issues**: The container now uses the official Microsoft Dev Container image (mcr.microsoft.com/devcontainers/javascript-node:18-bullseye) instead of a custom Docker Compose setup to ensure better compatibility with VS Code/Cursor

For more information on VS Code Remote Containers, see the [official documentation](https://code.visualstudio.com/docs/remote/containers).
