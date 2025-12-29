'use client'

import { View } from '@/components/canvas/View'
import { Assets, Room } from '@/components/room'
import { useMode } from '@/store/useMode'
import { Leva } from 'leva'

export default function Page() {
  const { isDebug } = useMode()
  return (
    <>
      <Leva hidden={!isDebug} />
      <View className='h-full w-full' orbit>
        <Assets />
        <Room />
      </View>
    </>
  )
}
