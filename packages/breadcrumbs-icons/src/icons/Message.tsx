import React from "react";
import { IconProps } from "../types";

const Icon = ({ ...props }: IconProps) => {
  return (
    <svg
      height="512"
      viewBox="0 0 14 14"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <clipPath id="clip0_901_8">
        <path d="m0 0h14v14h-14z"></path>
      </clipPath>
      <g clip-path="url(#clip0_901_8)">
        <path
          clip-rule="evenodd"
          d="m6.99797.0464489c1.04645-.0005945 2.07954.2350011 3.02223.6892281.9428.454243 1.7709 1.115433 2.4226 1.934263.6516.81883 1.1101 1.77419 1.3411 2.79486.2311 1.02068.2287 2.08034-.0067 3.09999-.2355 1.01966-.6981 1.97301-1.3534 2.78901-.6552.816-1.4862 1.4735-2.43091 1.9237-.94475.4501-1.9789.6812-3.02539.676-.99091-.0049-1.96867-.2215-2.86799-.6346l-3.465979.6267c-.177085.032-.357717-.0336-.47297-.1718-.1152525-.1382-.1473445-.3277-.0840302-.4961l.9942292-2.6452c-.610347-.99633-.960569-2.1317-1.0163086-3.30154-.05986287-1.25638.2221756-2.50547.8160766-3.61423.593902-1.10876 1.477422-2.03567 2.556462-2.682 1.07899-.646312 2.31309-.987862 3.57084-.9882811zm-3.22163 6.9520211.00046.00154-.00046.00155-.00042.0008-.00014.00018-.00018.00014-.0008.00042-.00155.00046-.00154-.00046-.0008-.00042-.00018-.00014-.00014-.00018-.00042-.0008-.00046-.00155.00046-.00154.00042-.0008.00014-.00018.00018-.00014.0008-.00042.00154-.00046.00155.00046.0008.00042.00018.00014.00014.00018zm-.00309-.99489c-.55031 0-.99642.44612-.99642.99643s.44611.99643.99642.99643c.55032 0 .99643-.44612.99643-.99643s-.44611-.99643-.99643-.99643zm3.23033.99643-.00046-.00154-.00042-.0008-.00014-.00018-.00018-.00014-.0008-.00042-.00154-.00046-.00155.00046-.0008.00042-.00018.00014-.00014.00018-.00042.0008-.00046.00154.00046.00155.00042.0008.00014.00018.00018.00014.0008.00042.00155.00046.00154-.00046.0008-.00042.00018-.00014.00014-.00018.00042-.0008zm-.99997 0c0-.55031.44611-.99643.99643-.99643.55031 0 .99642.44612.99642.99643s-.44611.99643-.99642.99643c-.55032 0-.99643-.44612-.99643-.99643zm4.22629-.00154.0005.00154-.0005.00155-.0004.0008-.0002.00018-.0001.00014-.0008.00042-.0016.00046-.0015-.00046-.0008-.00042-.0002-.00014-.0001-.00018-.0005-.0008-.0004-.00155.0004-.00154.0005-.0008.0001-.00018.0002-.00014.0008-.00042.0015-.00046.0016.00046.0008.00042.0001.00014.0002.00018zm-.0031-.99489c-.55029 0-.99641.44612-.99641.99643s.44612.99643.99641.99643c.5503 0 .9964-.44612.9964-.99643s-.4461-.99643-.9964-.99643z"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export default Icon;