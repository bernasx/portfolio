import type { NextPage } from 'next'
import Image from 'next/image'
import { ArrowLeftIcon, ArrowDownIcon } from '@heroicons/react/solid'
import { UserIcon, CodeIcon, TemplateIcon, GlobeIcon } from '@heroicons/react/outline'
import useWindowSize from '../lib/useWindowSize'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import LinkAnchor from '../components/portfolio/link-anchor'

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props:{
      ...(await serverSideTranslations(locale, ['about','common']))
    }
})

const Home: NextPage = () => {
  const {width} = useWindowSize();
  const {t} = useTranslation();

  return (
      <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
        <div className='flex flex-col justify-start items-center'>
          <div className='ml-2'>
            <div className='flex flex-col lg:table-caption lg:-ml-2'>
              <h1 className='font-bold text-4xl lg:text-6xl xl:text-8xl text-port-dark-green dark:text-port-light-green'>Bernardo Ribeiro</h1>
            </div>
            
            <h2 className='text-3xl md:mt-4'>{t('about:fullstack')}</h2>

            <ul className='md:mt-4 ml-4 md:ml-12 list-disc marker:text-port-light-green'>
              <li className='text-xl'>JavaScript <span className='text-port-light-green font-bold'>/</span> TypeScript <span className='text-port-light-green font-bold'>/</span> Python</li>
              <li className='text-xl'>React <span className='text-port-light-green font-bold'>/</span> Next.JS <span className='text-port-light-green font-bold'>/</span> Django</li>
              <li className='text-xl'>Tailwind <span className='text-port-light-green font-bold'>/</span> Bootstrap <span className='text-port-light-green font-bold'>/</span> Bulma</li>
              <li className='text-xl'>Photoshop <span className='text-port-light-green font-bold'>/</span> Premiere <span className='text-port-light-green font-bold'>/</span> XD</li>
            </ul>

          </div>

        </div>

        <div className='flex flex-col justify-start items-center md:mt-40 mt-12'>
          <Image src="/mainphoto.png" width={212} height={212} alt='Photo of Bernardo' className='rounded-full'></Image>
          <h1 className='mt-4 text-2xl text-port-dark-green'>{t('about:about_me')}</h1>
          <p className='mt-4 text-xl text-center break-words w-3/4 max-w-xs'>
          {t('about:about_degree')} <LinkAnchor content='@ISTEC' url='https://istec-porto.pt/'></LinkAnchor>.
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

        <div className='flex flex-col justify-start  items-center md:mt-24 mt-12'>
          <h1 className='mt-4 text-2xl text-port-dark-green'>{t('about:about_portfolio')}</h1>

          <ul className='md:mt-4 max-w-ws mr-4 flex flex-col items-end mb-4'>

            <li className='break-words text-right flex items-center'>
              <div className='max-w-md'>
              {t('about:portfolio_xd')}
                <br></br>
                <LinkAnchor url='https://drive.google.com/file/d/19uYgkE3M997NFyziuX2HBo6fdd-Rru_u/view?usp=sharing' content={t('about:portfolio_xd_link')}></LinkAnchor>
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
                <LinkAnchor url='https://heroicons.com/' content=' heroicons.com'></LinkAnchor>
                <br></br>
                {t('about:portfolio_style_2')}
              </div>
              <TemplateIcon className='ml-2 h-8 w-8 min-h-8 min-w-8 inline text-port-dark-green'></TemplateIcon>
            </li>

            <li className='mt-4 break-words text-right flex items-center'>
              <div className='max-w-md'>
              {t('about:portfolio_translation')}
              </div>
              <GlobeIcon className='ml-2 h-8 w-8 min-h-8 min-w-8 inline text-port-dark-green'></GlobeIcon>
            </li>

          </ul>
          
        </div>


      </div>
  )
}

export default Home
