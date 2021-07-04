import { getManager } from "typeorm";
import jwt from 'jsonwebtoken';
import { UserEntity } from "../../entities/user.entity";
import { config } from "../../common/config"

const getToken = async (user: UserEntity) => {
    const { login, password } = user;
    const userRepo = getManager().getRepository(UserEntity);
    const foundUser = await userRepo.findOne({login});
  
    if (foundUser && (password! === foundUser.password)) {
      return jwt.sign({ userId: user.id, login }, config.JWT_SECRET_KEY);
    }
    return null;
}

export { getToken };