import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Layout from './Layout';
import Searched from './pages/Searched';
import RecipeDetails from './pages/RecipeDetails'

function App() {
  const routers = createBrowserRouter([
    {path: '/', element: <Layout />, children: [
      {index: true, element: <Home />},
      {path: '/cuisine/:type', element: <Cuisine />},
      {path: '/searched/:search', element: <Searched />},
      {path: '/recipeDetails/:id', element: <RecipeDetails />},
    ]}
  ])
  return (
      <RouterProvider router={routers} />
  )
}

export default App
