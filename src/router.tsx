import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { NotFound } from '@/page/NotFound'
import { Homepage } from '@/page/Homepage'
import { UseDocumentTitle } from '@/page/UseDocumentTitle'
import { UseDefault } from '@/page/UseDefault'
import { UseToggle } from '@/page/UseToggle'

export const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        path: PATH.homepage,
        element: <Homepage />,
      },
      {
        path: PATH.useDocumentTitle,
        element: <UseDocumentTitle />,
      },
      {
        path: PATH.useDefault,
        element: <UseDefault />,
      },
      {
        path: PATH.useToggle,
        element: <UseToggle />,
      },
    ],
  },
])
