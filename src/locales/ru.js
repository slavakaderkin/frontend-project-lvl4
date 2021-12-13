export default {
  translation: {
    header: {
      logo: 'Hexlet Chat',
      logOutButton: 'Выйти',
    },
    sidebar: {
      title: 'Каналы',
      removeButton: 'Удалить',
      renameButton: 'Переименовать',
    },
    login: {
      formTitle: 'Войти',
      nameLabel: 'Имя',
      passwordLabel: 'Пароль',
      sendButton: 'Войти',
      signUpLink: 'Зарегистрироваться',
    },
    signup: {
      formTitle: 'Регистрация',
      nameLabel: 'Имя',
      passwordLabel: 'Пароль',
      passwordConfirmationLabel: 'Подтверждение пароля',
      sendButton: 'Зарегистрироваться',
      loginLink: 'Войти',
    },
    chat: {
      placeholder: 'Сообщение...',
      sendButton: 'Отправить',
    },
    errors: {
      empty: 'Поле не должно быть пустым',
      string: 'Поле должно быть строкой',
      nameLength: 'Имя должно быть от 3 до 20 символов',
      passLength: 'Пароль должен быть от 4 символов',
      passConfirmation: 'Пароли не совпадат',
      channelTitleUniq: 'Такой канал уже существует',
      channelTitleLength: 'Название канала должно быть от 2 до 20 символов',
      chat: 'Сообщение должно быть строкой',
      auth: 'Ошибка аутентификации',
      conflict: 'Такое имя уже существует',
    },
    modal: {
      add: 'Добавить канал',
      rename: 'Переименовать канал',
      remove: 'Удалить канал',
      removeButton: 'Удалить',
      renameButton: 'Переимееновать',
      addButton: 'Добавить',
      closeButton: 'Закрыть',
      confirmation: 'Вы действительно хотите удалить канал: {{channel.name}}?',
    },
  },
};
