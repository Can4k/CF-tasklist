<template>
  <div class="modal">
    <h3>Добавление задания</h3>
    <div class="inputs">
      <input v-model="title" ref="title" placeholder="Название">
      <input v-model="link" ref="link" id="link" placeholder="Ссылка">
      <div class="complexity">
        <input v-model="complexity" step="100" min="800" max="3500" type="range" placeholder="Сложность">
        <input ref="complex" v-model="complexity" id="complexity" type="number">
      </div>
      <div class="buttons">
        <button @click="create">Добавить</button>
        <button @click="cancel">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal_window",
  data() {
    return {
      title: "",
      link: "",
      complexity: "1600"
    }
  },
  methods: {
    create() {
      if (!this.title) {
        this.$refs.title.focus();
      } else if (!this.link) {
        this.$refs.link.focus();
      } else if (!this.complexity) {
        this.$refs.complex.focus();
      } else {
        this.$emit('addtask', {
          body: {
            title: this.title,
            link: this.link,
            complexity: +this.complexity,
            solved: false
          }
        });
        this.cancel();
      }
    },
    cancel() {
      this.link = this.title = "";
      this.complexity = "1600";
      this.$emit('closemodal');
    }
  }
}
</script>

<style scoped>
.modal {
  z-index: 10;
  position: fixed;
  background: white;
  box-shadow: 0 0 10px -2px lightgray;
  width: 500px;
  max-width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 10px;
}
.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
h3 {
  font-size: 40px;
  text-align: center;
  padding: 0;
  margin: 10px;
  color: black;
}
input {
  width: 100%;
  padding: 8px;
  margin: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #fafafa;
  transition-duration: .2s;
}
.buttons {
  display: flex;
  margin-top: 10px;
}
button {
  cursor: pointer;
  margin: 5px;
  background-color: #555555;
  color: white;
  border: none;
  padding: 7px;
  font-size: 13px;
  border-radius: 5px;
  font-weight: 800;
}
input:focus {
  background-color: #e8e8e8;
}
.complexity {
  display: flex;
  align-items: center;
  justify-content: center;
}
#complexity {
  width: 40px;
  height: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 1000;
  background-color: #555555;
  color: white;
  outline: none;
}
#complexity:focus {
  background-color: black;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 0px;
  background-color: #555555;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555555;
  transition: background .3s ease-in-out;
}

</style>