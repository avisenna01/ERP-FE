import { Outlet } from 'react-router-dom';
// import AuthInputs from '../components/AuthInputs.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}