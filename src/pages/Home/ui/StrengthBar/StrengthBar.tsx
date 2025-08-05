import clsx from 'clsx';

import styles from './StrengthBar.module.css';

import type { StrengthLevel } from '../../model/strengthLevel';

const StrengthBar = ({ passwordStrength }: { passwordStrength: number }) => {
  const strengthLevel: StrengthLevel = passwordStrength < 33 ? 'low' : passwordStrength < 67 ? 'medium' : 'high';

  const strengthLabels: Record<StrengthLevel, string> = {
    low: 'плохая',
    medium: 'средняя',
    high: 'хорошая',
  };

  return (
    <div className={styles.strengthBarСontainer}>
      <div>
        <span>Надежность: </span>
        <span className={styles.strengthValue}>{strengthLabels[strengthLevel]}</span>
      </div>
      <div className={styles.strengthBar}>
        <div className={clsx(styles.strengthBarInner, styles[strengthLevel])} />
      </div>
    </div>
  );
};

export default StrengthBar;
