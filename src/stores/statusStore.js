import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => {
    return {
      isLoading: false,
      cartLoadingItem: '',
      messages: [],
    }
  },
  actions: {
    pushMessage(data) {
      const { title, content, style = 'success' } = data
      this.messages.push({ style, title, content })
    },
    httpMessageState(response, title = '更新') {
      if (response.data.success) {
        this.pushMessage({
          style: 'success',
          title: `${title}成功`,
        })
      } else {
        const message =
          typeof response.data.message === 'string'
            ? [response.data.message]
            : response.data.message
        this.pushMessage({
          style: 'danger',
          title: `${title}失敗`,
          content: message.join('、'),
        })
      }
    },
  },
})
