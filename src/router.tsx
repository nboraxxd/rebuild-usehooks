import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { NotFound } from '@/page/NotFound'
import { Homepage } from '@/page/Homepage'
import { UseDocumentTitle } from '@/page/UseDocumentTitle'

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
    ],
  },
])
