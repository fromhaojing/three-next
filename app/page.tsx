'use client'
import { PATH } from '@/utils/constant'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.replace(PATH.ROOM)
  }, [router])

  return <div>Redirecting to organic page...</div>
}
