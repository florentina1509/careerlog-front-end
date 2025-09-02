Title – CareerLog

CareerLog is a MERN job application tracker that helps users organise and monitor their job applications in one place. This can help them track which jobs have progressed in the recruiting stage. 

Repos 

Front End – https://github.com/florentina1509/careerlog-front-end 
Back End – https://github.com/florentina1509/careerlog-back-end 

Tech Stack 

•	Frontend: React, Vite, TailwindCSS, React Router DOM
•	Backend: Node.js, Express, MongoDB, JWT, Bcrypt
•	Other Tools: Postman (API Testing), Excalidraw (Wireframes), GitHub

Frontend (careerlog-front-end)

The frontend is built with React, Vite, and Tailwind CSS. It provides a clean user interface for managing job applications, including authentication, dashboard view, application forms, and toasts for notifications.

Features

- Authentication (Sign Up, Sign In, Sign Out) with JWT
- Dashboard listing all job applications
- Add New Application form
- Edit / Delete Applications
- Bulk Delete with select checkboxes
- Responsive & styled with TailwindCSS
- Toast notifications for feedback

Backend (careerlog-back-end)

The backend is built with Node.js, Express, and MongoDB. It provides REST API endpoints for authentication, applications, and companies.

Features

- JWT authentication (Sign Up / Sign In)
- Applications CRUD (Add, Edit, Delete, Bulk Delete)
- Validation & error handling

API Routes

Auth
- POST /api/auth/signup → register
- POST /api/auth/login → login

Applications

- GET /api/applications → list user apps
- POST /api/applications → create
- GET /api/applications/:id → fetch one
- PUT /api/applications/:id → update
- DELETE /api/applications/:id → delete
- DELETE /api/applications?ids=... → bulk delete

Companies

- GET /api/companies
- POST /api/companies
- PUT /api/companies/:id
- DELETE /api/companies/:id

ExcaliDraw 

https://excalidraw.com/#json=_hlnry63-bsBHL0CaahC8,be7e6PPNYh9aQ7MdR8I67A

Logo 

<img width="500" height="500" alt="logo" src="https://github.com/user-attachments/assets/6cb64a33-8713-407f-bdf7-81c1210feb61" />

Screenshots 

<img width="433" height="245" alt="Picture 1" src="https://github.com/user-attachments/assets/b2be9432-7943-4193-bb6e-c8e480315ea7" />

<img width="432" height="266" alt="create" src="https://github.com/user-attachments/assets/61781829-9050-48c7-ba9b-09d9a5f03ac3" />

<img width="432" height="273" alt="signin" src="https://github.com/user-attachments/assets/a8c94cea-0caf-4b42-bb26-0c4291111950" />

<img width="391" height="343" alt="dashboard" src="https://github.com/user-attachments/assets/4de6eb2d-000d-43d3-94c2-d85102709b97" />

<img width="382" height="323" alt="new" src="https://github.com/user-attachments/assets/20503a7b-03e4-4d8d-a66f-80e06451408d" />

<img width="432" height="359" alt="edit" src="https://github.com/user-attachments/assets/0f29e142-e22a-4229-9d12-fe584754aae3" />

<img width="524" height="251" alt="delete" src="https://github.com/user-attachments/assets/300d030b-d67c-4b6b-9724-0feab4571792" />

<img width="433" height="221" alt="message" src="https://github.com/user-attachments/assets/50553bdc-da26-4692-9a46-f94471b25581" />
