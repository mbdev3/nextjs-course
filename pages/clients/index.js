import React from 'react';
import Link from 'next/link';
const ClientPage = () => {
  return (
    <div>
      <h1>ClientPage</h1>
      <ul>
        <li>
          <Link href='/clients/simo'>Simo</Link>
        </li>
        <li>
          {' '}
          <Link
            href={{
              pathname: '/clients/[id]',
              query: { id: 'arisa ' },
            }}>
            Arisa
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientPage;
