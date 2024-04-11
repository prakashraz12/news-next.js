"use client";
import {
  useResendVerifyEmailMutation,
  useVerifyEmailMutation,
} from "@/(service)/api/user.api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyEmailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [isJwtIsExpired, setISJwtIsExpired] = useState<boolean>(false);
  console.log(params);
  const [
    verifyToken,
    {
      isSuccess: isVerifyToken,
      isError: isErrorOnVerifyEmail,
      error: errorMessageOnVerifyEmail,
    },
  ] = useVerifyEmailMutation();

  const [
    userToken,
    {
      isSuccess: isResendTokenSuccess,
      isError: isErrorOnResendToken,
      error: errorMessageOnReSendResetToken,
      isLoading: isLoadingOnResendResetToken,
    },
  ] = useResendVerifyEmailMutation();

  const handleSubmitToken = async () => {
    await verifyToken(params?.id);
  };

  const handleNewRequestToken = async () => {
    await userToken(params?.id);
  };

  useEffect(() => {
    if (params?.id) {
      handleSubmitToken();
    }
  }, [params.id]);

  //error handling
  useEffect(() => {
    if (isErrorOnVerifyEmail && errorMessageOnVerifyEmail) {
      if (
        "data" in errorMessageOnVerifyEmail &&
        errorMessageOnVerifyEmail.data
      ) {
        const errorMessage = (
          errorMessageOnVerifyEmail.data as { message?: string }
        ).message;
        if (errorMessage === "jwt expired") {
          setISJwtIsExpired(true);
        }
      }
    }
  }, [isErrorOnVerifyEmail, errorMessageOnVerifyEmail]);

  useEffect(() => {
    if (isErrorOnResendToken && errorMessageOnReSendResetToken) {
      if (
        "data" in errorMessageOnReSendResetToken &&
        errorMessageOnReSendResetToken.data
      ) {
        const errorMessage = (
          errorMessageOnReSendResetToken.data as { message?: string }
        ).message;
        if (errorMessage === "jwt expired") {
          setISJwtIsExpired(true);
        }
      }
    }
  }, [isErrorOnResendToken, errorMessageOnReSendResetToken]);

  useEffect(() => {
    if (isResendTokenSuccess) {
      router.push("/");
      toast.success(
        "प्रमाणित गर्नको लिङ्क आफ्नो मेलमा पुन: पठाइयो, कृपया जाँच गर्नुहोस्।"
      );
    }
  }),
    [isResendTokenSuccess];
  
  return (
    <div className="w-full h-full mt-16 flex justify-center items-center">
      {isVerifyToken && (
        <Card className="p-5">
          <CardContent className="flex flex-col gap-3 w-full">
            <h1 className="text-2xl font-bold text-sky-600 text-center mb-2">
              नेपाल खबर
            </h1>
            <hr className="mb-4" />
            <p className="text-xl">तपाईको खाता सफलतापूर्वक प्रमाणित भयो</p>
            <Button className="w-full">
              <a href="/">गृह पृष्ठमा फिर्ता</a>
            </Button>
          </CardContent>
        </Card>
      )}
      {isJwtIsExpired && (
        <Card>
          <CardContent className="p-5">
            <h1 className="text-2xl font-bold text-sky-600 text-center mb-2">
              नेपाल खबर
            </h1>
            <hr className="mb-4" />
            <p className="text-xl mb-4">
              तपाईको टोकन अमान्य छ वा म्याद सकिएको छ, तपाईले नयाँ टोकन अनुरोध
              गर्न सक्नुहुन्छ
            </p>
            <Button
              className="w-full"
              onClick={handleNewRequestToken}
              disabled={isLoadingOnResendResetToken}
            >
              नयाँ टोकन अनुरोध गर्नुहोस्
            </Button>
            <a href="/" className="underline flex justify-center mt-4">
              गृह पृष्ठमा फिर्ता
            </a>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
export default VerifyEmailPage;
