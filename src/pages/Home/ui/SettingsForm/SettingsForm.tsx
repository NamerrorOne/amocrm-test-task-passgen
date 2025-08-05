import { useForm } from 'react-hook-form';

import styles from './SettingsForm.module.css';
import generatePassword from '../../lib/generatePassword';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import RangeInput from '../RangeInput/RangeInput';

import type { SubmitHandler } from 'react-hook-form';

import type { IFormModel } from '../../model/formModel';
import type { IGeneratedPassword } from '../../model/generatedPassword';

const SettingsForm = ({ setGeneratedPassword }: { setGeneratedPassword: (data: IGeneratedPassword) => void }) => {
  const { register, handleSubmit, watch } = useForm<IFormModel>({
    defaultValues: {
      passwordLength: 6,
      isDigitalsEnabled: false,
      isSpecialSymbolsEnabled: false,
      isUppercaseEnabled: false,
    },
  });

  const rangeInputValue = watch('passwordLength');

  const onSubmit: SubmitHandler<IFormModel> = (data: IFormModel) => setGeneratedPassword(generatePassword(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.settingsForm}>
      <Checkbox text='Использовать цифры' {...register('isDigitalsEnabled')} />
      <Checkbox text='Использовать спецсимволы' {...register('isSpecialSymbolsEnabled')} />
      <Checkbox text='Использовать заглавные буквы' {...register('isUppercaseEnabled')} />
      <RangeInput value={rangeInputValue} {...register('passwordLength')} />
      <Button text='Сгенерировать' />
    </form>
  );
};

export default SettingsForm;
