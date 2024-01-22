import './ui/global.css';
import {inter}  from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= {`${inter.className} antialiased`} >
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat hic officiis nam alias porro voluptatum deleniti atque ut odio dolorem, beatae debitis provident illum ipsum sit, minima, repellendus cupiditate laudantium?</p> */}
        {children}
        <footer className='text-center mt-10 bg-gray-100'>Esto esta hecho con 💖 por vercel ®</footer>
      </body>
    </html>
  )
}
