"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, PieChart, LineChart } from "lucide-react"

export default function DataVisualizer({ data }) {
  const [activeTab, setActiveTab] = useState("distribution")

  // Skip visualization if no data
  if (!data || data.length === 0) {
    return null
  }

  // Process data for visualizations
  const categoryDistribution = data.reduce((acc, item) => {
    const category = item.category || "uncategorized"
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})

  // Get dates if available for timeline
  const dateItems = data.filter((item) => item.date).sort((a, b) => new Date(a.date) - new Date(b.date))

  const hasTimeline = dateItems.length > 0

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Data Visualization</CardTitle>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-slate-900">
              <TabsTrigger value="distribution" className="data-[state=active]:bg-cyan-500">
                <PieChart className="h-4 w-4 mr-2" />
                Distribution
              </TabsTrigger>
              {hasTimeline && (
                <TabsTrigger value="timeline" className="data-[state=active]:bg-cyan-500">
                  <LineChart className="h-4 w-4 mr-2" />
                  Timeline
                </TabsTrigger>
              )}
              <TabsTrigger value="comparison" className="data-[state=active]:bg-cyan-500">
                <BarChart className="h-4 w-4 mr-2" />
                Comparison
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <TabsContent value="distribution" className="mt-0">
          <div className="h-[300px] flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="flex justify-between mb-4">
                <div className="font-medium">Category</div>
                <div className="font-medium">Count</div>
              </div>
              {Object.entries(categoryDistribution).map(([category, count], index) => (
                <div key={category} className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{category}</span>
                    <span>{count}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${(count / data.length) * 100}%`,
                        backgroundColor: getColorByIndex(index),
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {hasTimeline && (
          <TabsContent value="timeline" className="mt-0">
            <div className="h-[300px] flex items-center justify-center">
              <div className="w-full">
                <div className="relative h-[250px] mt-6">
                  {/* Simple timeline visualization */}
                  <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-slate-700"></div>

                  {dateItems.map((item, index) => {
                    const position = (index / (dateItems.length - 1 || 1)) * 100
                    return (
                      <div
                        key={index}
                        className="absolute bottom-0 transform -translate-x-1/2"
                        style={{ left: `${position}%` }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mb-1"
                          style={{ backgroundColor: getColorByIndex(index % 5) }}
                        ></div>
                        <div className="text-xs text-slate-400 rotate-45 origin-top-left whitespace-nowrap">
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <div
                          className="absolute bottom-3 transform -translate-x-1/2 text-xs max-w-[100px] truncate text-center"
                          style={{ left: "50%" }}
                        >
                          {item.title || "Item"}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </TabsContent>
        )}

        <TabsContent value="comparison" className="mt-0">
          <div className="h-[300px] flex items-center justify-center">
            <div className="w-full h-full flex items-end justify-around gap-2 pt-10 pb-5">
              {Object.entries(categoryDistribution).map(([category, count], index) => {
                const percentage = (count / data.length) * 100
                return (
                  <div key={category} className="flex flex-col items-center">
                    <div
                      className="w-16 rounded-t-md transition-all duration-1000 ease-out"
                      style={{
                        height: `${Math.max(percentage * 2, 10)}%`,
                        backgroundColor: getColorByIndex(index),
                      }}
                    ></div>
                    <div className="text-xs mt-2 font-medium">{category}</div>
                    <div className="text-xs text-slate-400">{count}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </TabsContent>
      </CardContent>
    </Card>
  )
}

function getColorByIndex(index) {
  const colors = [
    "#06b6d4", // cyan-500
    "#8b5cf6", // violet-500
    "#ec4899", // pink-500
    "#10b981", // emerald-500
    "#f59e0b", // amber-500
    "#ef4444", // red-500
  ]
  return colors[index % colors.length]
}

