import { findShop } from '../queries';
import { successResponse } from '../helpers';
import statusCode from '../config/statusCode';

export const checkShopNameExist = async (req, res, next) => {
  const { shopName } = req.body;
  const checked = await findShop({ shopName });
  checked
    ? successResponse(res, statusCode.EXIST, 'Shop name already exist', null)
    : next();
};
