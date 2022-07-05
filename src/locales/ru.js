export default {
  translation: {
    signupPage: {
      header: 'Регистрация',
      labels: {
        name: 'Имя',
        password: 'Пароль',
        confirmPassword: 'Подтверждение пароля',
      },
      submitButton: 'Зарегестрироваться',
    },
    loginPage: {
      header: 'Вход',
      labels: {
        name: 'Имя',
        password: 'Пароль',
      },
      submitButton: 'Войти',
      footer: {
        span: 'Еще нет аккаунта?',
        link: 'Зарегистрироваться',
      },
    },
    chatPage: {
      channelsBlock: {
        header: 'Каналы',
        channelName: '{{channelName}}',
        dropdown: {
          rename: 'Перименовать',
          delete: 'Удалить',
        },
      },
      messagesBlock: {
        header: '{{channelName}}',
        messagesCount: {
          count_one: '{{count}} сообщение',
          count_few: '{{count}} сообщения',
          count_many: '{{count}} сообщений',
        },
      },
    },
    modals: {
      addChannel: {
        header: 'Добавление канала',
        submitButton: 'Добавить канал',
      },
      removeChannel: {
        header: 'Удаление канала',
        body: 'Точно хотите удалить канал?',
        submitButton: 'Удалить канал',
      },
      renameChannel: {
        header: 'Переименование канала',
        submitButton: 'Переименовать канал',
      },
    },
    nav: {
      chatName: 'Чат',
      logoutButton: 'Выход',
    },
  },
};
