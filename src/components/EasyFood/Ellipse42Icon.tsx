import { memo, SVGProps } from 'react';

const Ellipse42Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 395 389' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={197.196} cy={194.262} rx={197} ry={194} fill='#4CC421' />
    <ellipse cx={197.196} cy={194.262} rx={197} ry={194} fill='url(#paint0_linear_16_41)' />
    <defs>
      <linearGradient
        id='paint0_linear_16_41'
        x1={-247.255}
        y1={-82.0695}
        x2={398.977}
        y2={434.811}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EAEF08' />
        <stop offset={1} stopColor='#EAEF08' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Ellipse42Icon);
export { Memo as Ellipse42Icon };
