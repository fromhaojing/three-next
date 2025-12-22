'use client'

import { View } from '@/components/canvas/View'
import { InfiniteOllision } from '@/components/infinite-ollision'
import { useMode } from '@/store/useMode'
import { Leva } from 'leva'


export default function Page() {
  const { isDebug } = useMode()
  return (
    <>
      <Leva hidden={!isDebug} />
      <View className='h-full w-full' orbit>

        <InfiniteOllision />
      </View>
    </>
  )
}
