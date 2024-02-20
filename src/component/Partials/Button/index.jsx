import styled, { css } from "styled-components";
import { HyundaiSans } from "@/styles/types";

export const ButtonStyle = css`
  ${HyundaiSans};
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  ${ButtonStyle};
`;

export default ({ children = null, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
