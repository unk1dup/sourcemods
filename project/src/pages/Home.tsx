import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Users, Server } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          MineMods Platform
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Your one-stop destination for Minecraft mods, plugins, and server monitoring
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <Download className="h-12 w-12 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mods & Plugins</h3>
          <p className="text-gray-400">
            Download and share your favorite Minecraft mods and plugins
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <Server className="h-12 w-12 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Server Monitoring</h3>
          <p className="text-gray-400">
            Track your Minecraft servers' status in real-time
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <Users className="h-12 w-12 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-400">
            Join our growing community of Minecraft enthusiasts
          </p>
        </div>
      </div>

      <section className="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Featured Mods</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for featured mods - will be populated from Firebase */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1627856014754-2907e2355d54?w=800&q=80"
              alt="Minecraft Mod"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">Enhanced Crafting</h3>
            <p className="text-gray-400">Advanced crafting system with new recipes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;