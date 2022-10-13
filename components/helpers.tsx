import { RootState } from "../redux/store";

type validateFormProps = {
  name: string;
  phoneNumber: string;
  email: string;
  link: string;
  city: string;
  fullName: string;
};

export const checkOnlyLetters = (data: string) => {
  if (data === "") return true;
  return /^[a-zA-Zа-яА-Я]+$/.test(data);
};

export const checkLettersWithSpace = (data: string) => {
  if (data === "") return true;
  return /^[a-zA-Zа-яА-Я\s]+$/.test(data);
};

export const checkPhoneNumber = (data: string) => {
  if (data === "") return true;
  return /^\+?[0-9]{11}$/.test(data);
};

export const checkEmail = (data: string) => {
  if (data === "") return true;
  return /^.+@.+\..+$/.test(data);
};

export const checkLink = (data: string) => {
  if (data === "") return true;
  return /^(https:\/\/)?[a-zA-zа-яА-Я0-9]+\.[a-zA-zа-яА-Я]+(\/[\w]+)?$/.test(
    data
  );
};

export const validateForm = ({
  name,
  phoneNumber,
  email,
  link,
  city,
  fullName,
}: validateFormProps) => {
  return (
    name !== "" &&
    checkOnlyLetters(name) &&
    checkPhoneNumber(phoneNumber) &&
    checkEmail(email) &&
    checkLink(link) &&
    city !== "" &&
    checkLettersWithSpace(fullName)
  );
};

// export const formDataValueSelector = (state: RootState) => {
//   return state.value;
// };
