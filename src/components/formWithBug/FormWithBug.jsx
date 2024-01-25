import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { checkLogin } from "./check";
import LoginInput from "./inputs/LoginInput";
import PasswordInput from "./inputs/PasswordInput";

const RegistrationFirst = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: "onSubmit",
  });

  const sendData = (data) => {
    console.log("send: " + JSON.stringify(data));
  };

  const checkLoginDebounced = AwesomeDebouncePromise(checkLogin, 500);

  const trueF = () => {
    console.log("cheker");
    return true;
  };

  console.log("render form");

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit(sendData)}>
        <h2>РЕГИСТРАЦИЯ ФИЗИЧЕСКОГО ЛИЦА</h2>

        <LoginInput
          register={register}
          valueType={"login"}
          // inputType={"text"}
          description={"Логин"}
          // isRequired={true}
          // placeHolder={"Введите"}
          minLength={3}
          // pattern={{
          //   value: /^[a-zA-Z0-9_]+$/,
          //   message: "Допустимы только латинские буквы и цифры",
          // }}
          validate={trueF}
          // maxLength={16}
          // register={register}
          errors={errors}
          // control={control}
        />

        <LoginInput
          register={register}
          valueType={"login2"}
          // inputType={"text"}
          description={"Логин"}
          // isRequired={true}
          // placeHolder={"Введите"}
          minLength={3}
          // pattern={{
          //   value: /^[a-zA-Z0-9_]+$/,
          //   message: "Допустимы только латинские буквы и цифры",
          // }}
          // validate={false}
          // maxLength={16}
          // register={register}
          errors={errors}
          // control={control}
        />

        {/* <PasswordInput
          valueType={"password"}
          inputType={"password"}
          description={"Пароль"}
          isRequired={true}
          placeHolder={"Введите"}
          minLength={false}
          pattern={{
            value:
              /^(?=.*[0-9])(?=.*[!@#$%^&*?_-])[a-zA-Z0-9!@#$%^&*?_±<>§"'№:;,.()/|{}`~-]{6,16}$/,
            message:
              "Пароль должен быть размером от 6 до 16 символов, содержать цифру и специальный символ",
          }}
          validate={false}
          register={register}
        />

        <PasswordInput
          valueType={"confirm_password"}
          inputType={"password"}
          description={"Подтвердите пароль"}
          isRequired={true}
          placeHolder={"Введите"}
          minLength={false}
          pattern={false}
          validate={false}
          register={register}
        /> */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegistrationFirst;
