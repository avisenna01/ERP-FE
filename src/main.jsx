import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import RootLayout from './routes/RootLayout.jsx'
import AuthInputs from './routes/AuthInputs.jsx';
import LandingPage from './routes/LandingPage.jsx'
import './styles/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // {
      //   path: '/',
      //   element: <Posts />,
      //   loader: postsLoader,
      //   children: [
      //     { path: '/create-post', element: <NewPost />, action: newPostAction },
      //     { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader }
      //   ],
      // },
      {
        path: '/login',
        element: <AuthInputs/>
      },
      {
        index: true,
        element: <LandingPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> 
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);