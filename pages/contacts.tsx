import type { NextPage } from 'next'
import Layout from '../components/portfolio/layout/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
const Projects: NextPage = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className='grid grid-cols-1 lg:grid-cols-2 p-2'>

                <div>
                    <div className='ml-4 lg:ml-12 flex flex-col'>
                        <h1 className='text-4xl text-port-light-green'>{t('contacts:hiring_title')}</h1>
                        <h2 className='text-2xl text-port-white mt-4 lg:mt-1'>{t('contacts:hiring_subtitle')}</h2>
                    </div>


                    <div className='ml-6 lg:ml-16 flex flex-col mt-4'>
                        <p>{t('contacts:hiring_linkedin')} <a className='text-port-link-blue hover:text-port-link-blue-hover' href="https://www.linkedin.com/in/bernardoribeiro99/" target="_blank" rel="noreferrer"> Linkedin</a></p>
                        <a>{t('contacts:hiring_email')} <span className='text-port-link-blue hover:text-port-link-blue-hover'>bernardo.ribeiro99@gmail.com</span></a>
                        <br></br>
                        <br></br>
                        <p>{t('contacts:hiring_alternatives')}</p>
                    </div>

                    <div className='ml-4 lg:ml-12 mt-8 lg:mt-12 flex flex-col'>
                        <h1 className='text-4xl text-port-light-green'>{t('contacts:opensource_title')}</h1>
                        <h2 className='text-2xl text-port-white mt-4 lg:mt-1'>{t('contacts:opensource_subtitle')}</h2>
                    </div>

                    <div className='ml-6 lg:ml-16 flex flex-col mt-4 max-w-xl'>
                        <p>{t('contacts:opensource_help')}
                            <br></br>
                            <br></br>
                            {t('contacts:opensource_github')} <a href="https://www.github.com/bernasx" className='text-port-link-blue hover:text-port-link-blue-hover' target="_blank" rel="noreferrer">www.github.com/bernasx</a>.
                        </p>
                    </div>
                </div>

                <div>

                </div>

            </div>

        </Layout>
    )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {

    return {
        props: {
            ...(await serverSideTranslations(locale, ['contacts', 'common']))
        }
    }
}


export default Projects