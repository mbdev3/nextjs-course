import React from 'react';
import { useRouter } from 'next/router';
const ClientProjects = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientProjectid]',
      query: { id: 'simo', clientProjectid: '1' },
    });
  };
  return (
    <div>
      <h1>ClientProjects</h1>
      <button onClick={() => loadProjectHandler()}>click here</button>
    </div>
  );
};

export default ClientProjects;
