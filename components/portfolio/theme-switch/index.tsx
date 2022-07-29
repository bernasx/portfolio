import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/solid'
import {useTheme} from 'next-themes'
import useWindowSize from '../../../lib/useWindowSize'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [enabled, setEnabled] = useState(theme == 'light' ? false : true)
  const [mounted, setMounted] = useState(false)
  const {width} = useWindowSize() // we have to use this here because tailwind does not support breakpoints for translate

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, []);

  useEffect(()=> {
    if(enabled){
      setTheme('dark');
    } else {
      setTheme('light');
    }
  },[enabled,setTheme])

  if (!mounted) {
    return null
  }

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
      <span className="sr-only">Enable notifications</span>
      <span
        className={switchIconClass}
      >{enabled ? <MoonIcon color='white'></MoonIcon> : <SunIcon color='white'></SunIcon>}
      </span>
    </Switch>
}

export default ThemeSwitch;