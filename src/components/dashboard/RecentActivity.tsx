import { FileText, MessageSquare, Search, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  { id: 1, type: "upload", title: "Annual Report 2024.pdf uploaded", time: "2 minutes ago", icon: FileText },
  { id: 2, type: "question", title: "Question answered: What is the revenue?", time: "5 minutes ago", icon: MessageSquare },
  { id: 3, type: "search", title: "Search performed: financial metrics", time: "12 minutes ago", icon: Search },
  { id: 4, type: "processed", title: "Document processed successfully", time: "15 minutes ago", icon: CheckCircle2 },
  { id: 5, type: "upload", title: "Company Policy.docx uploaded", time: "1 hour ago", icon: FileText },
];

export function RecentActivity() {
  return (
    <div className="glass rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <activity.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
