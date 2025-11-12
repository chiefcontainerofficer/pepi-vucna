# PEPI Website

Official website for PEPI.

## Email Setup

This application uses Mailtrap for sending emails from the contact form. Follow these steps to set it up:

### Mailtrap Setup

1. **Create a Mailtrap account**
   - Go to [Mailtrap](https://mailtrap.io/) and sign up for a free account
   - The free tier allows for testing emails

2. **Get your API token**
   - After signing up, go to Email Testing > Inboxes
   - Select your inbox and go to SMTP Settings
   - Copy your API token (this will be used as the password)

3. **Set up environment variables**
   - Create a `.env.local` file in the project root (for development)
   - Add the following variables:
   ```
   MAILTRAP_API_TOKEN=your_api_token_here
   EMAIL_FROM=your_verified_sender_email
   NODE_ENV=development
   ```

### Sender Authentication

For production, you'll need to authenticate your sender identity:

1. Go to Sending Domains in your Mailtrap dashboard
2. Add and verify your domain
3. Follow the DNS verification process

### For Production

When deploying to production:

1. Add the environment variables to your hosting platform
2. Set `NODE_ENV=production`

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment with Docker Swarm

### Prerequisites
- Docker Engine with Swarm mode enabled
- Domain pointing to your server (disketa.hr)

### Setup

1. Deploy Traefik proxy:
```bash
docker network create --driver=overlay --attachable public
docker stack deploy -c traefik-stack.yml traefik
```

2. Deploy the application:
```bash
# Build the image and tag it
docker build -t pepi-web:latest .

# Deploy with Mailtrap API token
MAILTRAP_API_TOKEN=your_api_token docker stack deploy -c docker-stack.yml pepi
```

3. Verify deployment:
```bash
docker service ls
```

### Environment Variables

- `MAILTRAP_API_TOKEN` - API token for Mailtrap email service (used as SMTP password)
- `EMAIL_FROM` - Sender email address (default: info@pepi.eu)

### Scaling

```bash
docker service scale pepi_web=2
```

### Logs

```bash
docker service logs pepi_web
```
# pepi
# pepi-vucna
