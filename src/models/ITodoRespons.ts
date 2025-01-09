import { ITodo } from "./ITodo";

export interface ITodoRespons {
	todos: ITodo[];
	total: number;
	skip: number;
	limit: number;
}
