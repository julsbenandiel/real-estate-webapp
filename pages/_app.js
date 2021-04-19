import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from './components/layouts.tsx';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
