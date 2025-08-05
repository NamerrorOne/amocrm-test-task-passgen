import clsx from 'clsx';

import styles from './IconButton.module.css';

const IconButton = ({
  iconPath,
  isDisabled,
  onClick,
}: {
  iconPath: string;
  isDisabled?: boolean;
  onClick: () => void;
}) => {
  const getFileName = (path: string) => {
    const lastFileNamePartAfterSlash = path.split('/').filter(Boolean).pop() ?? '';
    const removedFileExtentionName = lastFileNamePartAfterSlash.split('.').slice(0, -1).join('.');
    return removedFileExtentionName;
  };

  return (
    <button disabled={isDisabled} onClick={onClick} className={clsx(styles.iconButton, isDisabled && styles.disabled)}>
      <img src={iconPath} alt={getFileName(iconPath)} />
    </button>
  );
};

export default IconButton;
