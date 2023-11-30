import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicKibble from "./components/BasicKibble"
import { items } from "@/constants/items"
import Title from "@/components/shared/Title"

const ItemsKibbles = () => {
  return (
    <section className='container'>
      <Title title='Kibble List'> Kibble List </Title>

      <div className="w-full h-full flex flex-col p-5 rounded-2xl border-dark-4 border">
        <Tabs defaultValue="BasicKibble" className="w-full">
          <div className='w-full flex-center'>
            <TabsList>
              <TabsTrigger value="BasicKibble">Basic Kibble</TabsTrigger>
              <TabsTrigger value="SimpleKibble">Simple Kibble</TabsTrigger>
              <TabsTrigger value="RegularKibble">Ragular Kibble</TabsTrigger>
              <TabsTrigger value="Superior Kibble">Superior Kibble</TabsTrigger>
              <TabsTrigger value="Exceptional Kibble">Exceptional Kibble</TabsTrigger>
              <TabsTrigger value="Extraordinary Kibble">Extraordinary Kibble</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="BasicKibble"> <BasicKibble kibble={items.kibbles.basicKibble} /> </TabsContent>
          <TabsContent value="SimpleKibble"> <BasicKibble kibble={items.kibbles.simpleKibble} /> </TabsContent>
          <TabsContent value="RegularKibble"> <BasicKibble kibble={items.kibbles.regularKibble} /> </TabsContent>
          <TabsContent value="Superior Kibble"> <BasicKibble kibble={items.kibbles.superiorKibble} /> </TabsContent>
          <TabsContent value="Exceptional Kibble"> <BasicKibble kibble={items.kibbles.exceptionalKibble} /> </TabsContent>
          <TabsContent value="Extraordinary Kibble"> <BasicKibble kibble={items.kibbles.extraordinaryKibble} /> </TabsContent>
        </Tabs>
      </div>
    </section >
  )
}

export default ItemsKibbles