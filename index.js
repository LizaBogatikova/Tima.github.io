const app = Vue.createApp({
    data() {
        return {
    name: '',             // Имя пользователя
  feedback: '',         // Текст отзыва
  feedbackList: [],     // Массив с отзывами
        };
      },
  methods: {
    // Добавление отзыва в список
    addFeedback() {
          if (this.name && this.feedback) {   // Если правильно ввели имя >:D
    this.feedbackList.push({
      name: this.name,
      feedback: this.feedback
    });

  // Очищаю поля >:)
  this.name = '';
  this.feedback = '';
          }
        }
      }
    });

  // Монтируем приложение Vue в элемент с id "feedback-app"
  app.mount('#feedback-app');
