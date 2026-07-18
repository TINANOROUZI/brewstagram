# Brewstagram — fullstack scaffold

This workspace contains a minimal scaffold for Brewstagram: a Java (Spring Boot) backend, a Node.js backend (Express), and a React frontend (Vite). The existing static files (`about.html`, `index.html`, etc.) are left in place under the project root.

Prerequisites
- Java 17 and Maven (for the Java backend)
- Node.js (>=16) and npm (for Node backend and frontend)

Run the Node backend (serves pictures and a mock API)

```bash
cd backend-node
npm install
npm start
# listens on http://localhost:4000
```

Run the Java backend (optional — provides /api/posts on port 8080)

```bash
cd backend-java
# ensure Java 17 and Maven are installed
mvn spring-boot:run
# listens on http://localhost:8080
```

Run the React frontend (Vite)

```bash
cd frontend
npm install
npm run dev
# opens on http://localhost:5173 by default
```

Notes
- The React app is configured to fetch posts from `http://localhost:4000/api/posts` (the Node backend). If you prefer to use the Java backend, change the URL in `frontend/src/App.jsx` to `http://localhost:8080/api/posts`.
- Pictures are served from the `pictures/` folder via the Node backend at `http://localhost:4000/pictures/<filename>`.

Next steps
- Add persistent storage (database) to the Java backend
- Implement real authentication in the Node backend
- Integrate frontend build and proxy for production
# brewstagram
