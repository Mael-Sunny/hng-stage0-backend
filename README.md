# HNG Stage 0 Backend Task

This RESTful API project is part of the **HNG Internship (Stage 0 - Backend)**.  
It’s a simple RESTful API that returns my profile information along with a random cat fact fetched from the **Cat Facts API**.

---

## 🚀 Endpoint

**GET /me**

**Live URL: Deployed on Railway**  
👉 [https://hng-stage0-backend-production-e224.up.railway.app/me]

---

## 🧩 Example Response

```json
{
  "status": "success",
  "user": {
    "email": "johndoe@gmail.com",
    "name": "John Doe",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T22:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}

How to Run it Locally
Clone the repository:

bash
Copy code
git clone https://github.com/Mael-Sunny/hng-stage0-backend.git
Navigate into the project:

bash
Copy code
cd hng-stage0-backend
Install dependencies:

bash
Copy code
npm install
Run the project:

bash
Copy code
node index.js
Visit http://localhost:3000/me to see the result.


>> Dependencies
express — For creating the API server

axios — For fetching data from the Cat Facts API

cors — For handling cross-origin requests


>> Author
Name: Sunday Igboke
Email: agentsmui@gmail.com
Stack: Node.js/Express


>> API Reference
Cat Facts API: https://catfact.ninja/fact