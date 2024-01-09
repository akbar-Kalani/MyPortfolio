


import UiApp from '@/components/ui/ui'
import './globals.css'
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akbar Kalani',
  description: ' Front end Developer ',
}

export default function RootLayout({ children }) {
  //const [isDarkMode, setIsDarkMode] = useState(false);
 
  
  return (
    <html lang="en">
      <body className={` cont container mx-auto flex flex-wrap max-sm:inline-block min-h-screen justify-center `}>
       
      {/*   <Aside setIsDarkMode={setIsDarkMode}  isDarkMode={isDarkMode }/>  
          <Header/>   */}
           <UiApp/>
        {children}
          
        </body>
    </html>
  )
}
