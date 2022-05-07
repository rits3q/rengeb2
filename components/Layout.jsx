import Head from "next/head"
// import {  Head} from 'next/document'
const Layout = ({ children }) => {
  return (
    <div>
    <Head>
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

   
    </Head>
 {children}
 </div>
  )
};

export default Layout;
