import React from 'react';
import { Container } from '..';
import { Header } from './header';
import { Titles } from './titles/titles';

interface Props {
    className?: string;
}

export const ProfilePage: React.FC<Props> = ({ className }) => {
  return (
    <Container>
        <Header />
        <Titles />
    </Container>
  );
};