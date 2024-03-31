import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUp } from "lucide-react";
import React from "react";

const NewsCreatePage = () => {
  return (
    <div className="w-full mt-3">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-800">Create News</h1>
        <div className="flex gap-2">
          <Button variant={"default"}>Post</Button>
          <Button variant={"destructive"}>Cancel</Button>
        </div>
      </div>
      <Card className="p-3 mt-5">
        <div className="aspect-video border-4 border-dashed rounded-sm flex justify-center items-center">
          <label htmlFor="uploadBanner">
            {/* <img
                  alt="banner image"
                  className="z-20"
                /> */}
            <input
              type="file"
              id="uploadBanner"
              accept=".png, .jpg, .jpeg"
              hidden
            />
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-slate-300">Upload Banner Image</h1>
          <ImageUp size={"48px"} className="text-slate-300"/>
          </div>

          </label>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Input placeholder="Tilte" />
          <Textarea rows={4} placeholder="Short Description" />
        </div>
      </Card>
    </div>
  );
};

export default NewsCreatePage;
