import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import ProjectDetail from '../pages/ProjectDetail'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detail/:project_name',
    element: <ProjectDetail/>
  }
])

export default router