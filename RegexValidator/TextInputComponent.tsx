import * as React from 'react';
import { ITextFieldStyleProps, ITextFieldStyles, TextField } from '@fluentui/react';

export interface ITextInputComponentProps {
  defaultValue?: string;
  onInputTextChanged: ((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => void) | undefined
}

export const textFieldStyle = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => ({
  ...(props.disabled ? {
    fieldGroup: {
      border: "none"
    },
    field: {
      fontWeight: 600,
      color: "rgb(51, 51, 51)",
      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: "rgb(226, 226, 226)"
      }
    }
  } : props.focused ? {
    fieldGroup: {
      border: "none",
      ":after": {
        border: "none"
      }
    },
    field: {
      border: "1px solid rgb(102, 102, 102)"
    }
  } : {
    fieldGroup: {
      borderColor: "transparent",
      ":after": {
        border: "none"
      },
      ":hover": {
        borderColor: "rgb(102, 102, 102)",
      }
    },
    field: {
      fontWeight: 600,
      ":hover": {
        fontWeight: 400
      }
    }
  })
});

export class TextInputComponent extends React.Component<ITextInputComponentProps> {
  public render(): React.ReactNode {
    return (
      <TextField
        styles={textFieldStyle} placeholder='---'
        defaultValue={this.props.defaultValue}
        onChange={this.props.onInputTextChanged}
      />
    )
  }
}
