"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Bluetooth, Smartphone, Camera, Check } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Download the App",
      description: "Get BT Cam from the App Store, Google Play, or Microsoft Store.",
    },
    {
      icon: <Bluetooth className="h-12 w-12" />,
      title: "Enable Bluetooth",
      description: "Turn on Bluetooth on both your smartphone and camera.",
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Connect Your Camera",
      description: "Select your camera from the list of available devices in the app.",
    },
    {
      icon: <Check className="h-12 w-12" />,
      title: "Start Shooting",
      description: "Use the app to control your camera's shutter, focus, zoom, and more.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Getting Started</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BT Cam uses Bluetooth to connect with your camera, offering a convenient alternative to traditional
              remotes.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="rounded-full bg-primary/10 p-4 text-primary mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>

                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <div className="h-1 w-8 bg-primary/30 rounded-full"></div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

