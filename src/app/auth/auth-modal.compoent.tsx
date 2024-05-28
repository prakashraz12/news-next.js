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

interface AuthModalProps {
  open: boolean;
  setOpen: (type: boolean) => void;
}
export const AuthModal = ({ open, setOpen }: AuthModalProps) => {
  const [modalType, setModalType] = useState<string>("login");
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
            <div
              onClick={() => {
                setOpen(false);
                setModalType("login")
              }}
              className="cursor-pointer"
            >
              <X/>
            </div>
          </div>
        </DialogHeader>
        <hr />
        {modalType === "login" ? (
          <Login setModalType={setModalType} setOpen={setOpen} />
        ) : modalType === "register" ? (
          <Register setModalType={setModalType} setOpen={setOpen} />
        ) : (
          <ForgotPasswordComponent setModalType={setModalType} setOpen={setOpen} />
        )}
      </DialogContent>
    </Dialog>
  );
};
