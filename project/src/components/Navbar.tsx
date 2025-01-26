import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/authStore';
import { Gamepad2, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuthStore();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold">MineMods</span>
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/mods" className="text-gray-300 hover:text-white px-3 py-2">
                {t('nav.mods')}
              </Link>
              <Link to="/plugins" className="text-gray-300 hover:text-white px-3 py-2">
                {t('nav.plugins')}
              </Link>
              <Link to="/servers" className="text-gray-300 hover:text-white px-3 py-2">
                {t('nav.servers')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-white p-2"
            >
              <Globe className="h-5 w-5" />
            </button>
            {user ? (
              <Link
                to="/profile"
                className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
              >
                {t('nav.profile')}
              </Link>
            ) : (
              <div className="space-x-2">
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white px-3 py-2"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/register"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
                >
                  {t('nav.register')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;