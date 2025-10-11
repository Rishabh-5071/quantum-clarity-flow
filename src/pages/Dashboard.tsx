import { FileText, MessageSquare, Search, Upload, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Seamlessly upload PDFs, Word docs, and more. Your documents are processed instantly with enterprise-grade security.",
      delay: 0.2,
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Find exactly what you need across all your documents with AI-powered semantic search that understands context.",
      delay: 0.3,
    },
    {
      icon: MessageSquare,
      title: "Chat with Documents",
      description: "Ask questions and get instant answers from your documents. Like having a conversation with your entire knowledge base.",
      delay: 0.4,
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Powered by advanced RAG technology for near-instant responses, no matter how large your document collection grows.",
      delay: 0.5,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is encrypted at rest and in transit. Built with enterprise-grade security and compliance standards.",
      delay: 0.6,
    },
    {
      icon: FileText,
      title: "Smart Monitoring",
      description: "Track document processing, search analytics, and system performance with comprehensive real-time monitoring.",
      delay: 0.7,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          QuantumLedger
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Enterprise-grade document intelligence powered by advanced RAG technology
        </p>
        <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
          Transform how you interact with documents. Upload, search, and chat with your entire document library using cutting-edge AI. 
          QuantumLedger combines powerful natural language processing with lightning-fast retrieval to give you instant access to the information you need.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/upload')}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/chat')}
          >
            Try Chat
          </Button>
        </div>
      </motion.div>

      {/* What is QuantumLedger Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-8 mb-12 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">What is QuantumLedger?</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          QuantumLedger is an advanced document management and intelligence platform that leverages 
          <span className="text-primary font-semibold"> Retrieval-Augmented Generation (RAG)</span> technology. 
          It allows you to upload any document, automatically process and index it, then interact with that information 
          through natural language queries. Whether you need to search across thousands of documents or ask specific 
          questions about their content, QuantumLedger delivers accurate, context-aware answers in seconds.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="glass rounded-xl p-6 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
