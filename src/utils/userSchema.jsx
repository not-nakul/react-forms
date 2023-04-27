import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter a first name!")
    .transform((value) => value.trim())
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),

  lastName: yup
    .string()
    .required("Please enter a last name!")
    .transform((value) => value.trim())
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),

  age: yup
    .number()
    .typeError("Please enter a valid age!")
    .required("This field is required!")
    .positive("Age cannot be negative or zero!")
    .integer("Age can only be an integer!")
    .max(60, "Age cannot be more than 80!"),

  gender: yup.string().required("Please choose an option!"),

  govtIdType: yup.string(),

  govtIdNumber: yup
    .string()
    .when("govtIdType", ([value], schema) => {
      if (value === "adhaar") {
        return schema
          .length(12, "Adhaar Card number must be 12 digits long!")
          .required("Adhaar Card number is required!");
      }

      if (value === "pan") {
        return schema
          .length(10, "PAN Card number must be 10 digits long!")
          .required("PAN Card number is required!");
      }

      return schema.transform((value) => (value = ""));
    })
    .transform((value) => value.trim()),

  number: yup
    .string()
    .nullable()
    .transform((value) => (value ? value.trim() : ""))
    .test({
      name: "phone",
      test: (value) => !value || (value.length === 10 && /^\d+$/.test(value)),
      message: "Number must be of 10 digits!",
    }),

  email: yup.string().email("Please enter a valid email!"),

  state: yup.string().transform((value) => value.trim()),

  city: yup.string().transform((value) => value.trim()),

  address: yup
    .string()
    .transform((value) => value.trim())
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),

  guardianType: yup.string(),

  guardianName: yup
    .string()
    .when("guardianType", ([value], schema) => {
      if (value) {
        return schema.required("Guardian Name is required!");
      }

      return schema.transform((value) => (value = ""));
    })
    .transform((value) => value.trim()),

  occupation: yup
    .string()
    .transform((value) => value.trim())
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),
});
