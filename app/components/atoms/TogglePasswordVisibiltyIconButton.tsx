import React from 'react'
import PasswordHiddenIcon from '../../svg/PasswordHiddenIcon'
import PasswordIcon from '../../svg/PasswordIcon'

interface TogglePasswordVisibiltyIconButtonProps {
  passwordHidden: boolean;
  onClick: () => void;
}

function TogglePasswordVisibiltyIconButton({ passwordHidden, onClick }: TogglePasswordVisibiltyIconButtonProps) {
  return (
    <span className="cursor-pointer flex items-center justify-end align-middle w-8 p-2 "
      onClick={onClick}
    >
      {passwordHidden ?
        <PasswordHiddenIcon />
        :
        <PasswordIcon />
      }
    </span>
  )
}

export default TogglePasswordVisibiltyIconButton