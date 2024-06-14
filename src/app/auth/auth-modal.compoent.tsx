import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Login from "./login";
import Register from "./register/register";
import { ForgotPasswordComponent } from "./_components/forgot-password.component";
import { X } from "lucide-react";
import { authWihGoogle } from "@/utils/firebase.util";
import toast from "react-hot-toast";
import { useLazyContinueWithGoogleQuery } from "@/(service)/api/user.api";
import { useDispatch } from "react-redux";
import { setToken, setUserDetails } from "@/(store)/slices/app.slice";

interface AuthModalProps {
  open: boolean;
  setOpen: (type: boolean) => void;
}
export const AuthModal = ({ open, setOpen }: AuthModalProps) => {
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState<string>("login");
  const [googleAuth] = useLazyContinueWithGoogleQuery();
  const handleWithGoogle = async (e: any) => {
    e.preventDefault();
    try {
      const user: any = await authWihGoogle();
      const response: any = await googleAuth({
        access_token: user?.accessToken,
      });
      if (response?.data?.code === 200) {
        dispatch(setToken(response?.data?.data?.token));
        dispatch(setUserDetails(response?.data?.data?.user));
        setOpen(false);
      }
      if (response?.error?.data?.code === 403) {
        toast.error(response?.error?.data?.message);
      }
    } catch (err) {
      toast.error("Trouble with Google authentication");
    }
  };
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] flex justify-center flex-col">
        <DialogHeader>
          <div className="flex justify-between">
            <DialogTitle className="text-center">
              {modalType === "login"
                ? "लग - इन"
                : modalType === "register"
                  ? "नयाँ खाता सिर्जना गर्नुहोस्"
                  : "पासवर्ड भुल्नु भयो"}
            </DialogTitle>
            <div className="cursor-pointer">
              <X
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  setModalType("login");
                }}
              />
            </div>
          </div>
        </DialogHeader>
        <hr />
        {modalType === "login" ? (
          <Login
            setModalType={setModalType}
            setOpen={setOpen}
            handleWithGoogle={handleWithGoogle}
          />
        ) : modalType === "register" ? (
          <Register
            setModalType={setModalType}
            setOpen={setOpen}
            handleWithGoogle={handleWithGoogle}
          />
        ) : (
          <ForgotPasswordComponent
            setModalType={setModalType}
            setOpen={setOpen}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
