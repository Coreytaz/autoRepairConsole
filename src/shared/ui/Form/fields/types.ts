import { UseControllerProps } from 'react-hook-form';

import { InputProps } from '~shared/ui';

export type CommonFieldProps = Merge<
  UseControllerProps,
  {
    name: string;
    required?: boolean;
  }
>;

export type CommonArrayFieldProps = Merge<
  CommonFieldProps,
  {
    fieldArrayName: string;
    fieldIndex: number;
    field?: any;
  }
>;

export type CommonTextFieldProps = Merge<
  InputProps,
  CommonFieldProps & { onChange?: InputProps['onChange'] }
>;
