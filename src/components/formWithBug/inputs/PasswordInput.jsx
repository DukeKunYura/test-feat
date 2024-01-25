import { useEffect, useState, memo } from "react";
import styles from "./styles.module.scss";
import { useController } from "react-hook-form";

export const PasswordInput = memo(
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
  }) => {
    // const controller = useController({
    //   name: valueType,
    //   control: control,
    //   rules: {
    //     required: isRequired,
    //   },
    // });

    // useEffect(() => {
    //   if (inputType === "password") setIsPassword(true);
    // }, [inputType]);

    // const renderHint = () => {
    //   return errors[valueType] ? (
    //     <span className={styles.block__invalidText}>
    //       <div>AAA</div>
    //       {errors[valueType] && errors[valueType].message}
    //     </span>
    //   ) : (
    //     <span className={styles.block__validText}>
    //       <div>AAA</div>
    //     </span>
    //   );
    // };

    console.log("password render");

    return (
      <label className={`${styles.block} ${newStyle}`}>
        {
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
            type={"password"}
          />
        }
      </label>
    );
  }
);

export default PasswordInput;
