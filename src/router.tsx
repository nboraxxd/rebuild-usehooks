import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { NotFound } from '@/page/NotFound'
import { Homepage } from '@/page/Homepage'
import { UseDocumentTitle } from '@/page/UseDocumentTitle'
import { UseDefault } from '@/page/UseDefault'
import { UseToggle } from '@/page/UseToggle'
import { UsePrevious } from '@/page/UsePrevious'
import { UsePreferredLanguage } from '@/page/UsePreferredLanguage'
import { UseFavicon } from '@/page/UseFavicon'
import { UseCopyToClipboard } from '@/page/UseCopyToClipboard'

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
      {
        path: PATH.usePrevious,
        element: <UsePrevious />,
      },
      {
        path: PATH.usePreferredLanguage,
        element: <UsePreferredLanguage />,
      },
      {
        path: PATH.useFavicon,
        element: <UseFavicon />,
      },
      {
        path: PATH.useCopyToClipboard,
        element: <UseCopyToClipboard />,
      },
    ],
  },
])
