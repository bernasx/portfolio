import type { NextPage } from 'next'
import Layout from '../components/portfolio/layout/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import ProjectCard from '../components/portfolio/project-card'
import ProjectsJSON from '../assets/projects/projects.json'

const Projects: NextPage = () => {
  const { t } = useTranslation();

  const projects = ProjectsJSON.map(project =>
    <ProjectCard
      key={`${project.title}_key`}
      title={project.title}
      status={project.status}
      description={project.description}
      url={project.url}
      img_url={project.img_url}
      img_alt={project.img_alt}
      stack={project.stack}
    />)

  return (
    <Layout>
      <div className='grid'>

        <div className='lg:ml-12 md:ml-8 ml-4'>
          <h1 className='text-5xl text-port-light-green'>{t('projects:title')}</h1>
          <h3 className='text-xl mt-2'>{t('projects:subtitle')}</h3>
        </div>

        <div className='grid m-8 lg:m-12 gap-2 grid-cols-1 lg:grid-cols-2'>
          {projects}
        </div>


      </div>

    </Layout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects', 'common']))
    }
  }
}


export default Projects