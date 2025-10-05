import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Github, Chrome, Shield } from 'lucide-react';

export default function Auth() {
  const { user, loading, signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-glow">
          <Shield className="h-12 w-12 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="glass-elevated p-8 space-y-6">
          <div className="text-center space-y-2">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4"
            >
              <Shield className="h-8 w-8 text-primary" />
            </motion.div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome to QuantumLedger</h1>
            <p className="text-muted-foreground">
              Sign in to access your intelligent document processing platform
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={signInWithGoogle}
              variant="outline"
              size="lg"
              className="w-full justify-start gap-3 h-12 hover-scale"
            >
              <Chrome className="h-5 w-5" />
              <span>Continue with Google</span>
            </Button>

            <Button
              onClick={signInWithGithub}
              variant="outline"
              size="lg"
              className="w-full justify-start gap-3 h-12 hover-scale"
            >
              <Github className="h-5 w-5" />
              <span>Continue with GitHub</span>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </Card>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-sm text-muted-foreground"
        >
          Secure authentication powered by OAuth 2.0
        </motion.p>
      </motion.div>
    </div>
  );
}
