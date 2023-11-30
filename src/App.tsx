import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Topbar from './components/shared/Topbar'
import AllCreatures from './pages/CreaturesAll/AllCreatues'
import CreatureItem from './pages/CreatureItem'
import Capabilities from './pages/CreaturesCarrying'
import HeadshotsModifiers from './pages/CreaturesHeadshotsModifiers'
import Stats from './pages/CreaturesStats'
import XP from './pages/CreaturesXP'
import ItemsResources from './pages/ItemsResources'
import ItemsKibbles from './pages/ItemsKibbles'
import ItemsConsumables from './pages/ItemsConsumables'
import ItemsDyes from './pages/ItemsDyes'

function App() {
  return (
    <main className='flex flex-col h-full'>
      <Topbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/creatures/all' element={<AllCreatures />} />
        <Route path='/creatures/:name' element={<CreatureItem />} />
        <Route path='/creatures/capabilities' element={<Capabilities />} />
        <Route path='/creatures/modifiers' element={<HeadshotsModifiers />} />
        <Route path='/creatures/stats' element={<Stats />} />
        <Route path='/creatures/xp' element={<XP />} />
        <Route path='/items/resources' element={<ItemsResources />} />
        <Route path='/items/kibbles' element={<ItemsKibbles />} />
        <Route path='/items/consumables' element={<ItemsConsumables />} />
        <Route path='/items/dyes' element={<ItemsDyes />} />
      </Routes>
    </main>
  )
}

export default App
