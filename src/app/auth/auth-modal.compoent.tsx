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
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthOpen, setToken, setUserDetails } from "@/(store)/slices/app.slice";


export const AuthModal = () => {
  const authModalOpen = useSelector((state: any) => state?.app?.isAuthOpen);
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
      if (response?.data?.code === 200 || response?.data?.code === 201) {
        dispatch(setToken(response?.data?.data?.token));
        dispatch(setUserDetails(response?.data?.data?.user));
        dispatch(setIsAuthOpen(false))
      }
      if (response?.error?.data?.code === 403) {
        toast.error(response?.error?.data?.message);
      }
    } catch (err) {
      toast.error("Trouble with Google authentication");
    }
  };
  return (
    <Dialog open={authModalOpen}>
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
                 dispatch(setIsAuthOpen(false))
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
           
            handleWithGoogle={handleWithGoogle}
          />
        ) : modalType === "register" ? (
          <Register
            setModalType={setModalType}
           
            handleWithGoogle={handleWithGoogle}
          />
        ) : (
          <ForgotPasswordComponent
            setModalType={setModalType}
            
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
