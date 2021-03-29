import uploadConfig from 'configs/upload.config';
import { Router } from 'express';
import { CreateUserController } from 'modules/accounts/useCases/createUser/createUser.controller';
import { UpdateUserAvatarController } from 'modules/accounts/useCases/updateUserAvatar/updateUserAvatar.controller';
import multer from 'multer';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
