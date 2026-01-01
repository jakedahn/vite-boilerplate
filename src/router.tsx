import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "@/components/layout"
import { HomePage } from "@/pages/home"
import { AboutPage } from "@/pages/about"
import { ContactPage } from "@/pages/contact"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
])
