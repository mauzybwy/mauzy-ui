/*****************************************************************************
 * Import
 *****************************************************************************/
import styled, { css } from "styled-components/native";
import {
  BoxStyleProps,
  boxStyles,
  ScrollBoxStyleProps,
  scrollBoxStyles,
} from "./styled";
import { PressableProps } from "react-native";

/*****************************************************************************
 * Styled
 *****************************************************************************/

export const Box = styled.View<BoxStyleProps>`
  ${boxStyles}
`;

export const ScrollBox = styled.ScrollView<ScrollBoxStyleProps>`
  ${scrollBoxStyles}
`;

export const Circle = ({
  radius,
  ...rest
}: {
  children?: React.ReactNode | never[];
  radius: React.CSSProperties["width"];
} & BoxStyleProps) => {
  return <Box w={radius} h={radius} radius={radius} {...rest} />;
};

export const Stack = styled(Box)`
  flex-direction: column;
`;

export const Row = styled(Box)`
  flex-direction: row;
`;

export const Card = ({
  children,
  ...rest
}: { children?: React.ReactElement | never[] } & BoxStyleProps) => (
  <Box {...rest}>{children}</Box>
);

type TouchyProps = BoxStyleProps & PressableProps;

export const Touchy = styled.TouchableOpacity<TouchyProps>`
  ${boxStyles}
`;

/****************************************************************************/

/* export const ScrollBox = styled.ScrollView`
 *   ${basicStyles}
 *   ${sizeStyles}
 *   ${paddingStyles}
 *   ${marginStyles}
 * `;
 *  */
/****************************************************************************/
