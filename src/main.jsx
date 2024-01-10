import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './routes/RootLayout.jsx'
import AuthInputs from './routes/AuthInputs.jsx';
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
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);