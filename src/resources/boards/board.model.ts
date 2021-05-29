import {v4 as uuidv4} from 'uuid';
import { IColumn } from '../../interfaces/interfaces';

class Board {
  id: string;
  title: string;
  columns: Array<IColumn>;
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = [
      {
        id: uuidv4(),
        title: "COLUMN",
        order: 0
      }
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export { Board };
