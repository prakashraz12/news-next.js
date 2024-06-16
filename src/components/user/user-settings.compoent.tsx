"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  useUpdatePasswordMutation,
  useUpdateUserMutation,
} from "@/(service)/api/user.api";
import { useDispatch } from "react-redux";
import {  setUserDetails } from "@/(store)/slices/app.slice";
import toast from "react-hot-toast";
import { ChevronDown, ChevronUp, Loader, Pen } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ChnagePassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const passwordUpdate = Yup.object().shape({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirmNewPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword")],
      "new password and confirm password should match must match"
    )
    .required("Confirm new password is required"),
});
export const UserSettings = ({
  user,
}: {
  user: any;
  setOpen: (type: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [userImage, setUserImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  const [isChangedPassword, setIsChangePassword] = useState<boolean>(false);
  const [
    updatePassword,
    { isSuccess: isPasswordUpdated, isLoading: isPasswordUpdating },
  ] = useUpdatePasswordMutation();
  const [updateData, { isSuccess, data, isLoading }] = useUpdateUserMutation();

  const handleUpdate = async () => {
    if (!fullName || !email) {
      return toast.error("fullName and email is required");
    } else {
      const formData = new FormData();
      if (userImage) formData.append("file", userImage as File);
      formData.append("fullName", fullName);
      formData.append("phone", phone);
      formData.append("email", email);
      await updateData(formData);
    }
  };


  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserDetails(data?.data));
      setImageUrl("");
      setUserImage(null);
      toast.success("Successfully updated");
    }
  }, [isSuccess]);

  const handleChnageImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setUserImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const changePassword = useFormik<ChnagePassword>({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: passwordUpdate,
    onSubmit: async (values) => {
      await updatePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      });
    },
  });

  useEffect(() => {
    if (isPasswordUpdated) {
      toast.success("Password updated successfully");
      changePassword.handleReset({});
    }
  }, [isPasswordUpdated]);


  return (
    <div className="w-full h-[560px] flex flex-col justify-between overflow-auto">
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between p-1">
            <p>User Information</p>
            <p
              className="text-sm flex items-center gap-1 underline cursor-pointer"
              onClick={() => setIsEditProfile(!isEditProfile)}
            >
              Edit
              <Pen size={"12px"} />
            </p>
          </div>
          <Input
            placeholder="profile picture"
            type="file"
            disabled={isLoading || !isEditProfile}
            onChange={handleChnageImage}
            accept="image/*"
          />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="user-image"
              className="w-[100px] h-[100px] object-contain"
            />
          )}
          <Input
            placeholder="Full Name"
            value={fullName}
            disabled={isLoading || !isEditProfile}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            disabled={isLoading || !isEditProfile}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Phone"
            value={phone}
            disabled={isLoading || !isEditProfile}
            onChange={(e) => setPhone(e.target.value)}
          />
          {isEditProfile && (
            <>
              <Button
                variant="secondary"
                onClick={handleUpdate}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="span mx-2 animate-spin" />
                ) : (
                  "Update Profile"
                )}
              </Button>
              <Button
                variant={"destructive"}
                onClick={() => setIsEditProfile(false)}
              >
                Cancel
              </Button>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex justify-between p-1">
            <p>Change Password</p>

            {isChangedPassword ? (
              <ChevronUp
                onClick={() => setIsChangePassword(false)}
                className="cursor-pointer"
              />
            ) : (
              <ChevronDown
                onClick={() => setIsChangePassword(true)}
                className="cursor-pointer"
              />
            )}
          </div>
          {isChangedPassword && (
            <>
              <Input
                placeholder="Old password"
                value={changePassword.values.oldPassword}
                name="oldPassword"
                onChange={changePassword.handleChange}
                onBlur={changePassword.handleBlur}
                type={isShowPassword ? "text" : "password"}
              />
              {changePassword.touched.oldPassword &&
                Boolean(changePassword.errors.oldPassword) && (
                  <p className="text-sm text-red-700">
                    {changePassword.errors.oldPassword}
                  </p>
                )}
              <Input
                placeholder="New password"
                type={isShowPassword ? "text" : "password"}
                value={changePassword.values.newPassword}
                name="newPassword"
                onChange={changePassword.handleChange}
                onBlur={changePassword.handleBlur}
              />
              {changePassword.touched.oldPassword &&
                Boolean(changePassword.errors.newPassword) && (
                  <p className="text-sm text-red-700">
                    {changePassword.errors.newPassword}
                  </p>
                )}
              <Input
                value={changePassword.values.confirmNewPassword}
                name="confirmNewPassword"
                onChange={changePassword.handleChange}
                onBlur={changePassword.handleBlur}
                placeholder="Confirm new password"
                type={isShowPassword ? "text" : "password"}
              />
              {changePassword.touched.confirmNewPassword &&
                Boolean(changePassword.errors.confirmNewPassword) && (
                  <p className="text-sm text-red-700">
                    {changePassword.errors.confirmNewPassword}
                  </p>
                )}
              <div className="flex items-center space-x-2 justify-end p-2">
                <Checkbox
                  id="terms"
                  checked={isShowPassword}
                  onCheckedChange={(checked: boolean) =>
                    setIsShowPassword(checked)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Show Password
                </label>
              </div>
              <Button
                variant="outline"
                type="button"
                onClick={() => changePassword.handleSubmit()}
              >
                {isPasswordUpdating ? (
                  <Loader className="span mx-2 animate-spin" />
                ) : (
                  "Change Password"
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
