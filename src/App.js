import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/help/Faq'
import Contacts from './pages/help/Contacts'
import NotFound from './pages/NotFound'
import CareersLayout from './layouts/CareersLayout'
import Careers, { careersLoader } from './pages/careers/Careers'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'help',
        element: <HelpLayout />,
        children: [
          {
            path: 'faq',
            element: <Faq />,
          },
          {
            path: 'contact',
            element: <Contacts />,
          },
        ],
      },
      {
        path: 'careers',
        element: <CareersLayout />,
        children: [
          {
            path: '',
            element: <Careers />,
            loader: careersLoader,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
