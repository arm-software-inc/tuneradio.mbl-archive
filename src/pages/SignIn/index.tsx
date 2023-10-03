import { Text } from "react-native";

import {
  Logo,
  ContainerView,
  StyledTextInput,
  StyledLabel,
  StyledDiv,
  StyledButton,
  StyledButtonText,
  StyledCheckbox,
  StyledCheckboxDiv,
  StyledCheckboxText,
  StyledButtonGoogle,
  StyledTextGoogle,
  StyledTextAppleId,
  StyledButtonAppleId,
  Divisor,
  StyledTextAction,
  StyledDivAction,
} from "./styles";

import { useForm, Controller } from "react-hook-form";

export function SignIn({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
    navigation.navigate("SignUp");
  }

  return (
    <ContainerView>
      <Logo source={require("../../assets/icons/Icon.png")} />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledDiv>
            <StyledLabel>Email</StyledLabel>
            <StyledTextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="johndoe@mail.com"
            />
          </StyledDiv>
        )}
        name="email"
        rules={{ required: "E-mail is required." }}
      />
      {errors.email && <Text>Invalid e-mail.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledDiv>
            <StyledLabel>Password</StyledLabel>
            <StyledTextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          </StyledDiv>
        )}
        name="password"
        rules={{ required: "Password is required." }}
      />
      {errors.password && <Text>Invalid password.</Text>}

      <StyledCheckboxDiv>
        <StyledCheckbox />
        <StyledCheckboxText>Remember me</StyledCheckboxText>
      </StyledCheckboxDiv>

      <StyledButton onPress={handleSubmit(onSubmit)} title="Sign In">
        <StyledButtonText>Sign In</StyledButtonText>
      </StyledButton>

      <StyledButtonGoogle onPress={handleSubmit(onSubmit)} title="Sign In">
        <StyledTextGoogle>Sign In with Google</StyledTextGoogle>
      </StyledButtonGoogle>

      <StyledButtonAppleId onPress={handleSubmit(onSubmit)} title="Sign In">
        <StyledTextAppleId>Sign with Apple Id</StyledTextAppleId>
      </StyledButtonAppleId>

      <Divisor />

      <StyledDivAction>
        <StyledTextAction>Don't have an account? Sign Up</StyledTextAction>
      </StyledDivAction>

      <StyledDivAction>
        <StyledTextAction>Forgotten your password?</StyledTextAction>
      </StyledDivAction>
    </ContainerView>
  );
}
