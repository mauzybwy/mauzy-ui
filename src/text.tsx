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
  font-size: 1rem;
`;

export const H1 = styled(Type)`
  font-size: 2rem;
`;

export const H2 = styled(Type)`
  font-size: 1.8rem;
`;

export const H3 = styled(Type)`
  font-size: 1.6rem;
`;

export const H4 = styled(Type)`
  font-size: 1.4rem;
`;

export const H5 = styled(Type)`
  font-size: 1.2rem;
`;
