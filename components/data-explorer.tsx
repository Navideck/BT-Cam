"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, RefreshCw } from "lucide-react"
import DataCard from "./data-card"
import DataVisualizer from "./data-visualizer"
import { motion } from "./motion"

export default function DataExplorer({ initialData }) {
  const [data, setData] = useState(initialData)
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("default")
  const [isLoading, setIsLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  // Extract categories from data if available
  const categories =
    data && data.items ? ["all", ...new Set(data.items.map((item) => item.category || "uncategorized"))] : ["all"]

  useEffect(() => {
    if (data && data.items) {
      let results = [...data.items]

      // Apply search filter
      if (searchTerm) {
        results = results.filter(
          (item) =>
            (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())),
        )
      }

      // Apply category filter
      if (activeCategory !== "all") {
        results = results.filter((item) => item.category === activeCategory)
      }

      // Apply sorting
      if (sortBy === "name-asc") {
        results.sort((a, b) => (a.title || "").localeCompare(b.title || ""))
      } else if (sortBy === "name-desc") {
        results.sort((a, b) => (b.title || "").localeCompare(a.title || ""))
      } else if (sortBy === "date-asc") {
        results.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0))
      } else if (sortBy === "date-desc") {
        results.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
      }

      setFilteredData(results)
    }
  }, [data, searchTerm, sortBy, activeCategory])

  const refreshData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/refresh-data")
      const freshData = await response.json()
      setData(freshData)
    } catch (error) {
      console.error("Error refreshing data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">Data Explorer</CardTitle>
              <CardDescription>{filteredData.length} items found</CardDescription>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search..."
                  className="pl-9 bg-slate-900 border-slate-700 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
                onClick={refreshData}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>
        </CardHeader>

        {showFilters && (
          <CardContent>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="text-sm font-medium text-slate-300 mb-2 block">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300 mb-2 block">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-slate-900 border-slate-700 text-white">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700 text-white">
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="date-asc">Date (Oldest first)</SelectItem>
                    <SelectItem value="date-desc">Date (Newest first)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          </CardContent>
        )}
      </Card>

      {data.error ? (
        <Card className="bg-red-900/20 border-red-700">
          <CardContent className="pt-6">
            <p className="text-red-300">Error loading data. Please try again later.</p>
          </CardContent>
        </Card>
      ) : (
        <>
          <DataVisualizer data={filteredData} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <DataCard item={item} />
              </motion.div>
            ))}

            {filteredData.length === 0 && (
              <Card className="col-span-full bg-slate-800/50 border-slate-700">
                <CardContent className="flex flex-col items-center justify-center p-12">
                  <p className="text-slate-400 text-lg mb-4">No results found</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setActiveCategory("all")
                      setSortBy("default")
                    }}
                  >
                    Clear filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </>
      )}
    </div>
  )
}

