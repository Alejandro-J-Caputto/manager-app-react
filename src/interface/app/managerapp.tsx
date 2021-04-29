export interface WorkspaceResponse {
  status:    string;
  workspace: Workspace[];
}

export interface Workspace {
  date:      Date;
  _id:       string;
  title:     string;
  user:      User;
  __v:       number;
  img:       string;
  todoLists: TodoLists[];
}

export interface AddTodoResponse {
  status:  string;
  newTodo: NewTodo;
}
export interface NewTodo {
  date:     Date;
  done:     boolean;
  _id:      string;
  todo:     string;
  todoList: string;
  user:     string;
  __v:      number;
}

export interface TodoListResponse {
  status:   string;
  todoList: TodoLists[];
}

export interface NewTodoListResponse {
  status:      string;
  message:     string;
  newTodoList: NewTodoList;
}

export interface NewTodoList {
  date:    Date;
  active:  boolean;
  _id:     string;
  name:    string;
  project: Project;
  user:    User;
  todos:  Todo[];
  __v:     number;
}
export interface TodoList {
  _id:  string;
  name: string;
}

export interface TodoLists {
  date:    Date;
  active:  boolean;
  _id:     string;
  name:    string;
  project: Project;
  user:    User;
  __v:     number;
  todos:   Todo[];
}

export interface RegisterForm {
  name: string
  email: string,
  password: string,
}
export interface UpdatedUserResponse {
  status:     string;
  updatedUser: UpdatedUser;
}

export interface UpdatedUser {
  role:   string;
  active: boolean;
  google: boolean;
  _id:    string;
  name:   string;
  email:  string;
  __v:    number;
}
export interface Todo {
  done:     boolean;
  _id:      string;
  todo:     string;
  todoList: string;
}

export interface Project {
  _id:   string;
  title: string;
}

export interface User {
  role?: string;
  active?: boolean;
  google?: boolean;
  _id?: string;
  img?: string;
  name?: string;
  email?: string;
  password?: string;
  __v?: number;
}
export interface UpdatePass {
  password: string,
  passwordReset: string,
  passwordConfirm: string
}