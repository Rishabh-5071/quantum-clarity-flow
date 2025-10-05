import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: { filename: string; page: number; score: number }[];
  timestamp: Date;
}

const mockMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "What is the total revenue for Q4 2024?",
    timestamp: new Date(),
  },
  {
    id: "2",
    role: "assistant",
    content: "Based on the Annual Report 2024, the total revenue for Q4 2024 was $45.2 million, representing a 23% increase year-over-year. This growth was primarily driven by increased product sales and expansion into new markets.",
    sources: [
      { filename: "Annual Report 2024.pdf", page: 12, score: 0.95 },
      { filename: "Financial Summary.txt", page: 1, score: 0.87 },
    ],
    timestamp: new Date(),
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");
  const [resultLimit, setResultLimit] = useState([5]);
  const [similarityThreshold, setSimilarityThreshold] = useState([0.3]);

  const handleSend = () => {
    if (!input.trim()) return;
    // Handle sending message
    setInput("");
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Question & Answer</h1>
        <p className="text-muted-foreground mb-8">Ask questions about your uploaded documents</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="glass rounded-xl flex flex-col h-[calc(100vh-16rem)]">
              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-4 ${
                        message.role === "user"
                          ? "bg-gradient-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      {message.sources && (
                        <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                          <p className="text-xs font-semibold opacity-70">Sources:</p>
                          {message.sources.map((source, idx) => (
                            <div key={idx} className="text-xs opacity-80 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span>
                                {source.filename} (Page {source.page}) • {Math.round(source.score * 100)}% match
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-border/50">
                <div className="flex gap-3">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask a question about your documents..."
                    className="flex-1 bg-muted border-border/50"
                  />
                  <Button onClick={handleSend} className="bg-gradient-primary hover:opacity-90">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <div className="glass rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Settings</h3>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Result Limit: {resultLimit[0]}
                </label>
                <Slider
                  value={resultLimit}
                  onValueChange={setResultLimit}
                  min={1}
                  max={20}
                  step={1}
                  className="mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  Maximum number of results to return
                </p>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Similarity: {similarityThreshold[0].toFixed(2)}
                </label>
                <Slider
                  value={similarityThreshold}
                  onValueChange={setSimilarityThreshold}
                  min={0.1}
                  max={1.0}
                  step={0.05}
                  className="mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  Minimum similarity score for results
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
