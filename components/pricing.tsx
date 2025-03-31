"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "Free Trial",
      description: "Test compatibility with your camera",
      price: 0,
      period: "7 days",
      features: [
        "Basic camera control",
        "Shutter and focus control",
        "Compatible with all supported cameras",
        "Limited to 7 days",
      ],
      popular: false,
    },
    {
      name: "Monthly",
      description: "Flexible subscription option",
      price: annual ? 0 : 2.99,
      period: annual ? "" : "per month",
      features: [
        "Full camera control",
        "All advanced features",
        "Multi-camera support",
        "Regular updates",
        "Cancel anytime",
      ],
      popular: false,
    },
    {
      name: "Lifetime",
      description: "One-time purchase",
      price: 29.99,
      period: "one-time",
      features: [
        "Full camera control",
        "All advanced features",
        "Multi-camera support",
        "Lifetime updates",
        "Use on all your devices",
      ],
      popular: true,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Try before you buy with our free trial, then choose the plan that works best for you.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-4">
            <span className={`text-sm ${!annual ? "font-medium" : "text-muted-foreground"}`}>Monthly</span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className={`text-sm ${annual ? "font-medium" : "text-muted-foreground"}`}>
              Annual <span className="text-primary font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 pt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className={`flex flex-col w-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.price === 0 ? "Start Free Trial" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          One purchase unlocks access across all platforms that BT Cam supports.
        </div>
      </div>
    </section>
  )
}

