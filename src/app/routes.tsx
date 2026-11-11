import { createBrowserRouter } from 'react-router'
import Layout from './Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'services', Component: ServicesPage },
      { path: 'work', Component: WorkPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
