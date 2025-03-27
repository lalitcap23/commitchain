'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Wallet2, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function AuthPage() {
  const [isGitHubConnected, setIsGitHubConnected] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleGitHubConnect = async () => {
    // TODO: Implement GitHub OAuth 
    setIsGitHubConnected(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            GitHub Contribution Tracker
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Theme Toggle */}
          <div className="absolute top-4 right-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </Button>
          </div>

          {/* GitHub Connect Button */}
          <Button 
            onClick={handleGitHubConnect}
            className="w-full"
            variant={isGitHubConnected ? 'secondary' : 'default'}
          >
            <Github className="mr-2" />
            {isGitHubConnected ? 'GitHub Connected' : 'Connect GitHub'}
          </Button>

          {/* Solana Wallet Connect */}
          <WalletMultiButton 
            className="w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Wallet2 className="mr-2" />
              Connect Solana Wallet
            </div>
          </WalletMultiButton>

          {/* Powered By */}
          <div className="text-center text-sm text-muted-foreground mt-4">
            Powered by Solana & GitHub
          </div>
        </CardContent>
      </Card>
    </div>
  );
}