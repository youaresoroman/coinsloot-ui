import { useCallback, useEffect } from 'react';
import { useStore } from 'react-context-hook'
import { debounce } from '../../utils';

const useTheme = () => {
  const [actualTheme, setTheme] = useStore('theme') as [string, (value: string) => void, () => void];

  const toggleTheme = () => {
    if (actualTheme === "darkTheme") {
      setTheme("lightTheme")
    } else {
      setTheme("darkTheme")
    }
  }

  const setBodyClass = (theme: string) => {
    if (!document.body.classList.contains("lightTheme") && theme == "lightTheme") {
      document.body.classList.add("lightTheme")
    } else if (document.body.classList.contains("lightTheme") && theme == "darkTheme") {
      document.body.classList.remove("lightTheme")
    }
  }

  useEffect(() => {
    const browserTheme = localStorage.getItem("theme") as "lightTheme" | "darkTheme"
    if (!browserTheme) {
      localStorage.setItem("theme", actualTheme)
    } else if (browserTheme && browserTheme !== actualTheme) {
      setTheme(browserTheme)
    }
    window.addEventListener("storage", () => {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme != actualTheme) {
        setTheme(savedTheme || "darkTheme")
      }
    });
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", actualTheme)
    setBodyClass(actualTheme)
  }, [actualTheme])

  return {
    actualTheme,
    toggleTheme
  }

}

export default useTheme