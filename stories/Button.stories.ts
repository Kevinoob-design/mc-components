import type { Meta, StoryObj } from '@storybook/html';
import { PrimaryButtonModule } from '../app/components/buttons/primary-button/primary-button.module';

import type { ButtonProps } from './Button';
import { createButton } from './Button';
import { withAngularJs } from '../plugins/storybook.angular.decorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  decorators: [withAngularJs()],
  parameters: {
    angularJs: {
      module: PrimaryButtonModule
    }
  },
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton(args);
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: () => alert('hi?') },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button Primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button Secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button Large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button Small',
  },
};