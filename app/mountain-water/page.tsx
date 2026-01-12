'use client'

import { View } from '@/common/canvas/View'
import { MountainWater } from '@/components/mountain-water'
import { useMode } from '@/store/useMode'
import { Leva } from 'leva'

export default function Page() {
  const { isDebug } = useMode()
  return (
    <>
      <Leva hidden={!isDebug} />
      <View className='h-full w-full' orbit>
        <MountainWater />
      </View>
    </>
  )
}
