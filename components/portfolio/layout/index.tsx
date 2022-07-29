import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router";
import ThemeSwitch from '../theme-switch/index'
import LangSwitch from '../lang-switch/index'
import InfoSidebar from '../info-sidebar/index'
import { useTranslation } from 'next-i18next'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Portfolio' }: Props) => {
  // basicClass is the class for all non active elements in the navbar
  const basicClass = 'text-port-dark-gray dark:text-port-faded-gray flex items-center px-3 md:px-4 h-11 md:h-14 text-center text-sm md:text-xl hover:text-port-dark-green dark:hover:text-port-light-green'
  const activeClass = `text-white bg-port-light-green flex items-center px-3 md:px-4 h-11 md:h-14 text-center text-sm md:text-xl hover:bg-port-light-green dark:hover:bg-port-dark-green`
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className='flex flex-row justify-between'>
        <nav className='flex flex-row justify-evenly h-11 md:h-14 rounded-br-3xl bg-port-superlight-green dark:bg-port-darker-blue max-w-max'>
          <Link href="/">
            <a className={router.pathname == "/" ? activeClass : basicClass}>{t('common:nav_about')}</a>
          </Link>

          <Link href="/projects">
            <a className={router.pathname == "/projects" ? activeClass : basicClass}>{t('common:nav_projects')}</a>
          </Link>

          <Link href="/contacts">
            <a className={router.pathname == "/contacts" ? `${activeClass} rounded-br-3xl` : basicClass} >{t('common:nav_contacts')}</a>
          </Link>
        </nav>
        <div className='flex flex-col m-2 md:m-4 space-y-2'>
          <LangSwitch></LangSwitch>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </header>
      <div className='fit-screen'>
        {children}
        <footer className='bg-port-dark-green dark:bg-port-darker-blue w-full min-h-8 h-auto'>
          <InfoSidebar />
        </footer>
      </div>
      

    </div>
  )
}

export default Layout