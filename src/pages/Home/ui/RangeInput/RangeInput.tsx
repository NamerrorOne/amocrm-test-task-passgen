import styles from './RangeInput.module.css';

const RangeInput = ({ value, ...fromRegister }: { value: number }) => (
  <label className={styles.rangeContainer}>
    <div>
      <span>Количество символов: </span>
      <span className={styles.rangeValue}>{value}</span>
    </div>
    <input className={styles.rangeInput} {...fromRegister} type='range' min='6' max='20' />
  </label>
);

export default RangeInput;
