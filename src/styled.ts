/*****************************************************************************
 * Import
 *****************************************************************************/
import { MuiColors } from "./style/mui";
import { css } from "styled-components/native";

/*****************************************************************************
 * Types
 *****************************************************************************/

export interface BasicProps {
  gap: React.CSSProperties["gap"];
  flex: React.CSSProperties["flex"];
  pos: React.CSSProperties["position"];
  border: React.CSSProperties["border"];
  radius: React.CSSProperties["borderRadius"];
  color: keyof MuiColors,
  left: React.CSSProperties["left"];
  right: React.CSSProperties["right"];
  top: React.CSSProperties["top"];
  bottom: React.CSSProperties["bottom"];
}

export interface AlignmentProps {
  center: boolean;
  justify: React.CSSProperties["justifyContent"];
  align: React.CSSProperties["alignItems"];
  col: boolean;
  row: boolean;
}

export interface SizeProps {
  w: React.CSSProperties["width"];
  h: React.CSSProperties["height"];
  minW: React.CSSProperties["width"];
  minH: React.CSSProperties["height"];
  full: boolean;
  fullX: boolean;
  fullY: boolean;
}

export interface PaddingProps {  
  p: React.CSSProperties["padding"];
  px: React.CSSProperties["paddingLeft"];
  py: React.CSSProperties["paddingTop"];
  pt: React.CSSProperties["paddingTop"];
  pb: React.CSSProperties["paddingBottom"];
  pl: React.CSSProperties["paddingLeft"];
  pr: React.CSSProperties["paddingRight"];
};

export interface MarginProps {
  m: React.CSSProperties["margin"];
  mx: React.CSSProperties["marginLeft"];
  my: React.CSSProperties["marginTop"];
  mt: React.CSSProperties["marginTop"];
  mb: React.CSSProperties["marginBottom"];
  ml: React.CSSProperties["marginLeft"];
  mr: React.CSSProperties["marginRight"];
}

/*****************************************************************************
 * CSS
 *****************************************************************************/

export const basicStyles = css<Partial<BasicProps>>`
  display: flex;
  gap: ${p => p.gap || 0};
  flex: ${p => p.flex || "0 1 auto"};
  position: ${p => p.pos || "initial"};
  border: ${p => p.border || "0"};
  border-radius: ${p => p.radius || 0};
  background: ${p => p.color ? p.theme.colors[p.color] || p.color : "transparent"};
  top: ${p => p.top || "auto"};
  right: ${p => p.right || "auto"};
  bottom: ${p => p.bottom || "auto"};
  left: ${p => p.left || "auto"};
`

export const alignmentStyles = css<Partial<AlignmentProps>>`
  flex-direction: ${p => p.row ? "row" : "column"};
  justify-content: ${p => p.center ? "center" : p.justify || "flex-start"};
  align-items: ${p => p.center ? "center" : p.align || "stretch"};
`

export const sizeStyles = css<Partial<SizeProps>>`
  width: ${p => (p.full || p.fullX) ? "100%" : p.w || "initial"};
  height: ${p => (p.full || p.fullY) ? "100%" : p.h || "initial"};
  min-width: ${p => (p.full || p.fullX) ? "100%" : p.minW || "initial"};
  min-height: ${p => (p.full || p.fullY) ? "100%" : p.minH || "initial"};
`

export const paddingStyles = css<Partial<PaddingProps>>`
  padding-top: ${p => p.py || p.pt || 0};
  padding-bottom: ${p => p.py || p.pb || 0};
  padding-left: ${p => p.px || p.pl || 0};
  padding-right: ${p => p.px || p.pr || 0};
  padding: ${p => p.p || 0};
`

export const marginStyles = css<Partial<MarginProps>>`
  margin-top: ${p => p.my || p.mt || 0};
  margin-bottom: ${p => p.my || p.mb || 0};
  margin-left: ${p => p.mx || p.ml || 0};
  margin-right: ${p => p.mx || p.mr || 0};
  margin: ${p => p.m || 0};
`

/*****************************************************************************
 * Commonly Shared
 *****************************************************************************/

export type BoxStyleProps =
  Partial<
    BasicProps
    & AlignmentProps
    & SizeProps
    & PaddingProps
    & MarginProps
  >;

export const boxStyles = css<BoxStyleProps>`
  ${basicStyles}
  ${alignmentStyles}
  ${sizeStyles}
  ${paddingStyles}
  ${marginStyles}
`

