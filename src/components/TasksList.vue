<template>
  <div>
    <div class="container mx-auto py-6">
      <h1>Vuetasks</h1>
      <p>Type in to add a task. We've already added some tasks for you</p>
    </div>
    <div class="w-full h-screen flex justify-center">
      <div class="w-full md:w-1/3 bg-white rounded-lg">
        <div class="px-12 pb-10">
          <div class="w-full mb-2">
            <div class="flex items-center">
              <i
                class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"
              ></i>
              <TaskInput
                v-model="newTaskText"
                placeholder="Sketch the UI design...."
                @keydown.enter="addTask"
                ref="taskinput"
              />
            </div>
          </div>
          <div class="w-full mb-2">
            <div v-if="tasks.length">
              <Task
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @remove="deleteTask"
              />
            </div>
            <p v-else>No tasks for today, Boring :(</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskInput from "./TaskInput.vue";
import Task from "./Task.vue";

let taskId = 1;

export default {
  components: {
    TaskInput,
    Task,
  },
  data() {
    return {
      newTaskText: "",
      tasks: [
        {
          id: taskId++,
          text: "Wake up",
        },
        {
          id: taskId++,
          text: "Build something with vue",
        },
        {
          id: taskId++,
          text: "Go to sleep",
        },
      ],
    };
  },
  mounted() {
    this.focusTaskInput();
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() == "") {
        return;
      }
      this.tasks.push({
        id: taskId++,
        text: this.newTaskText,
      });

      this.newTaskText = "";
    },

    deleteTask(idx) {
      this.tasks = this.tasks.filter((tasks) => {
        return tasks.id !== idx;
      });
    },

    focusTaskInput() {
      this.$refs.taskinput.$el.focus();
    },
  },
};
</script>