import React from 'react';

function Container({ children }) {
  return (
    <>
      <section className="flex max-w-7xl place-content-center flex-row m-auto py-16">
        {children}
      </section>
    </>
  );
}

export default Container;
