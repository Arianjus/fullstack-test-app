# Basis-Image
FROM node:18

# Arbeitsverzeichnis im Container
WORKDIR /app

# package.json und lockfile kopieren, um Layer-Caching zu nutzen
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Restliche Dateien ins Image kopieren (inkl. server.js)
COPY . .

# Port 3000 freigeben (optional für Doku & lokale Tests)
EXPOSE 3000

# Startbefehl
CMD ["node", "server.js"]