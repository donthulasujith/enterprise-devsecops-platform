# =========================
# Stage 1: Build
# =========================
FROM node:22-bookworm-slim AS build

WORKDIR /app

# Copy application source
COPY . .

# Install all dependencies and build the application
RUN npm install


# =========================
# Stage 2: Runtime
# =========================
FROM node:22-bookworm-slim AS runtime

WORKDIR /app

# Copy dependencies from build stage
COPY --from=build /app/node_modules ./node_modules

# Copy package files
COPY --from=build /app/package*.json ./

# Copy compiled application
COPY --from=build /app/build ./build

# Copy compiled frontend
COPY --from=build /app/frontend/dist ./frontend/dist

# Copy runtime application files
COPY --from=build /app/config ./config
COPY --from=build /app/encryptionkeys ./encryptionkeys
COPY --from=build /app/swagger.yml ./swagger.yml
COPY --from=build /app/data ./data
COPY --from=build /app/ftp ./ftp
COPY --from=build /app/i18n ./i18n
COPY --from=build /app/.well-known ./.well-known

# Give the non-root runtime user ownership of the application
RUN chown -R 65532:0 /app

# Give the group the same permissions as the owner
RUN chmod -R g=u /app

# Run as non-root user
USER 65532

EXPOSE 3000

CMD ["npm", "start"]
