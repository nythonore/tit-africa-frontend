FROM node:16-alpine AS builder

ENV NODE_ENV production

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn install

# Copy app files
COPY . .

# Build & export the app
RUN yarn build
RUN yarn export

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine AS production

# Copy built assets from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose por t
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
