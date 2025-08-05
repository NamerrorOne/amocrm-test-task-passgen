import type { IGeneratedPassword } from '../model/generatedPassword';

const simpleLatinAlpha: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const upperedSymbols: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const digitalSymbols: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specSymbols: string[] = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  ']',
  '{',
  '}',
  ';',
  ':',
  "'",
  '"',
  ',',
  '<',
  '.',
  '>',
  '/',
  '?',
  '\\',
  '|',
  '`',
  '~',
];

const getPassPower = (password: string): number => {
  let score = 0;

  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_\-+=[\]{};:'",.<>/?\\|`~]/.test(password);
  const hasUpper = /[A-Z]/.test(password);

  if (hasDigit) score += 12;
  if (hasSpecial) score += 12;
  if (hasUpper) score += 12;

  const { length } = password;
  const lengthBonus = length * 3;

  score += lengthBonus;

  if (score > 100) score = 100;

  return Math.round(score);
};

const generatePassword = ({
  passwordLength,
  isDigitalsEnabled,
  isSpecialSymbolsEnabled,
  isUppercaseEnabled,
}: {
  passwordLength: number;
  isDigitalsEnabled: boolean;
  isSpecialSymbolsEnabled: boolean;
  isUppercaseEnabled: boolean;
}): IGeneratedPassword => {
  if (passwordLength < 1) {
    return { generatedPassword: '', passwordStrength: 0 };
  }

  const availableChars: string[] = [...simpleLatinAlpha];
  const guaranteedChars: string[] = [];

  if (isDigitalsEnabled) {
    availableChars.push(...digitalSymbols);

    guaranteedChars.push(digitalSymbols[Math.floor(Math.random() * digitalSymbols.length)]);
  }

  if (isSpecialSymbolsEnabled) {
    availableChars.push(...specSymbols);

    guaranteedChars.push(specSymbols[Math.floor(Math.random() * specSymbols.length)]);
  }

  if (isUppercaseEnabled) {
    availableChars.push(...upperedSymbols);
    guaranteedChars.push(upperedSymbols[Math.floor(Math.random() * upperedSymbols.length)]);
  }

  const remainingLength = passwordLength - guaranteedChars.length;

  const passwordChars: string[] = [...guaranteedChars];

  for (let i = 0; i < remainingLength; i++) {
    const randIndex = Math.floor(Math.random() * availableChars.length);
    passwordChars.push(availableChars[randIndex]);
  }

  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  const generatedPassword = passwordChars.join('');
  const passwordStrength = getPassPower(generatedPassword);

  return { generatedPassword, passwordStrength };
};

export default generatePassword;
