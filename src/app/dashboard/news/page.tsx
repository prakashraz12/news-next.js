"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const NewsListPage = () => {
  return (
    <div className="w-full">
      <div className="w-full pt-3 pb-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-800">News</h1>
        <Button className="bg-sky-800" >
          <Link href={"/dashboard/news/create"}>News Create</Link> 
        </Button>
      </div>
      <Card className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Input placeholder="Title" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Menu" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button className="bg-sky-800">Search</Button>
        </div>
      </Card>
      <Card className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>News title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Menu</TableHead>
              <TableHead className="text-right">Reporter</TableHead>
              <TableHead className="text-right">Published On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium w-[200px]">
                प्रतिनिधि सभाको बैठकमा आज..
              </TableCell>
              <TableCell>
                <Badge className="font-medium bg-green-700">Published</Badge>
              </TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">अनलाइनखबर</TableCell>
              <TableCell className="text-right">१८ चैत २०८०, आइतबार</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default NewsListPage;
