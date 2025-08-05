import { useEffect, useState } from 'react';

import styles from './HomePage.module.css';
import IconButton from './IconButton/IconButton';
import Input from './Input/Input';
import SettingsForm from './SettingsForm/SettingsForm';
import StrengthBar from './StrengthBar/StrengthBar';
import useCopyToClipboard from '../lib/useCopyToClipboard';

import type { IGeneratedPassword } from '../model/generatedPassword';

const HomePage = () => {
  const [{ generatedPassword, passwordStrength }, setGeneratedPassword] = useState<IGeneratedPassword>({
    generatedPassword: '',
    passwordStrength: 0,
  });

  const { isCopied, handleCopyToClipboard, resetIsCopied } = useCopyToClipboard();

  useEffect(() => {
    resetIsCopied();
  }, [generatedPassword]);

  return (
    <main className={styles.homePage}>
      <h1 className={styles.homePageTitle}>amoCRM Password Generator</h1>
      <p className={styles.homePageDescription}>Simple password generator for completing a test task</p>

      <SettingsForm setGeneratedPassword={setGeneratedPassword} />

      <Input
        value={generatedPassword}
        endAdornment={
          <IconButton
            isDisabled={!generatedPassword}
            iconPath={isCopied ? '/check-black.svg' : '/copy.svg'}
            onClick={async () => handleCopyToClipboard(generatedPassword)}
          />
        }
      />
      {generatedPassword ? <StrengthBar passwordStrength={passwordStrength} /> : null}
    </main>
  );
};
export default HomePage;
