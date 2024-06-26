import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { FormikValues } from "formik";
import React, { useState } from "react";

interface LoginFormProps {
  handleSubmit: () => void;
  loginFormState: FormikValues;
  isLoading: boolean;
  setModalType: (type: string) => void;
}
export const LoginForm = ({
  handleSubmit,
  loginFormState,
  isLoading,
  setModalType
}: LoginFormProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const handleShowPassword = (checked: boolean) => {
    setIsShowPassword(checked);
  };

  const clickOnForgotPasswordLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    setModalType("forgot-password")
}

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <Input
        placeholder="इमेल"
        className="w-full"
        value={loginFormState?.values?.email}
        name="email"
        type="email"
        onChange={loginFormState.handleChange}
     
      />
      {loginFormState?.touched?.email && Boolean(loginFormState?.errors?.email) && (
        <p className="text-sm text-red-600">{loginFormState?.errors?.email}</p>
      )}
      <Input
        placeholder="पासवर्ड"
        type={isShowPassword ? "text" : "password"}
        value={loginFormState?.values?.password}
        name="password"
        onChange={loginFormState.handleChange}
        onBlur={loginFormState.handleBlur}
      />
      {loginFormState?.touched?.password &&
        Boolean(loginFormState?.errors?.password) && (
          <p className="text-sm text-red-600">
            {loginFormState?.errors?.password}
          </p>
        )}
      <div className="flex gap-1 items-center justify-between">
        <div className="flex gap-1 items-center">
          <Checkbox
            id="isShowPassword"
            onCheckedChange={handleShowPassword}
            checked={isShowPassword}
          />
          <label
            htmlFor="tisShowPassworderms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            पासवर्ड देखाउनुहोस्
          </label>
        </div>
        <p className="underline cursor-pointer">
          <a onClick={clickOnForgotPasswordLink}>पासवर्ड भुल्नु भयो</a>
        </p>
      </div>
      <Button type="submit" disabled={isLoading} className="dark:text-white dark:hover:bg-sky-900">
        लगइन
      </Button>
    </form>
  );
};
