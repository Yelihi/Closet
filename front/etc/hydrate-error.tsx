import React, { useState, useEffect } from 'react';

const hydrateError = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <div>hydrate 에러 대처</div>
    </>
  );
};

export default hydrateError;
