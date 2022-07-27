import Image from "next/image";
import { useTranslation } from 'next-i18next'
import {Fragment} from "react";

type Props = {
    title: string,
    status: string,
    description: string,
    url: string,
    img_url: string,
    img_alt: string,
    stack: string[]
}

const ProjectCard = ({ title, status, stack, description, url, img_url, img_alt }: Props) => {
    const { t } = useTranslation();

    let badgeClass = 'p-1 w-24 text-center self-center text-port-dark-gray rounded-md text-sm font-bold'
    switch (status) {
        case 'common:status_live':
            badgeClass += ' bg-port-status-live'
            break;
        case 'common:status_complete':
            badgeClass += ' bg-port-status-complete'
            break;
        case 'common:status_incomplete':
            badgeClass += ' bg-port-status-incomplete'
            break;
        case 'common:status_prototype':
            badgeClass += ' bg-port-status-prototype'
            break;
        default:
            badgeClass += ' bg-port-status-incomplete'
            break;
    }

    const stackComponents = stack.map((tech, index) => {

        if (index === stack.length - 1) { return tech };

        return <Fragment key={`${index}_${title}`}> {tech} <span className='text-port-light-green'>/</span> </Fragment>

    })

    return (
        <a href={url} target="_blank" rel="noreferrer" className='flex flex-col w-auto min-h-80 h-auto bg-port-darker-blue rounded-xl p-4 hover:bg-port-darker-blue-hover'>
            <div className='flex w-full justify-between'>
                <h3 className='text-port-light-green'>{title}</h3>
                <span className={badgeClass}>{t(status)}</span>
            </div>
            <h4 className='text-md'>{stackComponents}</h4>

            <div className='flex flex-col lg:justify-between lg:flex-row mt-2'>
                <p className='mb-2 lg:w-3/4'>
                    {t(description)}
                </p>

                <Image id='mainphoto' src={img_url} width={256} height={256} alt={img_alt} className='rounded-md mt-2 object-cover'></Image>

            </div>

        </a>
    )
}

export default ProjectCard;