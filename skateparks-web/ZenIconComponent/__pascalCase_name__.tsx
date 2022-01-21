import React from "react";

import { ZenIcon } from "@zenlist/zenComponents";

interface IProps {
    className?: string;
}

export const {{pascalCase name}}: React.FC<IProps> = ({ className }) => (
    <ZenIcon
        className={className}
        defaultClassName="{{pascalCase name}}"
        viewBox="0 0 24 24"
        paths={}
    />
);

export default {{pascalCase name}};
