import 'material-icons/iconfont/material-icons.css';
import 'animate.css';
import './globals.css';
import { bodyFont } from './fonts';
export default async function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={`${bodyFont.className} font-[300] transition-colors duration-300 ease-out-quint text-gray-900`}>
        <main className='bg-white'>
          {children}
        </main>
      </body>
    </html>
  );
}