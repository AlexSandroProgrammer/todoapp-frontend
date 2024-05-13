import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  // creamos un estado inicial del formulario
  const [formState, setFormState] = useState(initialForm);
  // creamos un estado para las validaciones del formulario
  const [formValidation, setFormValidation] = useState({});

  //! cada vez que cambie el estado del formulario valvemos a generar una nueva validacion
  useEffect(() => {
    createValidators();
  }, [formState]);

  // cada vez que cambia el formulario que estamos recibiendo entonces cambiamos los valores en el estado del formulario
  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  // crear una funcion para que nos devuelva si el formulario es valido o no
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
  });

  // funcion para cambiar el valor de cada uno de los inputs
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // funcion para restablecer los valores del formulario

  const onResetForm = () => {
    setFormState(initialForm);
  };

  // funcion para validar los datos del formulario
  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField} Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    ...formValidation,
    onInputChange,
    onResetForm,
    isFormValid,
  };
};
