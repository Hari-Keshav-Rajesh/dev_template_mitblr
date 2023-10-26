import Header from "./header/Header"

export const metadata = {
  title: 'CodeX',
  description: 'The home of CodeX',
}

export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
       <Header />
        {children}
        </body>
    </html>
  )
}