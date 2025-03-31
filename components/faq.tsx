"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Which camera brands are supported?",
      answer:
        "BT Cam supports Bluetooth-enabled DSLR, mirrorless and compact cameras from Canon, Nikon, Sony, Fujifilm, GoPro, Panasonic, Blackmagic Design, Olympus/OM System, and Pentax/Ricoh.",
    },
    {
      question: "How does BT Cam connect to my camera?",
      answer:
        "BT Cam uses Bluetooth Low Energy (BLE) to connect with your camera, offering a reliable and low-power alternative to WiFi-based remotes.",
    },
    {
      question: "Can I control multiple cameras at once?",
      answer:
        "Yes, BT Cam allows you to connect and control multiple cameras simultaneously, even from different brands, to capture stunning multi-angle shots.",
    },
    {
      question: "Will BT Cam drain my camera's battery?",
      answer:
        "BT Cam uses Bluetooth Low Energy which consumes minimal battery power. Your camera will last longer compared to using WiFi-based remotes while maintaining cooler temperatures.",
    },
    {
      question: "Can I try BT Cam before purchasing?",
      answer:
        "Yes, we offer a free trial so you can test compatibility with your camera. Once the trial expires, you can choose between a monthly subscription or a one-time lifetime purchase.",
    },
    {
      question: "Do I need to purchase separate licenses for different devices?",
      answer:
        "No, one purchase unlocks access across all platforms that BT Cam supports. Use it on all your devices with a single license.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about BT Cam and its features.
            </p>
          </div>
        </div>

        <motion.div
          className="mx-auto max-w-3xl pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

