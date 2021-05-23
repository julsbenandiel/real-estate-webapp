import Head from 'next/head'
import NormalNavbar from '../components/NormalNavbar'

export default function Contact() {
  return (
    <div className="h-screen">
      <NormalNavbar />
      <div
        style={{ height: '420px', zIndex: -1 }}  
        className="absolute header-v2 bg-blue w-full top-0"></div>


      <section className="maxwidth-1200 mx-auto p-3">
        <p className="text-white tracking-widest text-sm mt-2 mb-5">
          Home / Contact
        </p>
        <div className="rounded bg-white p-3">
          <p className="text-black">Contact Us</p>
        </div>
      </section>

    </div>
  )
}
