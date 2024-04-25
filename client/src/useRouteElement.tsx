import { useRoutes } from 'react-router-dom'
import MainLayout from './pages/MainLayout/MainLayout'
import SlidesShow from './components/SlideShow'
import Register from './pages/Register/Register'
import Login from './pages/Login'

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <SlidesShow />
        </MainLayout>
      )
    },
    {
      path: '/register',
      element: (
        <MainLayout>
          <Register />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <MainLayout>
          <Login />
        </MainLayout>
      )
    }
  ])
  return routeElement
}
