import Image from 'next/image';
import logo from '../../public/static/netflix.svg';
import back from '../../public/static/back.jpg';
import Form from '@/components/form/form';
import Footer from '@/components/footer/footer';
import Head from 'next/head';
export default function Login() {
  return (
    <div className="w-full bg-none  bg-black md:bg-transparent relative  min-h-screen bg-cover bg-no-repeat ">
      <Head>
        <title>Login Page</title>
      </Head>
      <header className="w-60 z-20 p-5">
        <Image src={logo} className="z-10 h-full" alt="logo" />
      </header>
      <Image
        src={back}
        alt="background"
        className="h-full w-full -z-10 hidden md:block absolute object-fill top-0 left-0"
      />
      <Form />
      <Footer border={'4'} />
    </div>
  );
}
