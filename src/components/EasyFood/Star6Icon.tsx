import { memo, SVGProps } from 'react';

const Star6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 0L17.1432 9.32827H27.3148L19.0858 15.0935L22.229 24.4217L14 18.6565L5.77101 24.4217L8.9142 15.0935L0.685208 9.32827H10.8568L14 0Z'
      fill='#F2F710'
    />
  </svg>
);
const Memo = memo(Star6Icon);
export { Memo as Star6Icon };
