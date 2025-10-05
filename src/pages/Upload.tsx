import { useState, useCallback } from "react";
import { Upload as UploadIcon, FileText, Image, File, X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "uploading" | "success" | "error";
  progress: number;
}

const mockFiles: UploadedFile[] = [
  { id: "1", name: "Annual Report 2024.pdf", size: 2400000, type: "application/pdf", status: "success", progress: 100 },
  { id: "2", name: "Company Policy.docx", size: 1200000, type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "success", progress: 100 },
  { id: "3", name: "Financial Summary.txt", size: 45000, type: "text/plain", status: "success", progress: 100 },
];

export default function Upload() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>(mockFiles);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  }, []);

  const getFileIcon = (type: string) => {
    if (type.includes("pdf")) return FileText;
    if (type.includes("image")) return Image;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">File Upload</h1>
        <p className="text-muted-foreground mb-8">Upload your documents for AI-powered processing</p>

        {/* Upload Zone */}
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={cn(
            "glass rounded-xl p-12 mb-8 border-2 border-dashed transition-all duration-300",
            dragActive ? "border-primary bg-primary/5 scale-[1.02]" : "border-border/50 hover:border-primary/50"
          )}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
              <UploadIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Drop files to upload</h3>
            <p className="text-muted-foreground mb-4">
              or click to browse from your device
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Supports PDF, DOCX, DOC, TXT, PNG, JPG, JPEG (Max 100MB)
            </p>
            <Button className="bg-gradient-primary hover:opacity-90">
              Browse Files
            </Button>
          </div>
        </div>

        {/* File List */}
        <div className="glass rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Uploaded Files ({files.length})</h2>
          <div className="space-y-3">
            {files.map((file, index) => {
              const FileIcon = getFileIcon(file.type);
              return (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.status === "success" && (
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    )}
                    <Button variant="ghost" size="icon" className="hover:bg-destructive/10 hover:text-destructive">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
