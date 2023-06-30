import React, { ReactNode } from 'react';
import style from './Botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
  children?: ReactNode;
}



function Botao({ onClick, type, children }: Props) {
  return(
    <button onClick={onClick} className={style.botao} type={type}>
        {children}
      </button>
  )
} 
export default Botao;
