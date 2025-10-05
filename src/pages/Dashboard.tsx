import { FileText, MessageSquare, Activity, Clock } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Welcome to QuantumLedger
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Enterprise-grade document intelligence powered by advanced RAG technology.
          Upload, search, and interact with your documents using AI.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatsCard
          title="Total Files"
          value="1,284"
          change="+12% from last week"
          icon={FileText}
          trend="up"
          delay={0.1}
        />
        <StatsCard
          title="Questions Answered"
          value="5,432"
          change="+23% from last week"
          icon={MessageSquare}
          trend="up"
          delay={0.2}
        />
        <StatsCard
          title="System Health"
          value="99.8%"
          change="All systems operational"
          icon={Activity}
          trend="neutral"
          delay={0.3}
        />
        <StatsCard
          title="Avg Response Time"
          value="1.2s"
          change="-5% improvement"
          icon={Clock}
          trend="up"
          delay={0.4}
        />
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <RecentActivity />
      </motion.div>
    </div>
  );
}
