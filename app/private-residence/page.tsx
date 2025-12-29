'use client'

import { View } from '@/components/canvas/View'
import { PrivateResidence } from '@/components/private-residence'
import { useMode } from '@/store/useMode'
import { Leva } from 'leva'


export default function Page() {
  const { isDebug } = useMode()
  return (
    <>
      <Leva hidden={!isDebug} />
      <View className='h-full w-full' orbit>
        <PrivateResidence />
      </View>
    </>
  )
}
