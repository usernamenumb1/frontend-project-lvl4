export default {
  translation: {
    signupPage: {
      header: 'Sign up',
      labels: {
        name: 'Name',
        password: 'Password',
        confirmPassword: 'Confirm password',
      },
      submitButton: 'Sign up',
    },
    loginPage: {
      header: 'Log in',
      labels: {
        name: 'Name',
        password: 'Password',
      },
      submitButton: 'Log in',
      footer: {
        span: 'Don`t have account yet?',
        link: 'Registration',
      },
    },
    chatPage: {
      channelsBlock: {
        header: 'Channels',
        channelName: '{{channelName}}',
        dropdown: {
          rename: 'Rename',
          delete: 'Delete',
        },
      },
      messagesBlock: {
        header: '{{channelName}}',
        messagesCount: {
          count_one: '{{count}} message',
          count_other: '{{count}} messages',
        },
      },
    },
    modals: {
      addChannel: {
        header: 'Adding channel',
        submitButton: 'Add channel',
      },
      removeChannel: {
        header: 'Removing channel',
        body: 'Do you really want it?',
        submitButton: 'Delete channel',
      },
      renameChannel: {
        header: 'Renaming channel',
        submitButton: 'Rename channel',
      },
    },
    nav: {
      chatName: 'Chat',
      logoutButton: 'Log out',
    },
  },
};
