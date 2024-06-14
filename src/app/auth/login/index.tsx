"use client";
import React, { useEffect } from "react";
import { LoginForm } from "../_components/login-form";
import { useFormik } from "formik";
import { LoginSchema } from "../auth.validation-schema";
import { useLoginMutation } from "@/(service)/api/user.api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken, setUserDetails } from "@/(store)/slices/app.slice";
interface LoginProps {
  setModalType: (type: string) => void;
  setOpen: (type: boolean) => void
  handleWithGoogle:(type:any)=>void
}

interface LoginFormValues {
  email: string;
  password: string;
  
}

const Login = ({ setModalType, setOpen, handleWithGoogle  }: LoginProps) => {
  const dispatch = useDispatch();
  const [
    loginData,
    {
      isLoading: isLoginLoading,
      isError: isLoginError,
      error: logInErrorMessage,
      isSuccess: isLogedinSuccessfully,
      data: loginResponse,
    },
  ] = useLoginMutation();

  //login form state
  const loginFormState = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await loginData(values);
    },
  });

  //error handling
  useEffect(() => {
    if (isLoginError && logInErrorMessage) {
      if ("data" in logInErrorMessage && logInErrorMessage.data) {
        const errorMessage = (logInErrorMessage.data as { message?: string })
          .message;
        if (errorMessage) {
          toast.error(errorMessage);
        }
      }
    }
  }, [isLoginError, logInErrorMessage]);

  //success handling

  useEffect(() => {
    if (isLogedinSuccessfully) {
      dispatch(setToken(loginResponse?.data?.token));
      dispatch(setUserDetails(loginResponse?.data?.user));
      toast.success("Logedin success fully")
      setOpen(false)
    }
  }, [isLogedinSuccessfully]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <LoginForm
          handleSubmit={loginFormState.handleSubmit}
          loginFormState={loginFormState}
          isLoading={isLoginLoading}
          setModalType={setModalType}
        />
        <p className="mt-2 text-sm">
          के तपाई यहाँ नयाँ हुनुहुन्छ?
          <a
            className="underline cursor-pointer"
            onClick={() => {
              setModalType("register");
            }}
          >
            नयाँ खाता साइन अप गर्नुहोस्
          </a>
        </p>
        <div className="flex flex-col mt-6 gap-3">
          <div onClick={handleWithGoogle} className="flex items-start gap-5 justify-center border  border-slate-300 p-3 rounded-md cursor-pointer">
            <img
              src="/google.png"
              alt="google-image.png"
              className="w-[20px] h-[20px]"
            />
            <p className="text-md">गुगलसँग लगइन गर्नुहोस्</p>
          </div>
        </div>
      </div>
      <div>
        <ul
          role="list"
          className="marker:text-sky-800 list-disc pl-5 space-y-3 text-slate-400"
        >
          <li>
            समाचार डाइजेस्ट: तपाईले पढ्न छुटाउनुभएका समाचारहरु पढ्न सक्नुहुनेछ ।
          </li>
          <li>
            संग्रहित समाचार: तपाईले संग्रह गर्नुभएको समाचारहरु पढ्न सक्नुहुनेछ ।
          </li>
          <li>
            संग्रहित समाचार: तपाईले संग्रह गर्नुभएको समाचारहरु पढ्न सक्नुहुनेछ ।
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
