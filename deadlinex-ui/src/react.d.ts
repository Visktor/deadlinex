import { ForwardedRef } from "react";

declare module "react" {
    function forwardRef<T, P = unknown>(
        render: (props: P, ref: ForwardedRef<T>) => ReactElement | null,
    ): (props: P & RefAttributes<T>) => ReactElement | null;
    function memo<A, B>(Component: (props: A) => B): (props: A) => B;
}
