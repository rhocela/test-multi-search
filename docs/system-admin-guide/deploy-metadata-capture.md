---
sidebar_position: 2
---

# Deploy Metadata Capture

Deploy your own instance of the Metadata Capture application to give your organisation complete control over the application.

In this guide  
> <u>Before you begin</u>  
> <u>Configure your environment</u>  
> <u>Deploy the application</u>  

## Before you begin

The Metadata Capture application integrates with your organisations existing tools and infrastructure as described in the <u>architecture overview</u>. Before you begin deployment, prepare your environment:

1. Provision a **virtual machine (VM)** or cloud instance to host the application.
2. Install **Docker** to build, run, and manage application containers.
3. Set up a managed **PostgreSQL database** instance. Ensure the database is accessible and configured for secure connections.
4. Configure an **OpenID Connect (OIDC) provider** to manage user authentication and access control.
5. Set up an **SMTP server** to send notification emails to users.

## Configure your environment

1. Download and copy the environment configuration template to your deployment environment: <u>.env.example</u>. 
2. Rename the file to `.env` and update the **mandatory environment variables** to match your environment settings.
3. <u>Configure the application</u>.

## Deploy the application

After you complete the configuration for the application, you can deploy Metadata Capture:

1. Get the latest release:
   ```sh
   git checkout tags/v4.0.1
   ```

2. Build the Docker image:
   ```sh
   docker build -t <your-app-name> .
   ```
   For example: 
   ```sh
   docker build -t metadata-capture .
   ``` 

3. Initialize the database:
   ```sh
   docker run --env-file .env <your-app-name> alembic upgrade head
   ```
4. Start the application:
   ```sh
   docker run -d --env-file .env -p 8000:8000 <your-app-name>
   ```

    To open your Metadata Capture application, open your browser and go to `http://localhost:8000`.


