import toast from "react-hot-toast";

interface ErrorData {
    message: string;
    code: number;
    body: null;
}

interface ErrorsCheck {
    status: number;
    data: ErrorData;
}

export const errorToaster = (isError?: boolean, error?: ErrorsCheck) => {
    console.log(error);
  
    if (isError && error && 'data' in error && error.data?.message) {
        toast.error(error.data.message);
    }
};


