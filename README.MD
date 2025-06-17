# Back-End Service

This is a simple Express-based backend built with TypeScript. It provides an API endpoint for your front-end application and is prepared for Docker-based deployment.

## 📦 Project Structure

```
/
├── src/
│   └── server.ts       # Entry point (source)
├── dist/
│   └── server.js       # Compiled JavaScript output
├── Dockerfile
├── docker-compose.yml
├── .env                # Environment variables
└── package.json
```

---

## 🚀 Scripts

| Script         | Description                        |
|----------------|------------------------------------|
| `npm run dev`  | Run in development using nodemon   |
| `npm run build`| Compile TypeScript to `dist/`      |
| `npm start`    | Start from compiled JS (prod)      |

---

## 🛠 Requirements

- Node.js >= 18
- npm >= 8
- Docker & Docker Compose (for containerization)

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/back-end.git
cd back-end
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🐳 Run with Docker

### 1. Add `.env` file

```env
PORT=3000
```

### 2. Build and run container

```bash
docker-compose up --build -d
```

### 3. Access the server

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📄 API Endpoints

| Method | Path     | Description      |
|--------|----------|------------------|
| GET    | /items   | Get list of items|
| POST   | /select  | Save selection   |
| POST   | /sort    | Save sort order  |
| GET    | /state   | Get saved state  |

---

## 📁 Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
```

---

## 📦 Docker Compose

```yaml
version: '3'
services:
  backend:
    container_name: backend
    build: .
    ports:
      - "${PORT}:${PORT}"
    env_file:
      - .env
```

---

## 📬 License

ISC License