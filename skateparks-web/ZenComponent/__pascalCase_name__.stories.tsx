import { Story } from "@storybook/react";
import React from "react";
import { withDesign, config } from "storybook-addon-designs";

import { IProps, {{pascalCase name}} } from "./{{pascalCase name}}";

export default {
    title: "Zen Ui/{{pascalCase name}}",
    component: {{pascalCase name}},
    decorators: [withDesign],
};

const Template: Story<IProps> = (args) => <{{pascalCase name}} {...args} />;

export const basic = Template.bind({});
basic.args = {
  
};
// basic.parameters = {
//     design: config({
//         type: "figma",
//         url: "", // <-- figma artboard link
//     }),
// };
