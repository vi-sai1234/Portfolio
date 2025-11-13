
import React from 'react';

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M1.946 9.315c.522-.174 1.103-.546 1.103-1.175a2.946 2.946 0 00-2.079-2.843c-.411-.143-.873-.24-1.332-.24-.46 0-.921.097-1.332.24A2.946 2.946 0 00.054 8.14c0 .63.581 1 1.103 1.175L20.054 19.5" transform="translate(2 2.5)"/>
    <path d="M22 4H2C1.4 4 1 4.4 1 5v14c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM20 6l-8 5-8-5h16zM2 18V7l8 5 8-5v11H2z"/>
  </svg>
);

export default EmailIcon;
