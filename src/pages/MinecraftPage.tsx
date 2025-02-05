import React, { useState, useEffect } from 'react';

const categories = [
  { id: 1, name: 'General', description: 'General discussions about Minecraft' },
  { id: 2, name: 'Redstone', description: 'Redstone contraptions and tutorials' },
  { id: 3, name: 'Survival', description: 'Survival mode tips and tricks' }
];

const threads = [
  { id: 1, title: 'Best Minecraft builds of 2025', category: 'Building', author: 'Alex', replies: 12 },
  { id: 2, title: 'Redstone contraptions for beginners', category: 'Redstone', author: 'Steve', replies: 7 },
  { id: 3, title: 'Tips for surviving Hardcore mode', category: 'Survival', author: 'Notch', replies: 4 }
];

function MinecraftPage() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showForum, setShowForum] = useState(false);

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > window.innerHeight / 2) {
        setShowForum(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter threads based on selected category
  const filteredThreads = selectedCategory
    ? threads.filter(thread => thread.category === selectedCategory)
    : threads;

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Parallax Hero Section */}
      <div className="relative h-[100vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s6ELCFPkfvOp6YIiHLabngHaEK%26pid%3DApi&f=1')`,
            transform: `translateY(${scrollY * 0.3}px)`, // Parallax effect
          }}
        ></div>

        <div className="relative h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-center">Minecraft Server</h1>
          <p className="text-zinc-400 text-center mt-4">Join our server and explore endless possibilities.</p>
        </div>
      </div>

      {/* Forum Section */}
      <div className={`relative z-20 pt-20 transition-opacity duration-1000 ${showForum ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-center">Minecraft Forum</h1>
          <p className="text-zinc-400 text-center mt-4">Join discussions, share builds, and explore new ideas.</p>
        </div>

        {/* Categories Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">Discussion Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                description={category.description}
                onClick={() => setSelectedCategory(category.name)}
              />
            ))}
          </div>
          {selectedCategory && (
            <button
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              onClick={() => setSelectedCategory(null)}
            >
              Show All Threads
            </button>
          )}
        </div>

        {/* Threads Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">
            {selectedCategory ? `Threads in ${selectedCategory}` : 'All Threads'}
          </h2>
          <div className="space-y-6">
            {filteredThreads.map((thread) => (
              <ThreadCard
                key={thread.id}
                title={thread.title}
                category={thread.category}
                author={thread.author}
                replies={thread.replies}
              />
            ))}
            {filteredThreads.length === 0 && (
              <p className="text-zinc-400">No threads found in this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ name, description, onClick }: { name: string; description: string; onClick: () => void }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 cursor-pointer hover:bg-zinc-700 transition-colors" onClick={onClick}>
      <h3 className="text-xl font-semibold mb-3">{name}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function ThreadCard({ title, category, author, replies }: { title: string; category: string; author: string; replies: number }) {
  return (
    <div className="p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-blue-500 transition-all">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-zinc-400">Category: {category} • Posted by {author}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-zinc-400">{replies} replies</span>
        </div>
      </div>
    </div>
  );
}

export default MinecraftPage;
