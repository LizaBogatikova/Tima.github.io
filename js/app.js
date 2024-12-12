const { createApp, reactive } = Vue;

const App = {
  setup() {
    // массив с играми и иконки 
    const games = reactive([
      { name: 'Game 1', icon: 'https://via.placeholder.com/100x100?text=Game+1', description: 'This is the description for Game 1', isHovered: false },
      { name: 'Game 2', icon: 'https://via.placeholder.com/100x100?text=Game+2', description: 'This is the description for Game 2', isHovered: false },
      { name: 'Game 3', icon: 'https://via.placeholder.com/100x100?text=Game+3', description: 'This is the description for Game 3', isHovered: false },
      { name: 'Game 4', icon: 'https://via.placeholder.com/100x100?text=Game+4', description: 'This is the description for Game 4', isHovered: false }
    ]);

    // расширяю при наведении
    const handleMouseEnter = (game) => {
      game.isHovered = true;
    };

    const handleMouseLeave = (game) => {
      game.isHovered = false;
    };

    return { games, handleMouseEnter, handleMouseLeave };
  },
  template: `
    <div class="games-list">
      <div v-for="game in games" :key="game.name" class="game-item" @mouseenter="handleMouseEnter(game)" @mouseleave="handleMouseLeave(game)">
        <img 
          :src="game.icon" 
          :alt="game.name" 
          class="game-icon" 
          :style="{ transform: game.isHovered ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s ease-in-out' }"
        >
        <p>{{ game.name }}</p>
        <p class="game-description">{{ game.description }}</p>
      </div>
    </div>
  `
};

// инициализация
createApp(App).mount('#app');