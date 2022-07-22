import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/solid'
import {useTheme} from 'next-themes'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [enabled, setEnabled] = useState(theme == 'light' ? false : true)
  const [mounted, setMounted] = useState(false)

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
    return <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-8 w-16 items-center rounded-md bg-port-superlight-green dark:bg-port-darker-blue`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? 'translate-x-8' : 'translate-x-1'
          } inline-block h-7 w-7 transform rounded-md bg-port-light-green`}
      >{enabled ? <MoonIcon color='white'></MoonIcon> : <SunIcon color='white'></SunIcon>}
      </span>
    </Switch>
}

export default ThemeSwitch;