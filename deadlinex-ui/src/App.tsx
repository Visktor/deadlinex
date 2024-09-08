import { RouterProvider } from 'react-router-dom'
import { router } from "./lib/router"
import { ThemeProvider } from './components/shadcn/theme-provider'

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
