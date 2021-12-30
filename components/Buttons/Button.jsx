import React from 'react';
import Link from 'next/link';

function Button({ href, children }) {
  return (
    <>
      <Link href={href}>
        <a className="px-2 py-3 bg-gray-600 hover:bg-gray-300 text-center text-white hover:text-white border border-solid border-gray-900 hover:border-gray-600">
          {children}
        </a>
      </Link>
    </>
  );
}

export default Button;
