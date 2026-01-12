'use client'

import { useMode } from '@/store/useMode'
import { useEffect } from 'react'

export default function Layout({ children }) {
  const { updateIsDebug } = useMode()

  useEffect(() => {
    updateIsDebug(window.location.hash === '#/debug')
  }, [])
  return <>{children}</>
}
