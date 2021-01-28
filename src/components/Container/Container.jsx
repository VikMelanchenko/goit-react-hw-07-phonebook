import React from 'react';
import s from '../ContactsForms/ContactsForm.module.scss';

const Container = ({ children }) => (
  <div className={s.Container}>{children}</div>
);

export default Container;
