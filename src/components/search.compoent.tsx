import { Search } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
export const SearchComponent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px] w-full">
        <DialogHeader>
          <DialogTitle className="text-xl text-blue-900">
            खोज्नुहोस्
          </DialogTitle>
        </DialogHeader>
        <div className=" py-4 w-full flex flex-col gap-2 ">
          <Input
            id="name"
            placeholder="शीर्षक, लेखक, वा स्तम्भमा खोज्नुहोस्"
            value=""
            className="w-full"
          />

          <div className="max-h-[500px] overflow-auto">
            <div className="mt-4">
              <Card className="w-full flex gap-2 sm:p-0 md:p-2">
                <Image
                  src={
                    "https://nepalkhabar.prixacdn.net/media/albums/dhiraj-pratap-singh-sarbendra-khanal_sCrTcxi6uf.jpg"
                  }
                  alt="news-image"
                  width={130}
                  height={100}
                  className="hidden md:block"
                  style={{ objectFit: "cover", borderRadius: "5px" }}
                />
                <div>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">
                      युक्रेनको कब्जामा रहेका नेपालीलाई छुटाउन पहल भइरहेको छ :
                      परराष्ट्र मन्त्रालय
                    </CardTitle>
                    <CardDescription>
                      रुसी सेनामा गैरकानुनी रूपमा भर्ना भई युद्ध लड्ने क्रममा
                      युक्रेनी सेनाको कब्जामा रहेका रुसी सेनामा गैरकानुनी रूपमा
                      भर्ना भई युद्ध लड्ने क्रममा
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const DialogComponent = () => {};
