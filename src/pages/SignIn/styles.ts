import { View, Text } from "react-native";

import styled from "styled-components/native";

export const StyledDiv = styled(View)`
  margin-top: 28px;
`;

export const Logo = styled.Image`
  margin: 16px 0px;
  width: 161.47px;
  height: 135.03px;
`;

export const Title = styled.Text`
  color: #303030;
  font-weight: bold;
  font-size: 38px;
`;

export const StyledLabel = styled.Text`
  color: #303030;
  font-weight: bold;
  font-size: 18px;
`;

export const StyledTextInputWrapper = styled.View`
  width: 100%;
  border-radius: 25px;
  border-bottom-width: 4px;
  border-color: #a466ff;
`;

export const StyledTextInput = styled.TextInput`
  margin-top: 8px;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  padding: 8px;
  border: 2px solid #303030;
  background-color: #fff;
`;

export const StyledDivAction = styled(View)`
  width: 300px;
  margin-top: 28px;
`;

export const StyledTextAction = styled(Text)`
  color: #303030;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
`;
