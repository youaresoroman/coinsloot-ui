import { useEffect } from 'react';
import { useStore } from 'react-context-hook'

const useTheme = () => {
  const [actualTheme, setTheme] = useStore('theme') as [string, (value: string) => void, () => void];

  const toggleTheme = () => {
    if (actualTheme === "darkTheme") {
      setTheme("lightTheme")
    } else {
      setTheme("darkTheme")
    }
  }

  useEffect(()=>{
    const browserTheme = localStorage.getItem("theme")
    if (!browserTheme) {
      localStorage.setItem("theme", actualTheme)
    } else if (browserTheme && browserTheme !== actualTheme) {
      setTheme(browserTheme)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("theme", actualTheme)
  },[actualTheme])

  return {
    actualTheme,
    toggleTheme
  }

}

export default useTheme