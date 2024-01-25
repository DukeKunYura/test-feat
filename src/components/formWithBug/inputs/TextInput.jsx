import { useEffect, useState, memo } from "react";
import styles from "./styles.module.scss";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";

export const TextInput = memo(
  ({
    valueType,
    inputType,
    newStyle,
    description,
    isRequired,
    placeHolder,
    minLength,
    maxLength,
    pattern,
    validate,
    register,
    errors,
    control,
  }) => {
    const controller = useController({
      name: valueType,
      control: control,
      rules: {
        required: isRequired,
      },
    });
    const [isPassword, setIsPassword] = useState(false);
    const changeVisibilityPass = (event) => {
      setIsPassword(!isPassword);
      event.preventDefault();
    };

    useEffect(() => {
      if (inputType === "password") setIsPassword(true);
    }, [inputType]);

    const renderHint = () => {
      return errors[valueType] ? (
        <span className={styles.block__invalidText}>
          <div>AAA</div>
          {errors[valueType] && errors[valueType].message}
        </span>
      ) : (
        <span className={styles.block__validText}>
          <div>AAA</div>
        </span>
      );
    };

    if (valueType === "login") {
      console.log("login");
    }

    return (
      <label className={`${styles.block} ${newStyle}`}>
        {inputType === "password" && (
          // eslint-disable-next-line
          <a
            className={styles.block__eye}
            onClick={(event) => changeVisibilityPass(event)}
          >
            {isPassword && <div>AAA</div>}
            {!isPassword && <div>AAA</div>}
          </a>
        )}
        {inputType === "tel" ? (
          <InputMask
            mask="+7(999)999-99-99"
            alwaysShowMask={false}
            className={styles.block__input}
            placeholder={placeHolder}
            {...register(valueType, {
              required: {
                value: isRequired,
                message: "Поле обязательно для заполнения",
              },
              minLength: {
                value: minLength,
                message: `Поле ${description} должно быть длиной не менее ${minLength} символов`,
              },
              pattern: pattern,
              validate: validate,
            })}
            type={isPassword ? "password" : { inputType }}
          />
        ) : (
          <input
            className={styles.block__input}
            placeholder={placeHolder}
            {...register(valueType, {
              required: {
                value: isRequired,
                message: "Поле обязательно для заполнения",
              },
              minLength: {
                value: minLength,
                message: `Поле ${description} должно быть длиной не менее ${minLength} символов`,
              },
              maxLength: {
                value: maxLength,
                message: `Допустимая длина поля ${description} не более
              ${maxLength} символов`,
              },
              pattern: pattern,
              validate: validate,
            })}
            type={isPassword ? "password" : { inputType }}
          />
        )}
        {controller.fieldState.isTouched &&
          controller.field.onBlur() &&
          renderHint()}
      </label>
    );
  }
);

export default TextInput;
