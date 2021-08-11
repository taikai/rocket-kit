import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
import { colors } from '../../ions/variables';

interface WrapperProps {
  type?: 'row' | 'column';
  group: string;
  error?: string;
  disabled?: boolean;
}

interface ItemProps {
  error?: string;
  disabled?: boolean;
}

const { light, primary, info, purple, danger } = colors;

export const Wrapper = styled.ul<WrapperProps>`
  display: flex;
  flex-direction: ${props => (props.type === 'column' ? 'column' : 'row')};
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    &:not(:last-child) {
      ${props =>
        props.type === 'row' &&
        css`
          margin-right: ${rem('30px')};
        `}

      ${props =>
        props.type === 'column' &&
        css`
          margin-bottom: ${rem('10px')};
        `}
    }
  }

  input[type='radio']:checked ~ .check {
    border-color: ${darken(0.15, primary)};
  }

  input[type='radio']:checked ~ .check::before {
    background-color: ${primary};
  }

  & + span {
    margin-top: ${rem('10px')};
  }
`;

export const Item = styled.li<ItemProps>`
  --size: 24px;
  position: relative;
  height: var(--size);

  input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }

  label {
    position: relative;
    padding-left: calc(var(--size) + 5px);
    line-height: var(--size);
    vertical-align: middle;
    color: ${props => (props.error ? danger : null)};
    cursor: pointer;
    z-index: 1;
  }

  .check {
    position: absolute;
    top: 0;
    border: 2px solid ${props => (props.error ? danger : info)};
    border-radius: 100%;
    width: var(--size);
    height: var(--size);
    transition-duration: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      display: block;
      border-radius: 100%;
      height: calc(var(--size) / 1.5);
      width: calc(var(--size) / 1.5);
    }
  }

  &:hover .check {
    border-color: ${purple};
  }

  ${props =>
    props.disabled &&
    css`
      label {
        color: ${info};
      }

      input[type='radio']:checked ~ .check {
        border-color: ${primary};
      }

      input[type='radio']:checked ~ .check::before {
        background-color: ${light};
      }

      &:hover {
        pointer-events: none;
        cursor: auto;
      }
    `}
`;
