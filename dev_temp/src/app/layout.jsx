import Header from "../components/Header/Header"
import ThemeProvider  from "@/components/Theme/theme-provider"
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: 'CodeX',
  description: 'The home of CodeX',
}

export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
       <Header />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}