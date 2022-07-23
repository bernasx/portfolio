import type { NextPage } from 'next'
import Layout from '../components/portfolio/layout/index'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import ProjectCard from '../components/portfolio/project-card'
import styles from '../styles/projects.module.css'
const Projects: NextPage = () => {
  return (
    <Layout>
      <div className='fit-screen'>

        <div className='lg:ml-12 md:ml-8 ml-4'>
          <h1 className='text-5xl text-port-light-green'>Projects</h1>
          <h3  className='text-xl mt-2'>Images and Code available at each repository.</h3>
        </div>
        
        <div className={styles.projectsgrid}>
          <ProjectCard/>
          <ProjectCard/>
        </div>


      </div>
      
    </Layout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props:{
    ...(await serverSideTranslations(locale, ['projects','common']))
  }
})


export default Projects