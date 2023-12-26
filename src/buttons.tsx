/*****************************************************************************
 * Import
 *****************************************************************************/
import styled, { css } from "styled-components/native";
import {
  BoxStyleProps,
  boxStyles,
} from "./styled";
import { PressableProps } from "react-native";
import { Body } from "./text";

/*****************************************************************************
 * Styled
 *****************************************************************************/

/****************************************************************************/

type TouchyProps = BoxStyleProps & PressableProps

export const Touchy = styled.Pressable<TouchyProps>`
  ${boxStyles}
`;

/****************************************************************************/


const ButtonWrapper = styled(Touchy)`
  background: ${p => p.theme.colors.primary};
`;

const ButtonText = styled(Body)`
  color: ${p => p.theme.colors.onPrimary};
`;


export const Button = ({ title, ...rest }: { title: string } & TouchyProps) => {
  return (
    <ButtonWrapper
      p="16px"
      radius="4px"
      {...rest}
    >
      <ButtonText>
        {title}
      </ButtonText>
    </ButtonWrapper>
  );
}
