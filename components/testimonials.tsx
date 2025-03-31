"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Photographer",
      image: "/placeholder.svg?height=100&width=100&text=SJ",
      quote:
        "The BT Cam Pro has completely transformed my workflow. The image quality is outstanding, and the autofocus is the fastest I've ever used.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Travel Vlogger",
      image: "/placeholder.svg?height=100&width=100&text=MC",
      quote:
        "I've taken my BT Cam to over 30 countries, and it's never let me down. The battery life and durability are exceptional for travel photography.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Wildlife Photographer",
      image: "/placeholder.svg?height=100&width=100&text=ER",
      quote:
        "The telephoto capabilities of the BT Cam Pro allow me to capture wildlife moments I would have missed with my previous equipment.",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Loved by Photographers Worldwide
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say about BT Cam.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 pt-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                        />
                      ))}
                  </div>
                  <blockquote className="flex-grow">
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

