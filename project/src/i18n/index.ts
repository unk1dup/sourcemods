import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.mods': 'Mods',
      'nav.plugins': 'Plugins',
      'nav.servers': 'Servers',
      'nav.login': 'Login',
      'nav.register': 'Register',
      'nav.profile': 'Profile',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.username': 'Username',
      'auth.login': 'Login',
      'auth.register': 'Register',
      'auth.logout': 'Logout',
      'auth.loginError': 'Failed to login. Please check your credentials.',
      'auth.registerError': 'Failed to register. Please try again.',
      'profile.edit': 'Edit Profile',
      'profile.username': 'Username',
      'profile.bio': 'Bio',
      'profile.avatar': 'Profile Picture',
      'profile.uploadAvatar': 'Upload Image',
      'profile.noBio': 'No bio provided',
      'profile.content': 'Your Content',
      'profile.mods': 'Mods',
      'profile.plugins': 'Plugins',
      'profile.noMods': 'No mods published yet',
      'profile.noPlugins': 'No plugins published yet',
      'common.save': 'Save',
      'common.cancel': 'Cancel',
      'common.loading': 'Loading...'
    }
  },
  ru: {
    translation: {
      'nav.home': 'Главная',
      'nav.mods': 'Моды',
      'nav.plugins': 'Плагины',
      'nav.servers': 'Серверы',
      'nav.login': 'Войти',
      'nav.register': 'Регистрация',
      'nav.profile': 'Профиль',
      'auth.email': 'Эл. почта',
      'auth.password': 'Пароль',
      'auth.username': 'Имя пользователя',
      'auth.login': 'Войти',
      'auth.register': 'Зарегистрироваться',
      'auth.logout': 'Выйти',
      'auth.loginError': 'Ошибка входа. Проверьте ваши данные.',
      'auth.registerError': 'Ошибка регистрации. Попробуйте еще раз.',
      'profile.edit': 'Редактировать профиль',
      'profile.username': 'Имя пользователя',
      'profile.bio': 'О себе',
      'profile.avatar': 'Фото профиля',
      'profile.uploadAvatar': 'Загрузить фото',
      'profile.noBio': 'Информация о пользователе отсутствует',
      'profile.content': 'Ваши публикации',
      'profile.mods': 'Моды',
      'profile.plugins': 'Плагины',
      'profile.noMods': 'Нет опубликованных модов',
      'profile.noPlugins': 'Нет опубликованных плагинов',
      'common.save': 'Сохранить',
      'common.cancel': 'Отмена',
      'common.loading': 'Загрузка...'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;