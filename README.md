# Task Manager Application

This is a **Task Manager Application** built using **Node.js**, **Express.js**, and **MongoDB**. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. It is structured as a RESTful API with endpoints for managing tasks.

---

## Features

- Add new tasks.
- Retrieve all tasks or a specific task by ID.
- Update existing tasks.
- Delete tasks.
- Serve static files for the frontend.

---

## Project Structure

```
├── controllers
│   └── task.js
├── database
│   └── connect.js
├── models
│   └── schema.js
├── node_modules
├── public
│   ├── browser-app.js
│   ├── edit-task.js
│   ├── favicon.ico
│   ├── index.html
│   ├── main.css
│   ├── normalize.css
│   └── task.html
├── routes
│   └── task.js
├── .env
├── .gitignore
├── app.js
├── package-lock.json
└── package.json
```

---

## Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone 
   ```

2. Navigate to the project directory:
   ```bash
   cd 
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URL=
   ```

5. Start the application:
   ```bash
   npm start
   ```

---

## API Endpoints

### Base URL: `/api/v1/tasks`

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| GET    | `/`              | Fetch all tasks              |
| POST   | `/`              | Create a new task            |
| GET    | `/:id`           | Fetch a single task by ID     |
| PATCH  | `/:id`           | Update a task by ID          |
| DELETE | `/:id`           | Delete a task by ID          |

---

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing task data.
- **Mongoose**: ODM library for MongoDB.

---

## How It Works

### Backend Logic

1. **Database Connection**: 
    - The `connectDB` function in `connect.js` establishes a connection to MongoDB using Mongoose.

2. **Schema Definition**:
    - The `TaskSchema` in `schema.js` defines the structure of each task document, including validation rules.

3. **Controllers**:
    - The `task.js` file contains functions to handle CRUD operations (e.g., `getAllTasks`, `createTask`, etc.).

4. **Routes**:
    - The `routes/task.js` file maps HTTP methods and endpoints to controller functions.

5. **Middleware**:
    - Static files are served using `app.use(express.static('./public'))`.
    - JSON parsing is enabled with `app.use(express.json())`.

### Frontend Logic

The frontend files are located in the `public` folder and include HTML, CSS, and JavaScript files for interacting with the API.

---

## Running the Application

The application runs on two ports:

1. Port 3000: For serving the backend API.
2. Port 4000: For additional server functionality (if needed).

To start the application, use:
```bash
npm start
```
You should see logs indicating that the server is running on both ports.

---

## Future Enhancements

- Add user authentication and authorization.
- Implement pagination for fetching tasks.
- Enhance frontend design and interactivity.

---

## License

This project is licensed under the **CC0 1.0 Universal (Public Domain Dedication)**. For more details, visit [CC0 1.0 Legal Code](https://creativecommons.org/publicdomain/zero/1.0/legalcode).

