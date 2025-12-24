import { Wall, IntroTree, TextIntro } from './components'

const Intro = () => {
  return (
    <>
      <IntroTree />
      <TextIntro />
      <Wall position={[-12.95, 0, -3.75]} rowCounts={[3, 2]} />
      <Wall position={[-15, 0, -2]} rotation={[0, Math.PI / 2, 0]} rowCounts={[4, 3]} />
      <Wall position={[-15, 0, 3]} rotation={[0, Math.PI / 2, 0]} rowCounts={[3, 2]} />
      <Wall position={[-12, 0, 15]} rotation={[0, Math.PI / 2, 0]} rowCounts={[5, 4]} />
      <Wall position={[12.95, 0, -3.75]} rowCounts={[2, 1]} />
      <Wall position={[15, 0, -2]} rotation={[0, Math.PI / 2, 0]} rowCounts={[4, 3]} />
    </>
  )
}

export default Intro
