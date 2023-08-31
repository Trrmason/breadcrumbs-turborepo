export enum MediaSizes {
  XSM = "xsm",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export const mediaQueries: Record<MediaSizes, string> = {
  [MediaSizes.XSM]: "420px",
  // => @media (min-width: 640px) { ... }

  [MediaSizes.SM]: "640px",
  // => @media (min-width: 640px) { ... }

  [MediaSizes.MD]: "768px",
  // => @media (min-width: 768px) { ... }

  [MediaSizes.LG]: "1024px",
  // => @media (min-width: 1024px) { ... }

  [MediaSizes.XL]: "1280px",
  // => @media (min-width: 1280px) { ... }
};
