import React from 'react';
import { Users, ChevronRight, Github, Gamepad2, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* <Users className="w-20 h-20 text-blue-500" /> */}
          <img src="https://fag.bio/p-trans.png" className="w-20 h-20" alt="User Icon" />
          <h1 className="text-6xl font-bold tracking-tighter">Archon</h1>
          <p className="text-xl text-zinc-400 text-center max-w-2xl">
            Join the Archon community - where Northwind meets The Wild West in Roblox
          </p>
          <div className="flex space-x-4">
            <a
              href="#games"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <span>Our Games</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/archon"
              className="border border-zinc-700 hover:border-zinc-600 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Join Community</span>
            </a>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <div className="bg-zinc-800/50 py-20" id="games">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GameCard
              title="Northwind"
              description="NORTHWIND is a roleplay survival adventure game centered around the colonization of Quebec. This world bears an expansive, beautiful landscape with magnificent mountains, rivers, caves, and settlements for you to explore."
              image="https://tr.rbxcdn.com/180DAY-ea2ff5158da9b116f46359ca0bc149cf/768/432/Image/Webp/noFilter"
            />
            <GameCard
              title="The Wild West"
              description="Saddle up and forge your legacy in the untamed frontier. Hunt bounties, trade goods, and survive in the old West."
              image="https://tr.rbxcdn.com/180DAY-d4ffe2506d8012687410e0186db71475/768/432/Image/Webp/noFilter"
            />
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Active Community"
            description="Join thousands of players in our thriving Discord community. Share strategies, make friends, and participate in events."
          />
          <FeatureCard
            title="Regular Events"
            description="Weekly tournaments, special game modes, and community challenges with exclusive rewards."
          />
          <FeatureCard
            title="Unleash Your Game’s Potential"
            description="Tap into a network of passionate gamers ready to explore your game. Archon connects your creation with a vibrant, engaged audience."
          />
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-zinc-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <StatCard number="1k+" label="Active Players" />
            <StatCard number="2" label="Featured Games" />
            <StatCard number="24/7" label="Community Support" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-4 h-4 text-zinc-500" />
              <span className="text-zinc-500">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-zinc-500">by The Archon Team</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://discord.gg/archon" className="text-zinc-500 hover:text-white transition-colors">Discord</a>
              <a href="https://www.roblox.com/communities/13767960/Archons-Era#!/about" className="text-zinc-500 hover:text-white transition-colors">Roblox Group</a>
              <a href="https://archonstww.fandom.com/wiki/Archons_Wiki" className="text-zinc-500 hover:text-white transition-colors">Wiki</a>
              {/* <a href="#" className="text-zinc-500 hover:text-white transition-colors">Rules</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GameCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-blue-500 transition-all group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-blue-500 transition-colors">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-6">
      <div className="text-3xl font-bold text-blue-500 mb-2">{number}</div>
      <div className="text-zinc-400">{label}</div>
    </div>
  );
}

export default App;