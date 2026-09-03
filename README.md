# Little Lemon Restaurant

A responsive restaurant table reservation application built with **React, TypeScript, and Vite** as part of the Meta Front-End Developer Capstone project.

The application allows users to make a restaurant reservation by selecting a date, available time, number of guests, and occasion.

## 🚀 Features

* Responsive restaurant reservation interface
* Date selection
* Available reservation times
* Guest count validation
* Birthday and Anniversary occasions
* Form validation using **Formik + Yup**
* Reservation submission using Meta's provided API
* Client-side routing with React Router
* Toast notifications using Sonner
* Unit and component testing with Jest and React Testing Library

## 🛠️ Technologies

* React
* TypeScript
* Vite
* Formik
* Yup
* React Router
* Tailwind CSS
* Sonner
* Jest
* React Testing Library

## 📋 Requirements

Before running the project, make sure you have installed:

* Node.js 18+
* npm

You can check your versions with:

```bash
node -v
npm -v
```

## 📦 Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd <PROJECT_DIRECTORY>
```

Install dependencies:

```bash
npm install
```

## ▶️ Run the Development Server

Start the development server:

```bash
npm run dev
```

Vite will start the application locally.

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🧪 Run Tests

Run the test suite:

```bash
npm test
```

The project uses:

* Jest
* Jest DOM
* React Testing Library
* jsdom

The tests cover:

* Booking form rendering
* Input fields
* Form validation
* Guest count validation
* Successful form submission
* `submitAPI` integration

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```text
src/
├── components/
│   ├── booking-form.tsx
│   └── button.tsx
│
├── pages/
│   └── booking.tsx
│
├── tests/
│   └── setup.ts
│
├── __test__/
│   └── booking-form.test.tsx
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── ...
```

## 🔌 Booking API

The project uses the API provided by Meta for the capstone project.

The API provides:

```js
fetchAPI(date)
```

for retrieving available booking times and:

```js
submitAPI(formData)
```

for submitting reservations.

The API is loaded in `index.html`:

```html
<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
```

No backend server is required to run the reservation functionality.

## ✅ Form Validation

The reservation form uses **Formik** for form state and submission handling, and **Yup** for validation.

The following rules are applied:

| Field    | Validation              |
| -------- | ----------------------- |
| Date     | Required                |
| Time     | Required                |
| Guests   | Between 1 and 10        |
| Occasion | Birthday or Anniversary |

Example validation:

```text
Please choose a date.
Please choose a time.
At least 1 guest is required.
Maximum 10 guests are allowed.
```

## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile

The UI is styled using Tailwind CSS.

## 📄 License

This project was created for educational purposes as part of the **Meta Front-End Developer Capstone** project.
