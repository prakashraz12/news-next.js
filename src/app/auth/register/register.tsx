import React, { useEffect, useState } from "react";
import { RegisterForm } from "../_components/register-form";
import { useFormik } from "formik";
import { registerUserSchema } from "../auth.validation-schema";
import { VerifyEmailPopUp } from "../_components/verify-email.compoent";
import { useRegisterMutation } from "@/(service)/api/user.api";

interface RegisterProps {
  setModalType: (type: string) => void;
  setOpen: (type: boolean) => void;
}

const Register = ({ setModalType, setOpen }: RegisterProps) => {
  const [
    registerData,
    {
      isSuccess: isRegisterSuccess,
      isLoading: isRegisterLoading,
      isError: isRegisterError,
      error: errorMessageOnRegister,
    },
  ] = useRegisterMutation();

  const [isVerifyEmailPopupOpen, setIsVerifyEmailPopUpOpen] =
    useState<boolean>(false);

  const registerUserFormState = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema: registerUserSchema,
    onSubmit: async (values) => {
      await registerData(values);
    },
  });

  useEffect(() => {
    if (isRegisterSuccess) {
      setIsVerifyEmailPopUpOpen(true);
      registerUserFormState?.resetForm();
      setTimeout(() => {
        setIsVerifyEmailPopUpOpen(false);
        setOpen(false);
      }, 5000);
    }
  }, [isRegisterSuccess]);

  return (
    <div className="w-full p-3">
      <RegisterForm
        registerUserFormState={registerUserFormState}
        isRegisterLoading={isRegisterLoading}
      />
      <VerifyEmailPopUp
        open={isVerifyEmailPopupOpen}
        setOpen={setIsVerifyEmailPopUpOpen}
      />
      <p className="mt-2 text-sm">
        के तपाईसँग पहिले नै खाता छ?
        <a
          className="underline cursor-pointer"
          onClick={() => {
            setModalType("login");
          }}
        >
          लगइन गर्नुहोस्
        </a>
      </p>
      <hr className="mt-3 mb-3" />
      <div className="flex flex-col mt-6 gap-3">
        <div className="flex items-start gap-5 justify-center border  border-slate-300 p-3 rounded-md cursor-pointer hover:bg-yellow-500 hover:text-white">
          <img
            src="/google.png"
            alt="google-image.png"
            className="w-[20px] h-[20px]"
          />
          <p className="text-md">गुगलसँग सँग जडान गर्नुहोस्</p>
        </div>
        <div className="flex items-start gap-5 justify-center border border-slate-300 p-3 rounded-md cursor-pointer hover:bg-sky-800 hover:text-white">
          <img
            src="/facebook.png"
            alt="google-image.png"
            className="w-[20px] h-[20px]"
          />
          <p className="text-md">फेसबुकबाट सँग जडान गर्नुहोस्</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
