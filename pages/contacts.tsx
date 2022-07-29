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
                        <h1 className='text-4xl text-port-light-green'>For hiring purposes?</h1>
                        <h2 className='text-2xl text-port-white mt-4 lg:mt-1'>I am looking for work!</h2>
                    </div>


                    <div className='ml-6 lg:ml-16 flex flex-col mt-4'>
                        <p>Send me a message on <a className='text-port-link-blue hover:text-port-link-blue-hover' href="https://www.linkedin.com/in/bernardoribeiro99/" target="_blank" rel="noreferrer"> Linkedin</a></p>
                        <a>Email me at <span className='text-port-link-blue hover:text-port-link-blue-hover'>bernardo.ribeiro99@gmail.com</span></a>
                        <br></br>
                        <br></br>
                        <p>Let me know if you wish to talk through Skype / Whatsapp or any other alternative app!</p>
                    </div>

                    <div className='ml-4 lg:ml-12 mt-8 lg:mt-12 flex flex-col'>
                        <h1 className='text-4xl text-port-light-green'>For any questions about my open-source code.</h1>
                        <h2 className='text-2xl text-port-white mt-4 lg:mt-1'>Contributions, help requests etc...</h2>
                    </div>

                    <div className='ml-6 lg:ml-16 flex flex-col mt-4'>
                        <p>If you need help with something or would like to contribute to my projects, <br></br>
                            please use the appropriate channels by opening a pull request or a new issue.
                            <br></br>
                            <br></br>
                            All my code is available on github at <a href="https://www.github.com/bernasx" className='text-port-link-blue hover:text-port-link-blue-hover' target="_blank" rel="noreferrer">www.github.com/bernasx</a>.
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