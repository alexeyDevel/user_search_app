import { useState, useEffect } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { isEmail } from 'validator';
import userStore from '../../store/userStore';
import style from "./SearchForm.module.scss";

function SearchForm() {
  const [ getUsers ] = userStore(state => [state.getUsers]);
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const handleEmailInputChange = (e) => {
    const email = e.target.value;
    setEmailInput(email);
    setIsEmailValid(true);
  };

  const handleNumberInputChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    const formattedValue = inputValue.replace(/(\d{2})(?=\d)/g, "$1-");
    setNumberInput(formattedValue);
    setIsNumberValid(true);
  };

  const fetchUsers = () => {
    setIsEmailValid(isEmail(emailInput));
    setIsNumberValid(numberInput.length >= 6 || numberInput === "");
    if (isEmail(emailInput) && (numberInput.length >= 6 || numberInput == "")) {
      getUsers(emailInput, numberInput.replace(/\D/g, ""));
    }
  };

  return (
    <Container className={style.container}>
      <FormControl isInvalid={!isEmailValid && !isEmailValid} className={style.formControl}>
        <FormLabel className={style.label}>Email</FormLabel>
        <InputGroup size="md">
          <Input
            type="email"
            value={emailInput}
            onChange={handleEmailInputChange}
            className={style.input}
          />
        </InputGroup>
        {isEmailValid ? (
          <FormHelperText className={style.helperText}>
            Введите email адрес
          </FormHelperText>
        ) : (
          <FormErrorMessage className={style.errorMessage}>
            Проверьте email на валидность
          </FormErrorMessage>
        )}
        <FormLabel className={style.label}>Number</FormLabel>
        <InputGroup size="md">
          <Input
            type={"text"}
            placeholder="Enter number"
            value={numberInput}
            onChange={handleNumberInputChange}
            className={style.numberInput}
          />
        </InputGroup>
        {isNumberValid ? (
          <FormHelperText className={style.helperText}>
            Введите number в формате XX-XX-XX.
          </FormHelperText>
        ) : (
          <FormErrorMessage className={style.errorMessage}>
            номер оказался не валидным
          </FormErrorMessage>
        )}
      </FormControl>
      <Button colorScheme='teal' size='md' className={style.button} onClick={fetchUsers}>
        Получить пользователей
      </Button>
    </Container>
  );
}

export default SearchForm;
