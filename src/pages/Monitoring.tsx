import { Activity, Database, Cpu, Zap, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { StatsCard } from "@/components/dashboard/StatsCard";

const healthMetrics = [
  { name: "Database", status: "healthy", response: "12ms", icon: Database },
  { name: "LLM Model", status: "healthy", response: "850ms", icon: Cpu },
  { name: "Embedding Model", status: "healthy", response: "120ms", icon: Zap },
  { name: "CLIP Model", status: "healthy", response: "95ms", icon: Activity },
];

const usageStats = [
  { date: "Today", files: 45, questions: 128 },
  { date: "Yesterday", files: 38, questions: 112 },
  { date: "This Week", files: 284, questions: 856 },
  { date: "This Month", files: 1284, questions: 5432 },
];

export default function Monitoring() {
  return (
    <div className="container mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">System Monitoring</h1>
        <p className="text-muted-foreground mb-8">Real-time health and performance metrics</p>

        {/* Overall Health */}
        <div className="glass rounded-xl p-8 mb-8 border-l-4 border-success">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-success" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">All Systems Operational</h2>
              <p className="text-sm text-muted-foreground">Last checked: 2 seconds ago</p>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Uptime"
            value="99.8%"
            change="30 days"
            icon={Activity}
            trend="neutral"
            delay={0.1}
          />
          <StatsCard
            title="Avg Response"
            value="1.2s"
            change="-5% this week"
            icon={Clock}
            trend="up"
            delay={0.2}
          />
          <StatsCard
            title="Requests/min"
            value="142"
            change="+12% from avg"
            icon={Zap}
            trend="up"
            delay={0.3}
          />
          <StatsCard
            title="Error Rate"
            value="0.02%"
            change="Within SLA"
            icon={Database}
            trend="neutral"
            delay={0.4}
          />
        </div>

        {/* Health Metrics */}
        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Service Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{metric.name}</span>
                    <span className="text-xs px-2 py-1 rounded bg-success/10 text-success">
                      {metric.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Response: {metric.response}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="glass rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Usage Statistics</h2>
          <div className="space-y-4">
            {usageStats.map((stat, index) => (
              <motion.div
                key={stat.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
              >
                <span className="font-medium">{stat.date}</span>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Files Processed</p>
                    <p className="text-xl font-bold">{stat.files}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Questions Answered</p>
                    <p className="text-xl font-bold">{stat.questions}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
