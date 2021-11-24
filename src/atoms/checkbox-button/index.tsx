import React, { useState, CSSProperties } from 'react';
import * as Styles from './styles';

export interface CheckboxButtonProps {
  label?: string | React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  required?: boolean;
}

const CheckboxButton = (props: CheckboxButtonProps) => {
  const {
    label,
    value,
    checked = false,
    onChange = () => {},
    disabled = false,
    className = 'checkbox-button',
    style,
    dataTestId,
    required = false,
  } = props;

  const [buttonChecked, setButtonChecked] = useState(checked);

  return (
    <Styles.CheckboxWrapper
      style={style}
      className={className}
      disabled={disabled}
      checked={buttonChecked}
    >
      <Styles.CheckboxLabel>{label}</Styles.CheckboxLabel>
      <Styles.CheckboxInput
        type="checkbox"
        name={value}
        checked={buttonChecked}
        onChange={onChange}
        disabled={disabled}
        data-testid={dataTestId}
        required={required}
        onClick={() => {
          setButtonChecked(!buttonChecked);
        }}
      />
      <Styles.Checkmark disabled={disabled} />
    </Styles.CheckboxWrapper>
  );
};

export default CheckboxButton;
