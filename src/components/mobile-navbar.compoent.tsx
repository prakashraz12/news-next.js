import React from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface MobileNavBrComponentProps {
  open: boolean;
  setOpen: (type: boolean) => void;
}
export const MobileNavBrComponent = ({
  open,
  setOpen,
}: MobileNavBrComponentProps) => {
  const appSettings = useSelector((app: any) => app?.app?.appSettings);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent>
        <SheetHeader className="mt-3">
          <ul>
            <li
              className="font-bold text-xl p-3 text-start"
              onClick={() => {
                router.push(`/`);
                handleClose();
              }}
            >
              गृहपृष्ठ
            </li>
            {appSettings?.menus?.map((menu: any, index: number) => (
              <li
                className="font-bold text-xl p-3 text-start"
                key={index}
                onClick={() => {
                  router.push(`/home/menu/${menu?._id}`);
                  handleClose();
                }}
              >
                {menu?.menuTitle}
              </li>
            ))}
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
