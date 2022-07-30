const LinkAnchor = ({content,url}:{content:string, url:string}) => {

    return <a href={url} target="_blank" rel="noreferrer" className='text-port-dark-link-blue hover:text-port-dark-link-blue-hover dark:text-port-link-blue dark:hover:text-port-link-blue-hover'>
        {content}
        </a>
    
}

export default LinkAnchor;