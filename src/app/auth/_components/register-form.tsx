import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormikValues } from "formik";
import React from "react";

interface RegisterFormProps {
  registerUserFormState: FormikValues;
  isRegisterLoading: boolean;
}
export const RegisterForm = ({
  registerUserFormState,
  isRegisterLoading,
}: RegisterFormProps) => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={registerUserFormState?.handleSubmit}
    >
      <div>
        <Input
          placeholder="पुरा नाम/fullname"
          className="col-span-2 md:col-span-1"
          id="fullName"
          name="fullName"
          type="text"
          value={registerUserFormState?.values?.fullName}
          onChange={registerUserFormState?.handleChange}
          onBlur={registerUserFormState?.handleBlur}
        />
        {registerUserFormState?.touched?.fullName &&
          registerUserFormState?.errors?.fullName && (
            <p className="text-sm text-red-600 mt-2">
              {registerUserFormState?.errors?.fullName}
            </p>
          )}
      </div>
      <div>
        <Input
          placeholder="इमेल/email"
          className="col-span-2 md:col-span-1"
          id="email"
          name="email"
          type="email"
          value={registerUserFormState?.values?.email}
          onChange={registerUserFormState?.handleChange}
          onBlur={registerUserFormState?.handleBlur}
        />
        {registerUserFormState?.touched?.email &&
          registerUserFormState?.errors?.email && (
            <p className="text-sm text-red-600 mt-2">
              {registerUserFormState?.errors?.email}
            </p>
          )}
      </div>
      <div>
        <Input
          placeholder="पासवर्ड/password"
          className="col-span-2 md:col-span-1"
          id="password"
          type="password"
          name="password"
          value={registerUserFormState?.values?.password}
          onChange={registerUserFormState?.handleChange}
          onBlur={registerUserFormState?.handleBlur}
        />
        {registerUserFormState?.touched?.password &&
          registerUserFormState?.errors?.password && (
            <p className="text-sm text-red-600 mt-2">
              {registerUserFormState?.errors?.password}
            </p>
          )}
      </div>
      <div>
        <Input
          placeholder="कन्फोर्म पस्स्वोर्ड/confirm password"
          className="col-span-2 md:col-span-1"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          value={registerUserFormState?.values?.confirmPassword}
          onChange={registerUserFormState?.handleChange}
          onBlur={registerUserFormState?.handleChange}
        />
        {registerUserFormState?.touched?.confirmPassword &&
          registerUserFormState?.errors?.confirmPassword && (
            <p className="text-sm text-red-600 mt-2">
              {registerUserFormState?.errors?.confirmPassword}
            </p>
          )}
      </div>
      <Input
        placeholder="मोबाइल नम्बर/Mobile No"
        className="col-span-2"
        name="phone"
        id="phone"
        type="number"
        value={registerUserFormState?.values?.phone}
        onChange={registerUserFormState?.handleChange}
        onBlur={registerUserFormState?.handleChange}
      />
      {registerUserFormState?.touched?.phone &&
        registerUserFormState?.errors?.phone && (
          <p className="text-sm text-red-600 mt-2">
            {registerUserFormState?.errors?.phone}
          </p>
        )}
      <Button
        className="mt-3 col-span-2 dark:text-white"
        type="submit"
        disabled={isRegisterLoading}
      >
        दर्ता गर्नुहोस्/Register
      </Button>
    </form>
  );
};
