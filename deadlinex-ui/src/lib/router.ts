import { CsvForm } from '@/pages/csv-form'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '*',
        Component: CsvForm
    }
])

export { router }
