import React from 'react';

// import { Container } from './styles';

function ButtonLink(props) {
    //props{classname:"o que alguém passar, href: "/" "}
  return (
  <a className={props.className} href='props.href'>
  {props.children}
  
</a>);
}

export default ButtonLink;