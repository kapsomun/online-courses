# Online Courses App

## Project Overview
**Online Courses App** is a React + Redux application for browsing and watching video courses.  
It demonstrates modern frontend practices, including:

- React with TypeScript
- Redux Toolkit for state management
- React Router for routing
- Lazy loading with `React.Suspense`
- Form handling with `react-hook-form` and validation with `Yup`
- TailwindCSS for styling
- Shadcn for UI components

---

## Features

- Browse a list of courses with detailed information.
- Watch course videos directly in the app.
- Manage authentication through login forms.
- Optimized performance using lazy loading and memoization.

---

## Technologies Used

- **React 18+**
- **TypeScript**
- **Redux Toolkit**
- **React Router DOM**
- **TailwindCSS**
- **Shadcn UI**
- **React Hook Form + Yup**
- **Vite**

---

## Installation

1. Clone the repository:
   git clone https://github.com/kapsomun/online-courses.git
   cd online-courses

2. Install dependencies:
   npm install

Running the App:

1. Start the development server:
   npm run dev

2. Open the app in your browser:
   http://localhost:5173

---

## Folder Structure
```bash
src/
├── app/                   # App-level settings (store, providers, mocks)
│   ├── mock/              # Mock data
│   │   └── courses/
│   │       └── mockCourses.ts
│   ├── providers/         # Providers (Theme, Router, Redux, etc.)
│   ├── App.tsx            # Root component
│   └── store.ts           # Redux store
│
├── entities/              # Business entities (domain models)
│   └── courses/
│       └── model/
│           ├── coursesSlice.ts
│           └── types.ts
│
├── features/              # Application features
│   └── auth/              # Authentication
│
├── pages/                 # Application pages
│   ├── auth/              # Login / Registration page
│   └── courses/           # Courses page
│
├── shared/                # Shared reusable code
│   └── ui/                # UI components (atoms & molecules)
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── Header.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── Layout.tsx
│
├── widgets/               # Large independent UI blocks
│   └── courses/
│       └── ui/
│           ├── CourseCard.tsx
│           ├── CoursesList.tsx
│           └── VideoPlayer.tsx
│
├── main.tsx               # App entry point
└── index.css              # Global styles
---
