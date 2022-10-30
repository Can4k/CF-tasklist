<template>
  <div :class="card_style"
       @click="clicked"
       :style="card_style"
       class="card">
    <h4>{{ title }}</h4>
    <footer>
      {{ complexity }}
      <button @click.prevent.stop="this.done" type="submit">
        <img src="@/assets/check.svg" alt="Готово">
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "task_card",
  props: {
    title: String,
    complexity: Number,
    link: String,
    solved: Boolean
  },
  data() {
    return {
      card_style: {
        backgroundColor: "wheat",
        color: "black"
      }
    }
  },
  mounted() {
    this.update_color();
  },
  methods: {
    clicked() {
      window.open(this.link);
    },
    done() {
      this.$emit('solved');
    },
    update_color() {
      if (this.complexity < 1200) {
        this.card_style.backgroundColor = "#eeeeee";
      } else if (this.complexity < 1400) {
        this.card_style.backgroundColor = "#d2ffb6";
      } else if (this.complexity < 1600) {
        this.card_style.backgroundColor = "#d4ffeb";
      } else if (this.complexity < 1900) {
        this.card_style.backgroundColor = "#dae9ff";
      } else if (this.complexity < 2100) {
        this.card_style.backgroundColor = "#f3d5f3";
      } else if (this.complexity < 2400) {
        this.card_style.backgroundColor = "#ffe4bb";
      } else {
        this.card_style.backgroundColor = "#ffbbbb";
      }
    }
  },
  watch: {
    complexity: function () {
      this.update_color();
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  width: 300px;
  max-width: 90%;
  padding: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: transform .3s;
}

.card:hover {
  transform: scale(1.03);
}

.solved {
  background: black;
}

button {
  padding: 0;
  align-self: flex-end;
  margin: 5px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gold;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s background;
}

button:hover {
  background: yellow;
}

img {
  padding: 0;
  margin: 0;
  width: 20px;
  height: 20px;
}

h4 {
  margin: 10px;
  word-wrap: break-word;
  max-width: 80%;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  color: black;
  font-weight: 800;
  font-size: 22px;
}
</style>