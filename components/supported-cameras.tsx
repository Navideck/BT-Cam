"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function SupportedCameras() {
  const brands = [
    {
      name: "Canon",
      models: ["EOS R", "EOS RP", "EOS R5", "EOS R6", "EOS R7", "EOS R10"],
      remotes: ["BR-E1"],
    },
    {
      name: "Nikon",
      models: ["Z6", "Z7", "Z50", "Z5", "Z6 II", "Z7 II", "Z9"],
      remotes: ["ML-L7"],
    },
    {
      name: "Sony",
      models: ["A7 III", "A7R IV", "A9 II", "A6600", "A6400", "A6100", "ZV-E10"],
      remotes: ["RMT-P1BT"],
    },
    {
      name: "Fujifilm",
      models: ["X-T4", "X-T3", "X-T30", "X-S10", "X-E4", "X-Pro3"],
      remotes: ["TG-BT1"],
    },
    {
      name: "GoPro",
      models: ["HERO9", "HERO10", "HERO11", "HERO12"],
      remotes: ["The Remote"],
    },
    {
      name: "Others",
      models: ["Panasonic", "Blackmagic Design", "Olympus / OM System", "Pentax / Ricoh"],
      remotes: ["RM-WR2", "RM-WR1"],
    },
  ]

  return (
    <section id="cameras" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Compatibility</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Works With Your Camera</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BT Cam supports a wide range of Bluetooth-enabled cameras from major manufacturers.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl pt-16">
          <Tabs defaultValue="Canon" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {brands.map((brand) => (
                <TabsTrigger
                  key={brand.name}
                  value={brand.name}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {brand.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {brands.map((brand) => (
              <TabsContent key={brand.name} value={brand.name} className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-xl font-bold mb-4">{brand.name} Compatible Models</h3>
                          <ul className="space-y-2">
                            {brand.models.map((model, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary"></div>
                                <span>{model}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-lg font-bold mt-6 mb-2">Replaces These Remotes:</h4>
                          <ul className="space-y-1">
                            {brand.remotes.map((remote, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                {remote}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="relative h-64 w-64">
                            <Image
                              src={`/placeholder.svg?height=256&width=256&text=${brand.name}`}
                              alt={`${brand.name} cameras`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

