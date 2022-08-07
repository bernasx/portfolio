import Image from "next/image";
import { useTranslation } from 'next-i18next'
import LinkAnchor from '../link-anchor/index'
import { ArrowRightIcon, XIcon } from '@heroicons/react/solid'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'

type Props = {
    title: string,
    status: string,
    description: string,
    url: string,
    github_url: string,
    img_url: string,
    img_alt: string,
    featured: boolean,
    stack: string[]
}

const ProjectCard = ({ title, status, stack, description, url, github_url, img_url, img_alt, featured }: Props) => {
    const { t } = useTranslation();
    let [isOpen, setIsOpen] = useState(false);
    
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

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

        return <Fragment key={`${index}_${title}`}> {tech} <span className='text-port-dark-green font-bold dark:font-normal dark:text-port-light-green'>/</span> </Fragment>

    })

    return (
        <div className={`flex flex-col w-auto min-h-80 h-auto 
        bg-port-superlight-green hover:bg-port-superlight-green-hover  dark:bg-port-darker-blue rounded-xl p-4
         dark:hover:bg-port-darker-blue-hover
         ${featured && 'border-t-[24px] border-t-port-status-prototype'}`}>

            {featured && <h4 className="relative text-center -top-10 text-white -mb-8">{t('projects:featured')}</h4>}

            <div className='flex w-full justify-between'>
                <h3 className='font-bold text-port-dark-green dark:text-port-light-green'>{title}</h3>
                <span className={badgeClass}>{t(status)}</span>
            </div>
            <h4 className='text-md text-faded-gray'>{stackComponents}</h4>

            <div className='flex flex-col lg:justify-between lg:flex-row mt-2'>
                <p className='mb-2 mr-1 lg:w-3/4 text-faded-gray'>
                    {t(description)}
                </p>

                <Image onClick={openModal} src={img_url} width={256} height={256} alt={img_alt} 
                className='rounded-md mt-2 object-cover hover:opacity-70 cursor-pointer'/>

            </div>
            <div className="flex flex-row gap-x-4 mt-2">
                <LinkAnchor content={'Github'} url={github_url} />
                {status === 'common:status_live' && <span className='flex flex-row items-center space-x-1 text-port-dark-link-blue 
                hover:text-port-dark-link-blue-hover dark:text-port-link-blue dark:hover:text-port-link-blue-hover'>
                <LinkAnchor content={'Website'} url={url} /> 
                <ArrowRightIcon className='h-4 w-4 inline' />
                </span>}
            </div>


            {/*Modal dialogue to see image in large size*/}
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex h-screen items-center justify-center text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel 
                                    className="w-[90%] h-[90%] flex flex-col rounded-2xl bg-white 
                                    dark:bg-port-dark-gray p-4 align-middle shadow-xl transform transition-all"
                                    >

                                        <div className="flex justify-between">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-md text-port-dark-green dark:text-port-light-green mb-2"
                                            >
                                                {title}
                                            </Dialog.Title>
                                            <button className="text-port-darker-blue hover:text-port-faded-gray dark:text-white dark:hover:text-port-faded-gray" 
                                            onClick={closeModal}>
                                                <XIcon className='h-6 w-6 inline' />
                                            </button>
                                        </div>


                                        <div className="h-full w-full relative">
                                            <Image src={img_url} alt={img_alt} layout='fill' objectFit='contain'></Image>
                                        </div>

                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>

        </div>
    )
}

export default ProjectCard;