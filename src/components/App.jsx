import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import friends from '../friends.json';
import transactions from '../transactions.json';

const user = {
  username: 'Anton Bratchikov',
  tag: 'abratchikov',
  location: 'Kremenchuk, Ukraine',
  avatar: 'https://scontent.fiev15-1.fna.fbcdn.net/v/t39.30808-6/272455704_1290749008087248_4396926241661409535_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QBLuPtC2EgkAX9Gwtnl&_nc_oc=AQkVnVuK-2n6dDKaHeEw78fHvzc57l1oe1a5036sP7YizYQpzowngxfHLoOjy8XtYQg&_nc_ht=scontent.fiev15-1.fna&oh=00_AfDIPBty3gC2WSg_I_Jbf92QIB63A6W0t12XTOTJSQa4Vw&oe=655FB915',
  stats: {
    followers: 37,
    views: 126,
    likes: 15,
  },
};

const statsData = [
  { label: '.docx', percentage: '4%' },
  { label: '.mp3', percentage: '14%' },
  { label: '.pdf', percentage: '41%' },
  { label: '.mp4', percentage: '12%' },
];

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statsData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

