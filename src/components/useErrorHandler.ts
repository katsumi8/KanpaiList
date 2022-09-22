import axios from "axios";

export const useErrorHandler = () => {
  const errorHandler = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  };

  return { errorHandler };
};
