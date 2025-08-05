import styles from './Button.module.css';

const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default Button;
