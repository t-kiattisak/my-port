# My Port API (Express + TypeScript)

API designed to test GitOps and Argo CD deployments.

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode (Hot-Reload)
```bash
npm run dev
```
The app will run at `http://localhost:3000`.

### 3. Build & Run in Production Mode (Compiled JavaScript)
```bash
npm run build
npm start
```

---

You can build the Docker image and push it to a container registry (e.g., Docker Hub or GitHub Container Registry) for Argo CD to deploy.

> [!NOTE]
> For this repository, the Docker Hub username is set as **`tkiattisakj9`**.

```bash
# 1. Build the image (replace <dockerhub-username> with tkiattisakj9)
docker build -t <dockerhub-username>/my-port-api:1.0.0 .

# 2. Run the container locally to verify it works
docker run -p 3000:3000 <dockerhub-username>/my-port-api:1.0.0

# 3. Push the image to the registry
docker push <dockerhub-username>/my-port-api:1.0.0
```

---

## 🌐 Available Endpoints
* **GET `/`**: Returns current project status, version, and active environment.
* **GET `/health`**: Liveness Probe to check if the application is alive (returns `200 OK`).
* **GET `/ready`**: Readiness Probe to check if the application is ready to accept traffic (returns `200 OK`).
