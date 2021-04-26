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