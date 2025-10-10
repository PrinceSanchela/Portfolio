declare module "react-typed" {
  import React from "react";

  export interface ReactTypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
  }

  export class ReactTyped extends React.Component<ReactTypedProps> {}
}
