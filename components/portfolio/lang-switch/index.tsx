import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Switch } from '@headlessui/react'
const LangSwitch = () => {
  const { locale, asPath } = useRouter();
  const [enabled, setEnabled] = useState(locale === 'en' ? false : true)
  const router = useRouter();


  useEffect(()=> {
    const goToLocale = (newLocale:string) => {
      document.cookie=`NEXT_LOCALE=${newLocale}`
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


    return <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
        }  relative inline-flex h-8 w-16 items-center rounded-md bg-port-superlight-green dark:bg-port-darker-blue`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? 'translate-x-8' : 'translate-x-1'
          } inline-block h-7 w-7 transform rounded-md bg-port-light-green`}
      > <div className='flex items-center justify-center w-full h-full text-lg text-white'>{enabled ? 'PT' : 'EN'}</div>
      </span>
    </Switch>
  }

export default LangSwitch;