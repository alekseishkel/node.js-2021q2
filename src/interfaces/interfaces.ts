interface IBoard {
  id: string,
  title: string,
  columns: Array<IColumn>,
};

interface IColumn {
  id: string,
  title: string,
  order: number,
};

interface ITask {
  id: string,
  title: string,
  order: number,
  description: string,
  userId: string,
  boardId: string,
  columnId: string,
};

interface IUser {
  id: string,
  name: string,
  login: string,
  password: string,
};

export {IBoard, IColumn, ITask, IUser};
