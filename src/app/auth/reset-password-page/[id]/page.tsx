"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { resetPasswordSchema } from "../../auth.validation-schema";
import { useResetPasswordMutation } from "@/(service)/api/user.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ResetPasswordPage = () => {
  const router = useRouter();
  const params = useParams();
  const [
    restPassword,
    {
      isSuccess: isResetPassword,
      isError: isErrorOnResetPassword,
      error: errorMessageOnResetPassword,
    },
  ] = useResetPasswordMutation();

  const resetPasswordFormState = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      const data = {
        password: values.password,
        token: params?.id,
      };
      await restPassword(data);
    },
  });

  //error handling
  useEffect(() => {
    if (isErrorOnResetPassword && errorMessageOnResetPassword) {
      if (
        "data" in errorMessageOnResetPassword &&
        errorMessageOnResetPassword.data
      ) {
        const errorMessage = (
          errorMessageOnResetPassword.data as { message?: string }
        ).message;
        if (errorMessage) {
          toast.error(errorMessage);
        }
      }
    }
  }, [isErrorOnResetPassword, errorMessageOnResetPassword]);

  //success
  useEffect(() => {
    if (isResetPassword) {
      toast.success("तपाँइको पासवर्ड सफलतापूर्वक परिवर्तित गरियो");
      resetPasswordFormState.handleReset({});
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, [isResetPassword]);

  return (
    <div className="w-full flex justify-center">
      <Card className="md:w-[400px] mt-6 p-5 w-full">
        <CardContent>
          <h1 className="text-2xl font-bold text-sky-900 text-center mb-3">
            नेपाल खबर
          </h1>
          <form onSubmit={resetPasswordFormState?.handleSubmit}>
            <Input
              placeholder="पासवर्ड/password"
              value={resetPasswordFormState?.values?.password}
              onChange={resetPasswordFormState?.handleChange}
              id="password"
              name="password"
              className="mb-3"
              type="text"
              onBlur={resetPasswordFormState?.handleBlur}
            />
            {resetPasswordFormState?.touched?.password &&
              resetPasswordFormState?.errors?.password && (
                <p className="text-sm text-red-500">
                  {resetPasswordFormState?.errors?.password}
                </p>
              )}
            <Input
              className="mt-3 mb-2"
              placeholder="कन्फोर्म पस्स्वोर्ड/confirm password"
              value={resetPasswordFormState?.values?.confirmPassword}
              onChange={resetPasswordFormState?.handleChange}
              id="confirmPassword"
              type="text"
              name="confirmPassword"
              onBlur={resetPasswordFormState?.handleBlur}
            />
            {resetPasswordFormState?.touched?.confirmPassword &&
              resetPasswordFormState?.errors?.confirmPassword && (
                <p className="text-sm text-red-500">
                  {resetPasswordFormState?.errors?.confirmPassword}
                </p>
              )}
            <Button className="w-full mt-3" type="submit">
              पासवर्ड परिवर्तन गर्नुहोस्/Change password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
