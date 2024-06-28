import { message } from "antd";
import Api from "..";

export const getAllCategoriesListServices = async (): Promise<any> => {
  try {
    const response = Api.post(`categories.php`);
    return await Promise.resolve(response);
  } catch (error: any) {
    message.error(error?.response?.data?.message);
    throw new Error(error);
  }
};
