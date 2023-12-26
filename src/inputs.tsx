/*****************************************************************************
 * Import
 *****************************************************************************/
import styled, { useTheme } from "styled-components/native";
import { Box } from "./containers";
import { Platform, TextInput, TextInputProps } from "react-native";
import { BoxStyleProps } from "./styled";
import { Icon, Input as RNEInput } from 'react-native-elements'

/*****************************************************************************
 * Containers
 *****************************************************************************/

export const Input = styled(RNEInput).attrs(props => ({
  leftIcon: {
    ...(props.leftIcon as {}),
    color: props.theme.colors.onBackground,
  }
}))`
  color: ${p => p.theme.colors.onBackground};
`;

/* const InputField = styled.TextInput.attrs(props => ({
*   placeholderTextColor: props.theme.colors.surfaceDim,
* }))`
*   color: ${p => p.theme.colors.onBackground};
*   padding: 16px 8px;
*   width: 100%;
* `;
* 
* const LeftIconWrapper = styled(Box)``;
* const RightIconWrapper= styled(Box)``;
* 
* interface InputProps {
*   leftIcon?: { name: string, type?: string };
*   rightIcon?: { name: string, type?: string };
*   placeholder?: string;
*   onChangeText?: TextInputProps["onChangeText"];
* }
* 
* export const Input = ({ leftIcon, rightIcon, placeholder, onChangeText, ...rest }: InputProps & BoxStyleProps) => {
*   const theme = useTheme();
* 
*   console.log(theme);
*   
*   return (
*     <Box row fullX align="center" gap="8px" {...rest}>
*       {leftIcon && (
*         <LeftIconWrapper>
*           <Icon
*             color={theme.colors.onSurfaceVariant}
*             name={leftIcon.name}
*             type={leftIcon.type}
*           />
*         </LeftIconWrapper>
*       )}
*       <InputField
*         placeholder={placeholder}
*         onChangeText={onChangeText}
*       />
*       {rightIcon && (
*         <RightIconWrapper>
*           <Icon
*             color={theme.colors.onSurfaceVariant}
*             name={rightIcon.name}
*             type={rightIcon.type}
*           />
*         </RightIconWrapper>
*       )}
*     </Box>
*   );
* } */
