"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Apple } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Photography?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Download BT Cam today and experience the convenience of remote camera control.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm space-y-2 pt-4">
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="secondary" className="gap-1">
                Subscribe <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/80">
              Get updates on new features and camera compatibility. Unsubscribe anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-8">
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <a
                href="https://apps.apple.com/us/app/bt-remote-for-sony-cameras/id6443771044"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Apple className="h-4 w-4" /> App Store
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
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
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="https://www.microsoft.com/store/apps/9NF3QTTB8SD5" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>{" "}
                Windows
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
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
        </motion.div>
      </div>
    </section>
  )
}

