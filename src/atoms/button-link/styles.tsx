import styled, { css } from 'styled-components';
import { device } from '../../ions/breakpoints';
import { ButtonColor, ButtonVariant } from '../button/types';
import { colors } from '../../ions/variables';
import { rem, lighten, darken } from 'polished';
import { pulseKeyframes } from '../button/styles';

interface ButtonStyleProps {
  variant?: ButtonVariant;
  circle?: boolean;
  color?: ButtonColor;
  value?: String;
}

const { normal, light, info, primary, danger, purple } = colors;

export const ButtonLinkStyle = styled.a<ButtonStyleProps>`
  --button: ${primary};
  --txt: ${light};
  --hover: ${darken(0.15, primary)};

  ${props =>
    props.color === 'primary' &&
    css`
      --button: ${primary};
      --hover: ${darken(0.19, primary)};
    `}

  ${props =>
    props.color === 'danger' &&
    css`
      --button: ${danger};
      --hover: ${darken(0.19, danger)};
    `}

  ${props =>
    props.color === 'info' &&
    css`
      --button: ${info};
      --hover: ${darken(0.1, info)};
    `}

  ${props =>
    props.color === 'purple' &&
    css`
      --button: ${purple};
      --hover: ${darken(0.15, purple)};
    `}

  ${props =>
    props.color === 'white' &&
    css`
      --button: ${light};
      --txt: ${normal};
      --hover: ${lighten(0.4, info)};
    `}

  ${props =>
    props.color === 'black' &&
    css`
      --button: ${normal};
      --hover: ${darken(1, normal)};
    `}

  ${props =>
    props.color === 'pulse' &&
    css`
      --button: ${danger};
      --hover: ${darken(0.19, danger)};
      animation: ${pulseKeyframes} 1s infinite;
    `}

  ${props =>
    props.color === 'magic' &&
    css`
      --button: ${light};
      --hover: ${lighten(0.4, info)};
    `}

  border-width: ${props => (props.variant === 'outline' ? '3px' : 0)};
  border-style: solid;
  border-color: var(--button);
  border-radius: ${props => (props.variant === 'text' ? 0 : '999px')};
  background-color: ${props =>
    props.variant === 'solid' ? 'var(--button)' : 'transparent'};
  width: min-content;
  min-width: ${props => (props.value ? rem('80px') : rem('36px'))};
  height: ${rem('36px')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.value ? `0 ${rem('20px')}` : 0)};
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  transition-duration: 0.3s;
  cursor: pointer;

  @media ${device.l} {
    min-width: ${props => (props.value ? rem('100px') : rem('36px'))};
  }

  &:hover {
    border-color: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    background-color: ${props =>
      props.variant === 'solid' ? 'var(--hover)' : 'transparent'};

    span {
      color: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    }

    svg {
      fill: ${props => (props.variant === 'solid' ? '' : 'var(--hover)')};
    }
  }

  > *:not(:last-child) {
    margin-right: 5px;
  }

  span {
    position: relative;
    font-size: 0.75rem;
    font-weight: var(--bold, 700);
    color: ${props =>
      props.variant === 'solid' ? 'var(--txt)' : 'var(--button)'};
    pointer-events: none;
    transition-duration: 0.3s;
  }

  svg {
    width: auto;
    min-width: ${rem('20px')};
    height: ${rem('20px')};
    fill: ${props =>
      props.variant === 'solid' ? 'var(--txt)' : 'var(--button)'};
    transition: 0.3s;
  }

  ${props =>
    props.color === 'magic' &&
    css`
      position: relative;
      background-image: linear-gradient(to bottom right, #ef5867, #5031a8);
      height: ${rem('60px')};
      padding: 0 ${rem('40px')};
      overflow: hidden;

      span {
        font-size: 1rem;
        font-weight: var(--black, 700);
      }

      &:before {
        --size: 0;

        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, #5031a8, transparent);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: width 0.2s ease, height 0.2s ease;
        transition: width 0.2s ease, height 0.2s ease;
      }

      &:hover:before {
        --size: 200px;
      }
    `}
`;
