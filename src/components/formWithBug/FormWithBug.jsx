import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { checkLogin } from "./check";
import TextInput from "./TextInput/TextInput";

const RegistrationFirst = () => {
  let addFirstRegFormData;
  let isUr, setIsRegFirst, setIsRegSecond;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    control,
  } = useForm({
    mode: "all",
  });

  const sendData = () => {
    setIsRegFirst(false);
    setIsRegSecond(true);
  };

  const checkLoginDebounced = AwesomeDebouncePromise(checkLogin, 500);

  const loginInput = useCallback(() => {
    return (
      <TextInput
        valueType={"login"}
        inputType={"text"}
        description={"Логин"}
        isRequired={true}
        placeHolder={"Введите"}
        minLength={3}
        pattern={{
          value: /^[a-zA-Z0-9_]+$/,
          message: "Допустимы только латинские буквы и цифры",
        }}
        validate={checkLoginDebounced}
        maxLength={16}
        register={register}
        errors={errors}
        control={control}
      />
    );
  }, []);

  console.log("render");

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit(sendData)}>
        <h2>
          {isUr && <>РЕГИСТРАЦИЯ ЮРИДИЧЕСКОГО ЛИЦА</>}
          {!isUr && <>РЕГИСТРАЦИЯ ФИЗИЧЕСКОГО ЛИЦА</>}
        </h2>

        {loginInput()}

        <TextInput
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
          errors={errors}
          control={control}
        />

        <TextInput
          valueType={"confirm_password"}
          inputType={"password"}
          description={"Подтвердите пароль"}
          isRequired={true}
          placeHolder={"Введите"}
          minLength={false}
          pattern={false}
          validate={(value) => {
            if (watch("password") !== value) {
              return "Пароли не совпадают";
            }
          }}
          register={register}
          errors={errors}
          control={control}
        />
      </form>
    </div>
  );
};

export default RegistrationFirst;
