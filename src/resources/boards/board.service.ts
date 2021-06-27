import { DeleteResult } from 'typeorm';
import { boardsRepo } from './board.memory.repository';
import { Board } from './board.model';
import { IBoard } from '../../interfaces/interfaces';
import { BoardEntity } from '../../entities/board.entity';

const getAllBoards = () : Promise<Array<BoardEntity>> => boardsRepo.getAllBoards();

const getBoard = (id : string | undefined) : Promise<BoardEntity | undefined> => boardsRepo.getBoard(id);

const addBoard = (boardData: object) : IBoard => {
  const board : IBoard = new Board(boardData);
  boardsRepo.addBoard(board);

  return board;
};

const updateBoard = (id : string | undefined, boardData: IBoard) : Promise<BoardEntity | undefined> => {
  const board : IBoard = new Board(boardData);
  return boardsRepo.updateBoard(id, board);
};

const deleteBoard = (id : string) : Promise<DeleteResult> => boardsRepo.deleteBoard(id);

export const boardService = { 
  getAllBoards, 
  addBoard, 
  getBoard, 
  updateBoard, 
  deleteBoard 
};
