/*****************************************************************************
 * Import
 *****************************************************************************/
import styled from "styled-components/native";

/*****************************************************************************
 * Containers
 *****************************************************************************/

const Type = styled.Text<{bold?: boolean}>`
  color: ${p => p.theme.colors.onBackground};
  fontWeight: ${p => p.bold ? 700 : 400};
`

export const Body = styled(Type)`
  font-size: 14px;
`;

export const H1 = styled(Type)`
  font-size: 28px;
`;

export const H2 = styled(Type)`
  font-size: 24px;
`;

export const H3 = styled(Type)`
  font-size: 22px;
`;

export const H4 = styled(Type)`
  font-size: 20px;
`;

export const H5 = styled(Type)`
  font-size: 18px;
`;
