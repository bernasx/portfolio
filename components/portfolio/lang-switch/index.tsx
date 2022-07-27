import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Switch } from '@headlessui/react'
import useWindowSize from '../../../lib/useWindowSize'

const LangSwitch = () => {
  const { locale, asPath } = useRouter();
  const [enabled, setEnabled] = useState(locale === 'en' ? false : true)
  const router = useRouter();
  const {width} = useWindowSize() // we have to use this here because tailwind does not support breakpoints for translate

  useEffect(()=> {
    const goToLocale = (newLocale:string) => {
      document.cookie=`NEXT_LOCALE=${newLocale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
      router.push(asPath, asPath, { locale: newLocale })
    }
    if(enabled){
      // PT
      goToLocale('pt');
    } else {
      // EN
      goToLocale('en');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[enabled])

    let switchClass = `${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-8 w-16 items-center rounded-md bg-port-superlight-green dark:bg-port-darker-blue`
    let switchIconClass =  `${enabled ? 'translate-x-8' : 'translate-x-1'} inline-block h-7 w-7 transform rounded-md bg-port-light-green`

    if(width! < 375) {
      switchClass = `${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-7 w-14 items-center rounded-md bg-port-superlight-green dark:bg-port-darker-blue`
      switchIconClass =  `${enabled ? 'translate-x-7' : 'translate-x-1'} inline-block h-6 w-6 transform rounded-md bg-port-light-green`
    }

    return <Switch
      checked={enabled}
      onChange={setEnabled}
      className={switchClass}
      >

      <span className="sr-only">Switch Language</span>

      <span
        className={switchIconClass}
      > <div className='flex items-center justify-center w-full h-full text-lg text-white'>{enabled ? 'PT' : 'EN'}</div>
      </span>

    </Switch>
  }

export default LangSwitch;