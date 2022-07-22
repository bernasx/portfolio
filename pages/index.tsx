import type { NextPage } from 'next'
import Layout from '../components/portfolio/layout/index'
import Image from 'next/image'
import { ArrowLeftIcon, ArrowDownIcon } from '@heroicons/react/solid'
import { TerminalIcon, UserIcon, CodeIcon, TemplateIcon, GlobeIcon } from '@heroicons/react/outline'
import useWindowSize from '../lib/useWindowSize'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props:{
      ...(await serverSideTranslations(locale, ['about','common']))
    }
})

const Home: NextPage = () => {
  const {width } = useWindowSize();
  const {t} = useTranslation();

  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full fit-screen'>
        <div className='flex flex-col justify-start items-center'>
          <div>
            <div className='flex flex-row lg:flex-col'>
              <h1 className='font-bold text-4xl lg:text-8xl text-port-dark-green dark:text-port-light-green'>Bernardo</h1>
              {width! <= 1024 && <span>&nbsp;</span>}
              <h1 className='font-bold text-4xl lg:text-8xl text-port-dark-green dark:text-port-light-green'>Ribeiro</h1>
            </div>
            
            <h2 className='text-3xl md:mt-4'>{t('about:fullstack')}</h2>

            <ul className='md:mt-4 ml-4 md:ml-12 list-disc marker:text-port-light-green'>
              <li className='text-xl'>JavaScript <span className='text-port-light-green'>/</span> TypeScript <span className='text-port-light-green'>/</span> Python</li>
              <li className='text-xl'>React <span className='text-port-light-green'>/</span> Next.JS <span className='text-port-light-green'>/</span> Django</li>
              <li className='text-xl'>Tailwind <span className='text-port-light-green'>/</span> Bootstrap <span className='text-port-light-green'>/</span> Bulma</li>
              <li className='text-xl'>Photoshop <span className='text-port-light-green'>/</span> Premiere <span className='text-port-light-green'>/</span> XD</li>
            </ul>

          </div>

        </div>

        <div className='flex flex-col justify-start items-center md:mt-40 mt-12 md:mb-8'>
          <Image src="/mainphoto.png" width={212} height={212} alt='Photo of Bernardo' className='rounded-full'></Image>
          <h1 className='mt-4 text-2xl text-port-dark-green'>{t('about:about_me')}</h1>
          <p className='mt-4 text-center break-words w-3/4 max-w-xs'>
          {t('about:about_degree')} <a href="https://istec-porto.pt/" target="_blank" rel="noreferrer" className='text-port-link-blue hover:text-port-link-blue-hover'>@istec</a>.
            <br />
            <br />
            {t('about:about_me_1')} <br />{t('about:about_me_2')}
            <br />
            <br />
            {t('about:about_me_3')}
          </p>
          <div className='flex flex-row items-center mt-4'>
            {width! > 1024 ? <ArrowLeftIcon className='h-4 w-4 inline text-port-dark-green'></ArrowLeftIcon> : <ArrowDownIcon className='h-4 w-4 inline text-port-dark-green'></ArrowDownIcon>}
            <a href="https://istec-porto.pt/" target="_blank" rel="noreferrer" className='text-md text-port-dark-green hover:text-port-light-green'> &nbsp; {t('about:check_cv')}</a>
          </div>
        </div>

        <div className='flex flex-col justify-start  items-center md:mt-28 mt-12 mb-8'>
          <h1 className='mt-4 text-2xl text-port-dark-green'>{t('about:about_portfolio')}</h1>

          <ul className='md:mt-4 max-w-ws mr-4 flex flex-col items-end mb-8'>

            <li className='break-words text-right flex items-center'>
              <div className='max-w-md'>
              {t('about:portfolio_xd')}
                <br></br>
                <a href="https://istec-porto.pt/" target="_blank" rel="noreferrer" className='text-port-link-blue hover:text-port-link-blue-hover'> {t('about:portfolio_xd_link')}</a>
              </div>
              <UserIcon className='ml-2 h-8 w-8 min-h-8 min-w-8 inline text-port-dark-green'></UserIcon>
            </li>

            <li className=' mt-4 break-words text-right flex items-center'>
              <div className='max-w-md'>
              {t('about:portfolio_next_typescript')}
              </div>
              <CodeIcon className='ml-2 h-8 w-8 min-h-8 min-w-8 inline text-port-dark-green'></CodeIcon>
            </li>

            <li className='mt-4 break-words text-right flex items-center'>
              <div className='max-w-md'>
              {t('about:portfolio_style_1')}
                <a href="https://istec-porto.pt/" target="_blank" rel="noreferrer" className='text-port-link-blue hover:text-port-link-blue-hover'> heroicons.com</a>
                <br></br>
                {t('about:portfolio_style_2')}
              </div>
              <TemplateIcon className='ml-2 h-8 w-8 min-h-8 min-w-8 inline text-port-dark-green'></TemplateIcon>
            </li>

            <li className='mt-4 break-words text-right flex items-center'>
              <div className='max-w-md'>
              {t('about:portfolio_admin')}
              </div>
              <TerminalIcon className='ml-2 h-8 w-8 min-h-8 min-w-8 inline text-port-dark-green'></TerminalIcon>
            </li>

            <li className='mt-4 break-words text-right flex items-center'>
              <div className='max-w-md'>
              {t('about:portfolio_translation')}
              </div>
              <GlobeIcon className='ml-2 h-8 w-8 min-h-8 min-w-8 inline text-port-dark-green'></GlobeIcon>
            </li>

          </ul>

          <Image src="/adminpanel.gif" width={450} height={240} alt='Gif of Admin Panel' className='rounded-xl'></Image>
        </div>


      </div>
    </Layout>
  )
}

export default Home
