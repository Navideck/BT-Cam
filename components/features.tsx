"use client"

import { motion } from "framer-motion"
import { Camera, Bluetooth, Timer, Zap, Focus, Video, MapPin, Lock, Smartphone } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Bluetooth className="h-10 w-10" />,
      title: "Bluetooth Connectivity",
      description: "Connect to your camera via Bluetooth for reliable, low-power remote control.",
    },
    {
      icon: <Focus className="h-10 w-10" />,
      title: "Advanced Focus Control",
      description: "Press and hold to focus, lift to trigger shutter, or use auto-focus and manual focus options.",
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Video Recording",
      description: "Start/stop recording and auto-restart when camera time limits are reached.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Fast Connection",
      description: "Enjoy quick boot-up and camera connection times so you never miss the perfect shot.",
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Geotagging",
      description: "Add location data to your photos directly from your smartphone.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Multi-Camera Control",
      description: "Connect and control multiple cameras simultaneously for perfect multi-angle shots.",
    },
    {
      icon: <Timer className="h-10 w-10" />,
      title: "Self-Timer",
      description: "Set delays for photos or create effortless timelapse sequences.",
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Shutter Button Lock",
      description: "Enable burst shooting, bulb mode, or timelapse capture with the lock feature.",
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Multiple Brands",
      description: "Works with Canon, Nikon, Sony, Fujifilm, GoPro, and many more camera brands.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">App Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need in a Camera Remote
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BT Cam gives you complete control over your camera with features that go beyond traditional remotes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-card-foreground shadow transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-primary/10 p-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

