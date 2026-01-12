'use client'

import { View } from '@/common/canvas/View'
import { InteriorLighting } from '@/components/interior-lighting'
import { useMode } from '@/store/useMode'
import { Leva } from 'leva'


export default function Page() {
  const { isDebug } = useMode()
  return (
    <>
      <Leva hidden={!isDebug} />
      <View className='h-full w-full' orbit>
        <InteriorLighting />
      </View>
    </>
  )
}
