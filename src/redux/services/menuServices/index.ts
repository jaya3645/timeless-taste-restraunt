import { message } from "antd";
import Api from "..";

export const getAllCategoriesListServices = async (): Promise<any> => {
  try {
    const response = Api.get(`categories.php`);
    return await Promise.resolve(response);
  } catch (error: any) {
    message.error(error?.response?.data?.message);
    throw new Error(error);
  }
};

export const getCategoryMenuByCategoryNameServices = async (
  payload: any
): Promise<any> => {
  try {
    const response = Api.get(`filter.php?c=${payload}`);
    return await Promise.resolve(response);
  } catch (error: any) {
    message.error(error?.response?.data?.message);
    throw new Error(error);
  }
};
