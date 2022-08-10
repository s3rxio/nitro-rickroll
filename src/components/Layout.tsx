import React, {FC, ReactNode} from "react";

interface ILayoutProps {
    children?: ReactNode;
}

const Layout: FC<ILayoutProps> = (props: ILayoutProps) => {
    return (
        <>
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;