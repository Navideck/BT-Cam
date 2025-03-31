"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Download Now</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Available on All Your Devices
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BT Cam is available on iOS, Android, Windows, and as a Progressive Web App. One purchase unlocks access
              across all platforms.
            </p>
          </div>
        </div>

        <motion.div
          className="mx-auto max-w-4xl pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg border bg-card text-card-foreground shadow">
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <Apple className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold">iOS</h3>
            <p className="text-center text-muted-foreground">Download from the App Store for iPhone and iPad.</p>
            <Button className="w-full mt-auto" asChild>
              <a
                href="https://apps.apple.com/us/app/bt-remote-for-sony-cameras/id6443771044"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for iOS
              </a>
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg border bg-card text-card-foreground shadow">
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.274.109-.522.293-.707zM14.208 12l4.686 4.686-9.978 5.582 5.292-10.268zm4.686-4.686l-9.978-5.582 5.292 10.268 4.686-4.686zm-10.75-5.636L17.792 12l-9.648 9.648L4.208 12l3.936-9.648z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Android</h3>
            <p className="text-center text-muted-foreground">Download from Google Play for Android devices.</p>
            <Button className="w-full mt-auto" asChild>
              <a
                href="https://play.google.com/store/apps/details?id=com.navideck.sonybt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for Android
              </a>
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg border bg-card text-card-foreground shadow">
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Windows</h3>
            <p className="text-center text-muted-foreground">Download from the Microsoft Store for Windows devices.</p>
            <Button className="w-full mt-auto" asChild>
              <a href="https://www.microsoft.com/store/apps/9NF3QTTB8SD5" target="_blank" rel="noopener noreferrer">
                Download for Windows
              </a>
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg border bg-card text-card-foreground shadow">
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <svg
                className="h-10 w-10"
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
              </svg>
            </div>
            <h3 className="text-xl font-bold">Web App</h3>
            <p className="text-center text-muted-foreground">
              Use the Progressive Web App on any device with a browser.
            </p>
            <Button className="w-full mt-auto" asChild>
              <a href="https://bt-cam.web.app" target="_blank" rel="noopener noreferrer">
                Open Web App
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

