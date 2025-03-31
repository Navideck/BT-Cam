"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/placeholder.svg?height=600&width=800&text=Landscape",
      alt: "Stunning landscape shot with BT Cam Pro",
      category: "Landscape",
    },
    {
      src: "/placeholder.svg?height=800&width=600&text=Portrait",
      alt: "Professional portrait photography",
      category: "Portrait",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Wildlife",
      alt: "Wildlife photography in natural habitat",
      category: "Wildlife",
    },
    {
      src: "/placeholder.svg?height=800&width=600&text=Street",
      alt: "Urban street photography",
      category: "Street",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Macro",
      alt: "Detailed macro photography",
      category: "Macro",
    },
    {
      src: "/placeholder.svg?height=800&width=600&text=Night",
      alt: "Night photography with long exposure",
      category: "Night",
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Gallery</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shot on BT Cam</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what professionals and enthusiasts are capturing with our cameras.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-16">
          {images.map((image, i) => (
            <motion.div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
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
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xs font-medium text-primary bg-white/80 rounded-full px-2 py-1 inline-block mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-lg font-bold text-white">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative aspect-[4/3] w-full">
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

