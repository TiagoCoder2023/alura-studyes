import React, { ReactNode } from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

class Botao extends React.Component<BotaoProps> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} className={style.botao} type={type}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
