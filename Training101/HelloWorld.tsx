import * as React from 'react';

import { Label,IChoiceGroupOption, ChoiceGroup, mergeStyles, Stack, StackItem } from '@fluentui/react';
export interface IHelloWorldProps {
  name?: string;
  options: IChoiceGroupOption[];
  selectedKey: string | number;
  onChange: (ev?: React.FormEvent<HTMLElement>, option?: IChoiceGroupOption) => void;

}


// This function will be triggered when a radio button is selecte

export class HelloWorld extends React.Component<IHelloWorldProps> {
  
  private containerStyles = mergeStyles({
    width: '100%',
    margin: '10px 0',
    selectors: {
      '& .ms-ChoiceField': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '5px 0',
      },
    },
  });
  public render(): React.ReactNode {
  
    return (
      <>
      <Stack>
        <StackItem>
      <Label>
        {this.props.name}
      </Label>
      </StackItem>
      <StackItem>
      <ChoiceGroup
          options={this.props.options}
          onChange={this.props.onChange}
          selectedKey={this.props.selectedKey}
         
         style={{flexDirection:"row",boxShadow:"10px 10px 5px 5px #00000",
        }}
        />
        </StackItem>
        </Stack>
      </>
      
    )
  }
}
