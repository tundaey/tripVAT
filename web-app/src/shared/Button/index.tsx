import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

enum ButtonColors {
  primary = '#5850ec',
  transparent = '#fff',
}

interface ButtonWrapperProps {
  full?: boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  min-width: 100px;
  background-color: ${(props) => (props.color ? props.theme[props.color] : props.theme.white)};
  border-radius: 0.375rem;
  height: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? props.theme.white : props.theme.lightGreyText)};
  width: ${(props) => (props.full ? '100%' : ' 100px')};
  border: 1px solid ${(props) => props.theme.lightGreyBorder};
  &:hover {
    background-color: #6875f5;
    color: ${(props) => props.theme.white};
  }
  .svg-inline--fa.fa-w-16 {
    height: 1.25rem;
    width: 1.25rem;
  }
  &:hover {
    color: #9fa6b2;
  }
`;

const ButtonSpan = styled.span`
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: inline-flex;
  border-radius: 0.375rem;
`;

const ButtonIcon = styled.div`
  margin-right: 0.5rem;
`;

interface IButton {
  icon?: IconProp;
  title?: string;
  children?: ReactNode;
  color?: ButtonColors | 'primary';
  full?: boolean;
  type: 'button' | 'reset' | 'submit';
}

const Button = ({ icon, children, color, full, type }: IButton) => (
  <div>
    <ButtonSpan>
      <ButtonWrapper type={type} color={color} full={full}>
        {icon && (
          <ButtonIcon>
            <FontAwesomeIcon icon={icon} />
          </ButtonIcon>
        )}
        <div>{children}</div>
      </ButtonWrapper>
    </ButtonSpan>
  </div>
);

export default Button;
