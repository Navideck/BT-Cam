import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Tag, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function DataCard({ item }) {
  // Handle different data structures
  const title = item.title || item.name || "Untitled"
  const description = item.description || item.summary || ""
  const imageUrl = item.image || item.thumbnail || item.imageUrl || "/placeholder.svg?height=200&width=400"
  const category = item.category || item.type || "uncategorized"
  const date = item.date || item.createdAt || null
  const tags = item.tags || []
  const link = item.url || item.link || "#"

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {category && <Badge className="absolute top-3 right-3 bg-slate-800/80 hover:bg-slate-800/80">{category}</Badge>}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        {date && (
          <CardDescription className="flex items-center gap-1 text-slate-400">
            <Calendar className="h-3 w-3" />
            {new Date(date).toLocaleDateString()}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-slate-300 line-clamp-3">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-4">
            {tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2">
        <Button variant="ghost" className="w-full text-cyan-400 hover:text-cyan-300 hover:bg-slate-700" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Details
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

