import * as Yup from "yup";

//for login schema
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("तपाईको इमेल गलत प्रकारको छ")
    .required("इमेल आवश्यक छ"),
  password: Yup.string()
    .min(5, "पासवर्ड 5 अक्षरको हुनुपर्छ")
    .required("पासवर्ड आवश्यक छ"),
});

//for forgot password
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("तपाईको इमेल गलत प्रकारको छ")
    .required("इमेल आवश्यक छ"),
});

//for register user
export const registerUserSchema = Yup.object().shape({
  email: Yup.string()
    .email("तपाईको इमेल गलत प्रकारको छ")
    .required("इमेल आवश्यक छ"),
  password: Yup.string()
    .min(5, "पासवर्ड 5 अक्षरको हुनुपर्छ")
    .required("पासवर्ड आवश्यक छ"),
  confirmPassword: Yup.mixed()
    .oneOf([Yup.ref("password")], "पासवर्ड र कन्फर्म पासवर्ड मिल्नुपर्छ")
    .required(" कन्फर्म पासवर्ड आवश्यक छ"),
  phone: Yup.string()
    .min(10, "फोन नम्बर 10 अक्षरको हुनुपर्छ")
    .max(10, "फोन नम्बर 10 अक्षरको हुनुपर्छ"),
  fullName: Yup.string().required("पूरा नाम आवश्यक छ"),
});

//for reset password;
export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "पासवर्ड 5 अक्षरको हुनुपर्छ")
    .required("पासवर्ड आवश्यक छ"),
  confirmPassword: Yup.mixed()
    .oneOf([Yup.ref("password")], "पासवर्ड र कन्फर्म पासवर्ड मिल्नुपर्छ")
    .required(" कन्फर्म पासवर्ड आवश्यक छ"),
});
