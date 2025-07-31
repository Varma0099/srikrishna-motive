import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'Srikrishna Motive' }: Props) => (
  <>
    <Head>
      <title>Sri Krishna AutoMotive | Diesel Workshop</title>
      <meta name="description" content="Diesel Workshop - Parts, Service, Repair. Sri Krishna AutoMotive." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
    </Head>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
