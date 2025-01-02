import React from 'react';
import { Container } from '..';
import { Header } from './header';
import { Titles } from './titles/titles';
import { Comments } from './comments/comments';
import { Collection } from './collection/collection';
import { Review } from './review/review';
import { Favorites } from './favorites/favorites';
import { Friends } from './friends/friends';

interface Props {
    className?: string;
}

export const ProfilePage: React.FC<Props> = ({ className }) => {
  return (
    <Container>
        <Header />
        {/* <Titles /> */}
        {/* <Comments /> */}
        {/* <Collection /> */}
        {/* <Review /> */}
        {/* <Favorites /> */}
        <Friends />
    </Container>
  );
};