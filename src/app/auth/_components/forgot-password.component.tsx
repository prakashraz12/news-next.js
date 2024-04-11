import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { forgotPasswordSchema } from "../auth.validation-schema";
import { useForgotPasswordMutation } from "@/(service)/api/user.api";
import toast from "react-hot-toast";

interface ForgotPasswordComponentProps {
  setModalType: (type: string) => void;
  setOpen: (type: boolean) => void;
}
export const ForgotPasswordComponent = ({
  setModalType,
  setOpen,
}: ForgotPasswordComponentProps) => {

  //mutations
  const [
    email,
    {
      isSuccess: isUserForgetPasswordEmailSent,
      isError: isErrorOnUserForgotPssword,
      error: errorMessageOnUserForgotPassword,
      isLoading: isLoadingOnForgotPassword
    },
  ] = useForgotPasswordMutation();

  //form state
  const forgotPasswordFormState = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      await email(values);
    },
  });

  //error handling
  useEffect(() => {
    if (isErrorOnUserForgotPssword && errorMessageOnUserForgotPassword) {
      if (
        "data" in errorMessageOnUserForgotPassword &&
        errorMessageOnUserForgotPassword.data
      ) {
        const errorMessage = (
          errorMessageOnUserForgotPassword.data as { message?: string }
        ).message;
        if (errorMessage) {
          toast.error(errorMessage);
        }
      }
    }
  }, [isErrorOnUserForgotPssword, errorMessageOnUserForgotPassword]);

  //success
  useEffect(() => {
    if (isUserForgetPasswordEmailSent) {
      toast.success("रिसेट पासवर्ड टोकन तपाईंको इमेलमा पठाइएको छ, कृपया जाँच गर्नुहोस्");
      setOpen(false)
    }
  }, [isUserForgetPasswordEmailSent])


  return (
    <div className="w-full h-auto flex justify-center mt-5">
      <div className="w-full p-3">
        <form onSubmit={forgotPasswordFormState?.handleSubmit}>
          <Input
            placeholder="कृपया आफ्नो इमेल खाता प्रविष्ट गर्नुहोस्/enter your email here"
            value={forgotPasswordFormState?.values?.email}
            onChange={forgotPasswordFormState?.handleChange}
            name="email"
            id="email"
          />
          {forgotPasswordFormState?.touched?.email &&
            forgotPasswordFormState?.errors?.email && (
              <p className="text-sm text-red-600 mt-2">
                {forgotPasswordFormState?.errors?.email}
              </p>
            )}
          <Button className="mt-4 w-full" type="submit" disabled={isLoadingOnForgotPassword}>
            रिसेट पासवर्ड लिङ्क पठाउनुहोस्
          </Button>
        </form>
        <div className="mt-6">
          <ul
            role="list"
            className="marker:text-sky-800 list-disc pl-5 space-y-3 text-slate-400 mb-3"
          >
            <li>रिसेट लिङ्क तपाईंको इमेल खातामा प्राप्त हुनेछ |</li>
            <li>
              रिसेट इमेल 30 मिनेट सम्म योग्य हुनेछ, र त्यस पछि रिसेट लिङ्कको
              म्याद समाप्त हुनेछ |
            </li>
            <li>
              यदि रिसेट इमेलको म्याद समाप्त हुन्छ भने, यहाँ मार्फत नयाँ रिसेट
              लिङ्क पुन: अनुरोध गर्न सक्षम हुनेछ |
            </li>
          </ul>
          <a
            onClick={() => {
              setModalType("login");
            }}
            className="mt-6 text-center underline text-red-600 cursor-pointer"
          >
            प्रक्रिया खारेज गर्नुहोस् र लगइन मा फर्कनुहोस्
          </a>
        </div>
      </div>
    </div>
  );
};
