import styles from './Input.module.css';

import type { ReactNode } from 'react';

const Input = ({ value, endAdornment }: { value: string; endAdornment?: ReactNode }) => (
  <label className={styles.inputWrapper}>
    <input readOnly value={value} className={styles.input} />
    {endAdornment ?? null}
  </label>
);

export default Input;
