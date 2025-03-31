"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function AppScreenshots() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/placeholder.svg?height=800&width=400&text=Main+Interface",
      alt: "BT Cam main interface with shutter controls",
    },
    {
      src: "/placeholder.svg?height=800&width=400&text=Camera+Selection",
      alt: "Camera selection screen showing multiple connected devices",
    },
    {
      src: "/placeholder.svg?height=800&width=400&text=Advanced+Settings",
      alt: "Advanced camera settings and controls",
    },
    {
      src: "/placeholder.svg?height=800&width=400&text=Timer+Features",
      alt: "Self-timer and timelapse configuration",
    },
  ]

  return (
    <section id="screenshots" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">App Preview</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Intuitive Interface</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BT Cam is designed to be easy to use while providing powerful camera control features.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4 gap-6 pt-16">
          {images.map((image, i) => (
            <motion.div
              key={i}
              className="group relative aspect-[9/16] overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(i)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-bold text-white">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-md p-0 bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative aspect-[9/16] w-full">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

