import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { Todo } from '../helpers/todoInterface';
import type { PayloadAction } from '@reduxjs/toolkit';
import { active, basket, completed } from '../helpers/constants';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: JSON.parse(sessionStorage.getItem('todos') || '[]'),
};

const saveTodosToSessionStorage = (todos: Todo[]) => {
  sessionStorage.setItem('todos', JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.todos.push(action.payload);
        saveTodosToSessionStorage(state.todos);
      },
      prepare(text: string) {
        const id = nanoid();
        return { payload: { id, text, status: active } };
      }
    },
    toggleTodo: {
      reducer(state, action: { payload: string }) {
        const id = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.status = todo.status === active ? completed : active;
          saveTodosToSessionStorage(state.todos);
        } else {
          console.warn(`Todo with id ${id} not found`);
        }
      },
      prepare(id: string) {
        return { payload: id };
      }
    },
    removeTodoToBasket: {
      reducer(state, action: { payload: string }) {
        const id = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.status = basket;
          saveTodosToSessionStorage(state.todos);
        } else {
          console.warn(`Todo with id ${id} not found`);
        }
      },
      prepare(id: string) {
        return { payload: id };
      }
    },
    deleteTodo: {
      reducer(state, action: { payload: string }) {
        const id = action.payload;
        state.todos = state.todos.filter((todo) => todo.id !== id);
        saveTodosToSessionStorage(state.todos);
      },
      prepare(id: string) {
        return { payload: id };
      }
    },
    deleteAllTodosFromBasket: {
      reducer(state) {
        state.todos = state.todos.filter((todo) => todo.status !== basket);
        saveTodosToSessionStorage(state.todos);
      },
      prepare() {
        return { payload: null };
      }
    }
  }
});

export const { addTodo, toggleTodo, removeTodoToBasket, deleteTodo, deleteAllTodosFromBasket } = todoSlice.actions;

export default todoSlice.reducer;
