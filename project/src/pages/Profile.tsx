import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/authStore';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { User, Settings, Upload } from 'lucide-react';

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuthStore();
  const [profile, setProfile] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
          setUsername(docSnap.data().username);
          setBio(docSnap.data().bio);
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    let avatarUrl = profile?.avatarUrl || '';

    if (avatar) {
      const storageRef = ref(storage, `avatars/${user.uid}`);
      await uploadBytes(storageRef, avatar);
      avatarUrl = await getDownloadURL(storageRef);
    }

    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      username,
      bio,
      avatarUrl
    });

    setProfile({ ...profile, username, bio, avatarUrl });
    setEditing(false);
  };

  if (!user || !profile) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.username}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-24 h-24 text-gray-400 bg-gray-700 rounded-full p-4" />
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profile.username}</h1>
                <p className="text-gray-400">{profile.email}</p>
              </div>
            </div>
            <button
              onClick={() => setEditing(!editing)}
              className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
            >
              <Settings className="w-4 h-4" />
              <span>{t('profile.edit')}</span>
            </button>
          </div>

          {editing ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('profile.username')}
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('profile.bio')}
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 h-32"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('profile.avatar')}
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="avatar-upload"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{t('profile.uploadAvatar')}</span>
                  </label>
                  {avatar && <span className="text-sm text-gray-400">{avatar.name}</span>}
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
                >
                  {t('common.cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700"
                >
                  {t('common.save')}
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-8">
              <p className="text-gray-300">{profile.bio || t('profile.noBio')}</p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-700">
          <div className="p-8">
            <h2 className="text-xl font-bold mb-4">{t('profile.content')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{t('profile.mods')}</h3>
                {profile.mods?.length > 0 ? (
                  <ul className="space-y-2">
                    {profile.mods.map((mod: any) => (
                      <li key={mod.id} className="text-gray-300">
                        {mod.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">{t('profile.noMods')}</p>
                )}
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{t('profile.plugins')}</h3>
                {profile.plugins?.length > 0 ? (
                  <ul className="space-y-2">
                    {profile.plugins.map((plugin: any) => (
                      <li key={plugin.id} className="text-gray-300">
                        {plugin.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">{t('profile.noPlugins')}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;