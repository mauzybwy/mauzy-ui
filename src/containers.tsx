/*****************************************************************************
 * Import
 *****************************************************************************/
import styled, { css } from "styled-components/native";
import {
  BoxStyleProps,
  boxStyles,
} from "./styled";

/*****************************************************************************
 * Styled
 *****************************************************************************/

export const Box = styled.View<BoxStyleProps>`
  ${boxStyles}
`;

export const Circle = ({ radius, ...rest }: { radius: React.CSSProperties["width"] } & BoxStyleProps) => {
  return (
    <Box w={radius} h={radius} radius="50%" {...rest} />
  );
}

export const Stack = styled(Box)`
  flex-direction: column;
`

export const Row = styled(Box)`
  flex-direction: row;
`

export const Card = ({ children, ...rest }: { children?: React.ReactElement | never[] } & BoxStyleProps) => (
  <Box {...rest}>
    {children}
  </Box>
);

/****************************************************************************/

/* export const ScrollBox = styled.ScrollView`
*   ${basicStyles}
*   ${sizeStyles}
*   ${paddingStyles}
*   ${marginStyles}
* `;
*  */
/****************************************************************************/
