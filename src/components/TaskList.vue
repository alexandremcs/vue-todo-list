<template>
	<ul class="todo-list">
	  <transition-group name="fade">
	   <li v-for="(todo, index) in sortedTasks"
		 class="todo" :key="todo.title">
		 <div class="view">
			<input class="toggle" @click="completeTask(todo)" type="checkbox">
			<label  v-bind:class="{ 'todo-completed': todo.completed }" >{{ todo.title }}</label>
		 </div>
	   </li>
	 </transition-group>
	 </ul>
  </template>

  
  
  <script>
	export default {
	  computed: {
		sortedTasks: function () {
		  return this.$store.getters.sortedTasks
		}
	  },
	  methods: {
		completeTask (task) {
		  this.$store.commit('completeTask', { task })
		}
	  }
	}
  </script>
  
  <style>
  .todo-list {
	  margin: 0;
	  padding: 0;
	  list-style: none;
  }
  .todo-list li {
	  position: relative;
	  font-size: 24px;
	  border-bottom: 1px solid #ededed;
  }
  .todo-completed{
	text-decoration: line-through;
  }
  .todo-list li:last-child {
	  border-bottom: none;
  }
  .todo-list li.editing {
	  border-bottom: none;
	  padding: 0;
  }
  .todo-list li.editing .edit {
	  display: block;
	  width: 506px;
	  padding: 12px 16px;
	  margin: 0 0 0 43px;
  }
  .todo-list li.editing .view {
	  display: none;
  }
  .todo-list li .toggle {
	  text-align: center;
	  width: 40px;
	  /* auto, since non-WebKit browsers doesn't support input styling */
	  height: auto;
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  margin: auto 0;
	  border: none; /* Mobile Safari */
	  -webkit-appearance: none;
	  appearance: none;
  }
  .todo-list li .toggle:after {
	  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  .todo-list li .toggle:checked:after {
	  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
  .todo-list li label {
	  word-break: break-all;
	  padding: 15px 60px 15px 15px;
	  margin-left: 45px;
	  display: block;
	  line-height: 1.2;
	  transition: color 0.4s;
  }
  .todo-list li.completed label {
	  color: #d9d9d9;
	  text-decoration: line-through;
  }
  .todo-list li .destroy {
	  display: none;
	  position: absolute;
	  top: 0;
	  right: 10px;
	  bottom: 0;
	  width: 40px;
	  height: 40px;
	  margin: auto 0;
	  font-size: 30px;
	  color: #cc9a9a;
	  margin-bottom: 11px;
	  transition: color 0.2s ease-out;
  }
  .todo-list li .destroy:hover {
	  color: #af5b5e;
  }
  .todo-list li .destroy:after {
	  content: '??';
  }
  .todo-list li:hover .destroy {
	  display: block;
  }
  .todo-list li .edit {
	  display: none;
  }
  .todo-list li.editing:last-child {
	  margin-bottom: -1px;
  }
  /*
	  Hack to remove background from Mobile Safari.
	  Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio:0) {
	  .toggle-all,
	  .todo-list li .toggle {
		  background: none;
	  }
	  .todo-list li .toggle {
		  height: 40px;
	  }
	  .toggle-all {
		  -webkit-transform: rotate(90deg);
		  transform: rotate(90deg);
		  -webkit-appearance: none;
		  appearance: none;
	  }
  }
  </style>