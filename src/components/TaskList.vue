<template>
	<div>
		<pure-task-list />
	</div>
</template>

<script>
import PureTaskList from "./PureTaskList.vue";
import { mapState, mapActions } from "vuex";

export default {
	name: "task-list",
	components: {
		PureTaskList,
	},
	methods: {
		...mapActions(["archiveTask", "pinTask"]),
	},
	computed: {
		...mapState(["tasks"]),
	},
};
</script>
