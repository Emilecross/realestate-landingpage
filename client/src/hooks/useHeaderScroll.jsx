import { useEffect, useState } from 'react'

function on(obj, ...args) {
    obj.addEventListener(...args)
}
  
function off(obj, ...args) {
    obj.removeEventListener(...args)
}

const useHeaderScroll = () => {
  let prevScroll
  if (process.browser) {
    prevScroll = window.scrollY;
  }
  const [scrollingUp, setScrollingUp] = useState(false)
  const handleScroll = () => {
    const currScroll = window.scrollY
    const isScrolled = prevScroll > currScroll
    setScrollingUp(isScrolled)
    prevScroll = currScroll
  }
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true })
    return () => {
      off(window, 'scroll', handleScroll, { passive: true })
    }
  }, [])
  return scrollingUp
}

export default useHeaderScroll;