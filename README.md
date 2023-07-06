This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install by running npm install, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Section 1
## What is the purpose of the "key" prop in React?
The Key prop in react helps React identify and track components or elements within a list of collection. The main purpose is to help React know when updating and rendering components. Assigning a unique key value to each item helps React to track and update individual list items when the underlying data changes. 

## What is the purpose of the "useEffect" hook in React?
The purpose of useEffect in React is to allow us to perform side effects, such as data fetching, subscriptions, or manually changing the DOM. It combines different lifecycle methods in traditional react class components. It helps you handle asynchronous tasks and handle different interactions inside your component. It is useful in separating logic with component code so that the code is kept clean.

## What is the purpose of the "setState" function in React class components?
In React, the state is the data a component needs to render in the UI. This could be triggering re-renders and enables dynamic rendering of the UI based on changing data from user interactions. 

For example we could set a state for a counter called count and keep track of every time a user clicks on it to see how many times this counter was clicked. which triggers a re-rendering and updates count.

## What technique is commonly used to handle authentication and authorization in Node.js?
JWT token are often used to handle autentication and authorization in NodeJs. Libraries such as Passportjs are often used to handle JWT-based authentication and authorization.

## What is the role of a package manager in Node.js?
Package managers such as yarn and npm is a useful tool that helps manages installations, dependency management and version of external software/libraries used in a Nodejs project. It helps streamline the process to install external libraries/projects by simply running commands in the command line. 

