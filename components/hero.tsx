"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Remote Camera Control
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">BT Cam: All Camera Remote</h1>
            <p className="text-muted-foreground md:text-xl">
              Control your camera from your smartphone. Compatible with Canon, Nikon, Sony, Fujifilm, GoPro, and more.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://apps.apple.com/us/app/bt-remote-for-sony-cameras/id6443771044"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Apple className="h-4 w-4" /> App Store
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=com.navideck.sonybt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.274.109-.522.293-.707zM14.208 12l4.686 4.686-9.978 5.582 5.292-10.268zm4.686-4.686l-9.978-5.582 5.292 10.268 4.686-4.686zm-10.75-5.636L17.792 12l-9.648 9.648L4.208 12l3.936-9.648z" />
                  </svg>{" "}
                  Google Play
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://www.microsoft.com/store/apps/9NF3QTTB8SD5" target="_blank" rel="noopener noreferrer">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>{" "}
                  Windows
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://bt-cam.web.app" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>{" "}
                  Web App
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">4.8/5</span> from over 1,000 reviews
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-tr from-primary to-primary-foreground shadow-2xl max-w-xs mx-auto">
              <Image
                src="/placeholder.svg?height=800&width=400&text=BT+Cam+App"
                alt="BT Cam App"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                {isVideoPlaying ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="App Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="rounded-full bg-background/80 p-4 backdrop-blur">
                    <Play className="h-10 w-10 text-primary" />
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

