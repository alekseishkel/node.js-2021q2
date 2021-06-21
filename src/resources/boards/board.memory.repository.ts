import { DeleteResult, getRepository } from 'typeorm';
import { IBoard } from '../../interfaces/interfaces';
import { BoardEntity } from '../../entities/board.entity';

const getAllBoards = async (): Promise<Array<BoardEntity>> =>
  getRepository(BoardEntity).find();

const getBoard = async (
  id: string | undefined
): Promise<BoardEntity | undefined> => getRepository(BoardEntity).findOne(id);

const addBoard = async (board: IBoard): Promise<BoardEntity> =>
  getRepository(BoardEntity).save(board);

const updateBoard = async (
  id: string | undefined,
  { title, columns }: IBoard
): Promise<BoardEntity | undefined> => {
  const boardRepository = await getRepository(BoardEntity);
  const updatingBoard: BoardEntity | undefined = await boardRepository.findOne(id);

  return boardRepository.save({
    ...updatingBoard,
    title,
    columns,
  });
};

const deleteBoard = async (
  id: string
): Promise<DeleteResult> => getRepository(BoardEntity).delete(id);

export const boardsRepo = {
  getAllBoards,
  addBoard,
  getBoard,
  updateBoard,
  deleteBoard,
};
