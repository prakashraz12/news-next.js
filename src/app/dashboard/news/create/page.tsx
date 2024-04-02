const QuillEditor = dynamic(()=> import("@/components/react-quil-editor.component"), {ssr:false})
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUp } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import dynamic from "next/dynamic";

const NewsCreatePage = () => {
  return (
    <div className="w-full mt-3 ">
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
              <h1 className="text-2xl font-bold text-slate-300">
                Upload Banner Image
              </h1>
              <ImageUp size={"48px"} className="text-slate-300" />
            </div>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-3">
          <Input placeholder="Tilte" />
          <Textarea rows={4} placeholder="Short Description" />
          <QuillEditor />
          <div className="mt-8 grid grid-cols-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Menu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Published
              </label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsCreatePage;
