import styles from './Checkbox.module.css';

const Checkbox = ({ text, ...fromRegister }: { text: string }) => (
  <label className={styles.checkboxContainer}>
    <input className={styles.checkboxElement} type='checkbox' {...fromRegister} />
    <span className={styles.checkboxLabel}>{text}</span>
  </label>
);

export default Checkbox;
