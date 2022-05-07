import Head from "next/head"
// import {  Head} from 'next/document'
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default Layout;
