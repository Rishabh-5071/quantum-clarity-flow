import { useState } from "react";
import { Search as SearchIcon, Filter, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SearchResult {
  id: string;
  filename: string;
  type: string;
  chunk: string;
  score: number;
  uploadDate: string;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    filename: "Annual Report 2024.pdf",
    type: "PDF",
    chunk: "The company achieved record revenue of $180.5 million in fiscal year 2024, representing 28% growth year-over-year...",
    score: 0.95,
    uploadDate: "2024-10-01",
  },
  {
    id: "2",
    filename: "Financial Summary.txt",
    type: "TXT",
    chunk: "Q4 revenue breakdown: Product sales $45.2M (65%), Service contracts $15.8M (23%), Licensing $8.3M (12%)...",
    score: 0.89,
    uploadDate: "2024-09-28",
  },
  {
    id: "3",
    filename: "Company Policy.docx",
    type: "DOCX",
    chunk: "Financial reporting policies require quarterly reviews by the finance team, with annual audits conducted by external firms...",
    score: 0.76,
    uploadDate: "2024-09-15",
  },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [results] = useState<SearchResult[]>(mockResults);

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Search Documents</h1>
        <p className="text-muted-foreground mb-8">Find specific information across all your documents</p>

        {/* Search Bar */}
        <div className="glass rounded-xl p-6 mb-8">
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search across all documents..."
                className="pl-10 bg-muted border-border/50"
              />
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              Search
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">PDF</Badge>
            <Badge variant="secondary">DOCX</Badge>
            <Badge variant="secondary">TXT</Badge>
            <Badge variant="outline">Last 30 days</Badge>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-4">
            {results.length} Results
          </h2>
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold truncate">{result.filename}</h3>
                    <Badge variant="outline" className="text-xs">{result.type}</Badge>
                    <div className="ml-auto px-2 py-1 rounded bg-accent/10 text-accent text-xs font-medium">
                      {Math.round(result.score * 100)}% match
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {result.chunk}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Uploaded {result.uploadDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
