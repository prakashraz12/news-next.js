import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import React from "react";

interface VerifyEmailPopUpProps {
  open: boolean;
  setOpen: (type: boolean) => void;
}
export const VerifyEmailPopUp = ({ open, setOpen }: VerifyEmailPopUpProps) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <div className="w-full justify-between flex items-center">
            <DialogTitle>आफ्नो इमेल प्रमाणित गर्नुहोस्</DialogTitle>
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              <X />
            </div>
          </div>
        </DialogHeader>
        <hr />
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-md">
            प्रमाणित गर्नको टोकन आफ्नो मेलमा पठाइएको छ, कृपया ३० मिनेटभित्र जाँच
            गर्नुहोस् र प्रमाणित गर्नुहोस्।धन्यवाद
          </p>
          <img
            src="/check.png"
            alt="check-icon"
            className="w-[70px] h-[70px] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
