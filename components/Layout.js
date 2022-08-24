import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amalina' : 'Amalina'}</title>
        <meta name='description' content='Amalina Store' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col min-h-screen justify-between'>
        <header>
          <nav className='flex items-center justify-between h-12 shadow-md px-4'>
            <Link href='/'>
              <a className='text-lg font-bold'>Amalina</a>
            </Link>
            <div>
              <Link href='/cart'>
                <a className='p-2'>cart</a>
              </Link>
              <Link href='/login'>
                <a className='p-2'>login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex items-center justify-center'>
          <p>Copyright &copy; Amalina</p>
        </footer>
      </div>
    </>
  );
}
