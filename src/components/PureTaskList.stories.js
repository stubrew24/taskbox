import PureTaskList from "./PureTaskList";
import { taskData, actionsData } from "./Task.stories";

const paddedList = () => {
	return {
		template: '<div style="padding: 3em"><story /></div>',
	};
};

export default {
	title: "TaskList",
	excludeStories: /.*Data$/,
	decorators: [paddedList],
};

export const defaultTasksData = [
	{ ...taskData, id: "1", title: "Task 1" },
	{ ...taskData, id: "2", title: "Task 2" },
	{ ...taskData, id: "3", title: "Task 3" },
	{ ...taskData, id: "4", title: "Task 4" },
	{ ...taskData, id: "5", title: "Task 5" },
	{ ...taskData, id: "6", title: "Task 6" },
];

export const withPinnedTaskData = [
	...defaultTasksData.slice(0, 5),
	{ id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

export const Default = () => ({
	components: { PureTaskList },
	template: `<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
	props: {
		tasks: {
			default: () => defaultTasksData,
		},
	},
	methods: actionsData,
});

export const WithPinnedTasks = () => ({
	components: { PureTaskList },
	template: `<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
	props: {
		tasks: {
			default: () => withPinnedTaskData,
		},
	},
	methods: actionsData,
});

export const Loading = () => ({
	components: { PureTaskList },
	template: `<pure-task-list loading :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
	methods: actionsData,
});

export const Empty = () => ({
	components: { PureTaskList },
	template: `<pure-task-list  :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
	methods: actionsData,
});
