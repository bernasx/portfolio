const ProjectCard = () => {
    return (
        <div className='flex flex-col w-auto h-80 bg-port-darker-blue rounded-xl p-4'>

            <div className='flex w-full justify-between'>
                <h3 className='text-port-light-green'>ZigZag Fotografia e Vídeo</h3>
                <span className='p-1 bg-port-light-green text-port-dark-gray rounded-md text-sm font-bold'>Prototype</span>
            </div>
            <h4 className='text-md'>JavaScript <span className='text-port-light-green'>/</span> TypeScript <span className='text-port-light-green'>/</span> Python  <span className='text-port-light-green'>/</span> Python  <span className='text-port-light-green'>/</span> Python  <span className='text-port-light-green'>/</span> Python</h4>
            

        </div>
    )
}

export default ProjectCard;