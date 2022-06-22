import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const QUERY = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (error) return <p>Error!</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>SongList</h2>
      {data.songs.map(({ title, id }) => (
        <li key={id}>
          <h4>{title}</h4>
        </li>
      ))}
    </div>
  );
};

export default SongList;
