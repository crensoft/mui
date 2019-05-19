/// <reference types="react" />
export interface ImageProps {
    src: string;
    alt: string;
    responsive?: boolean;
}
export default function Image({ src, alt, responsive }: ImageProps): JSX.Element;
