import Head from "next/head";
// import {  Head} from 'next/document'
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
