import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import style from './music-icon.module.scss'

const SvgIconMusic = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
  <svg
      className={style.musicIcon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
  >
      <g fillRule="evenodd">
          <circle
              className={style.musicIcon__circle}
              cx={24}
              cy={24}
              r={24}
          />
          <path
              className={style.musicIcon__keynote}
              fillRule="nonzero"
              d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
          />
      </g>
  </svg>
);

const ForwardRef = forwardRef(SvgIconMusic);
export default ForwardRef;

