// import Image from "next/image";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Image src={'/football.jpeg'} alt="image" width={300} height={700} className="w-full" /> */}
      <ToastContainer />
      <div className="flex flex-col gap-10 items-center justify-center">
        <p className="text-3xl">
          Welcome to Football Database Management System
        </p>
        <Link href={'/main/Players'}>
        <button className="px-4 py-3 rounded-full border-none outline-none bg-white text-black hover:bg-orange-500 transition-all duration-200 hover:text-black">
          Go to Main Page
        </button>
        </Link>
      </div>
    </div>
  );
}
