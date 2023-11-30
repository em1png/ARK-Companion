import Affected from './components/Affected'
import CanDamage from './components/CanDamage'
import CarryableByFlyers from './components/CarryableByFlyers'
import CarryableByOther from './components/CarryableByOther'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FitsThrough from './components/FitsThrough'
import Title from '@/components/shared/Title'

const Capabilities = () => {
  return (
    <section className='container mb-10'>
      <Title title='Capabilities & Carrying'>Capabilities & Carrying</Title>

      <div className="w-full h-full flex flex-col">
        <Tabs defaultValue="CarryableByFlyers" className="w-full">
          <div className='w-full h-full flex justify-start items-center'>
            <TabsList>
              <TabsTrigger value="CarryableByFlyers">Carryable By Flyers</TabsTrigger>
              <TabsTrigger value="CarryableByOther">Carryable By Others</TabsTrigger>
              <TabsTrigger value="CanDamage">Can Damage</TabsTrigger>
              <TabsTrigger value="Affected">Affected</TabsTrigger>
              <TabsTrigger value="FitsThrough">Fits Through</TabsTrigger>
            </TabsList>
          </div>


          <TabsContent value="CarryableByFlyers">
            <CarryableByFlyers />
          </TabsContent>

          <TabsContent value="CarryableByOther">
            <CarryableByOther />
          </TabsContent>

          <TabsContent value="CanDamage">
            <CanDamage />
          </TabsContent>

          <TabsContent value="Affected">
            <Affected />
          </TabsContent>


          <TabsContent value="FitsThrough">
            <FitsThrough />
          </TabsContent>

        </Tabs>
      </div>
    </section >
  )
}

export default Capabilities