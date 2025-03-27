'use client';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Award, 
  GitHub, 
  Rocket, 
  Trophy, 
  User 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
  const userData = {
    name: 'DevContributor',
    githubAvatar: 'https://github.com/octocat.png',
    walletAddress: '7XqV...4321',
    tokenBalance: 1337,
    contributions: [
      { type: 'Commit', repo: 'awesome-project', date: '2024-03-26' },
      { type: 'PR', repo: 'cool-library', date: '2024-03-25' },
    ],
    leaderboard: [
      { rank: 1, name: 'TopDev', contributions: 250 },
      { rank: 2, name: 'CodeMaster', contributions: 200 },
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {/* Sidebar Navigation */}
      <nav className="hidden md:block bg-secondary rounded-lg p-4">
        <ul className="space-y-2">
          {[
            { icon: User, label: 'Profile' },
            { icon: GitHub, label: 'Contributions' },
            { icon: Trophy, label: 'Leaderboard' },
            { icon: Rocket, label: 'Settings' }
          ].map(({ icon: Icon, label }) => (
            <li key={label}>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
              >
                <Icon className="mr-2" /> {label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="md:col-span-3 space-y-4">
        {/* User Profile */}
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={userData.githubAvatar} />
              <AvatarFallback>{userData.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <p className="text-muted-foreground truncate max-w-[200px]">
                {userData.walletAddress}
              </p>
            </div>
          </CardHeader>
        </Card>

        {/* Contributions & Rewards Tabs */}
        <Tabs defaultValue="contributions">
          <TabsList className="w-full">
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="contributions">
            <Card>
              <CardHeader>
                <CardTitle>GitHub Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                {userData.contributions.map((contrib, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between p-2 border-b"
                  >
                    <span>{contrib.type} in {contrib.repo}</span>
                    <span className="text-muted-foreground">
                      {contrib.date}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Token Rewards</CardTitle>
                <div className="flex items-center">
                  <Award className="mr-2" />
                  <span>{userData.tokenBalance} SPL</span>
                </div>
              </CardHeader>
              <CardContent>
                {/* Badges or reward details */}
                <div className="text-center text-muted-foreground">
                  No additional badges earned yet
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Top Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            {userData.leaderboard.map((leader) => (
              <div 
                key={leader.rank} 
                className="flex justify-between p-2 border-b"
              >
                <span>#{leader.rank} {leader.name}</span>
                <span>{leader.contributions} Contributions</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}