import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/help/Faq'
import Contacts, { contsctAction } from './pages/help/Contacts'
import NotFound from './pages/NotFound'
import CareersLayout from './layouts/CareersLayout'
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareerError from './pages/careers/CareerError'

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
            action: contsctAction,
          },
        ],
      },
      {
        path: 'careers',
        element: <CareersLayout />,
        errorElement: <CareerError />,
        children: [
          {
            path: '',
            element: <Careers />,
            loader: careersLoader,
          },
          {
            path: ':id',
            element: <CareerDetails />,
            loader: careerDetailsLoader,
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
