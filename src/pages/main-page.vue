<template>
  <transition name="fade">
    <div id="banned" v-show="showed_modal"></div>
  </transition>
  <div id="main-cont">
    <div id="tasks-container">
      <h2>Список задач</h2>
      <transition-group name="list">
        <div :key="task" v-for="task in tasks_list?.length" class="task-container">
          <task_card
              :title="tasks_list[task - 1]?.title"
              :complexity="tasks_list[task - 1]?.complexity"
              :solved="tasks_list[task - 1]?.solved"
              :link="tasks_list[task - 1]?.link"
              @solved="this.removeTask(task - 1)"
          />
        </div>
      </transition-group>
      <img alt="plus" id="plus" src="@/assets/plus-circle.svg" @click="showed_modal = true"/>
    </div>
    <transition name="bounce">
      <modal_window
          v-show="showed_modal"
          @closemodal="this.showed_modal = false"
          @addtask="addTask"
      />
    </transition>
  </div>
</template>

<script>
import Task_card from "@/components/task-card";
import LocalStorageController from "@/controllers/LocalStorageController";
import Modal_window from "@/components/modal-window";

export default {
  name: "main-page",
  components: {Modal_window, Task_card},
  data() {
    return {
      showed_modal: false,

      tasks_list: [],
    }
  },
  methods: {
    getList() {
      this.tasks_list = LocalStorageController.getList();
    },
    removeTask(ind) {
      this.tasks_list = LocalStorageController.removeTask(this.tasks_list[ind]);
    },
    addTask(body) {
      const {title, complexity, link} = body.body;
      if (!title || !complexity || !link) {
        return;
      }
      this.tasks_list = LocalStorageController.addTask(body.body);
    },
  },
  mounted() {
    this.tasks_list = LocalStorageController.getList();
  }
}
</script>

<style scoped>
#main-cont {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#tasks-container {
  width: 400px;
  max-width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 10px -2px lightgray;
  border-radius: 10px;
}

.task-container {
  margin: 10px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

h2 {
  font-size: 40px;
  text-align: center;
}

#plus {
  width: 35px;
  margin-top: 15px;
  cursor: pointer;
  transition-duration: .2s;
}

#plus:hover {
  transform: scale(1.1);
}

#banned {
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.2s;
}

.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}

</style>