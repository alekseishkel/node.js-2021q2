import {v4 as uuidv4} from 'uuid';

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | undefined;

  columnId: string;

  constructor({
    id = uuidv4(),
    title = "BOARD",
    order = 0,
    description = "description",
    userId = "userId",
    columnId = "columnId"
  } = {}, boardId : string | undefined) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export { Task };
