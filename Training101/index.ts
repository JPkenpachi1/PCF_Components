import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld, IHelloWorldProps } from "./HelloWorld";
import * as React from "react";
import { IChoiceGroupOption } from "@fluentui/react";
import { fluentRadioGroup,fluentRadio } from "@fluentui/web-components";


export class Training101 implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private _options: any[]=[];
    private _selectedKey:string | number;


    /**
     * Empty constructor.
     */
    constructor() { }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        // const choices= context.parameters.sampleProperty.attributes?.Options;
        // if (choices) {
        //     this._options = choices.map(option => {
        //         return {
        //             key: option.Value,
        //             text: option.Label
        //         };
        //     });
        // }
        // this code is for checking prep poublation of the data 
        // this._selectedKey = context.parameters.sampleProperty.raw
        // ?Number( context.parameters.sampleProperty.raw.toString())
        // : "";
    //   this._selectedKey= context.parameters.sampleProperty.raw ? context.parameters.sampleProperty.raw.toString() : ''
    if (context.parameters.sampleProperty !== undefined) {
        const choices = context.parameters.sampleProperty.attributes?.Options;
        if (choices) {
            this._options = choices.map(option => {
                return {
                    key: option.Value,
                    text: option.Label
                };
            });
        }

        // Set the selected key based on the raw value of the sampleProperty parameter
        this._selectedKey = context.parameters.sampleProperty.raw
            ? Number(context.parameters.sampleProperty.raw.toString())
            : 0;
    }

    
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const choices= context.parameters.sampleProperty.attributes?.Options;
        if (choices) {
            this._options = choices.map(option => {
                return {
                    key: option.Value,
                    text: option.Label
                };
            });
        }
    
        const props: IHelloWorldProps = { 
            name: context.parameters.sampleProperty.attributes?.DisplayName,
            options: this._options,
            selectedKey: this._selectedKey
            ,
            onChange: (ev?: React.FormEvent<HTMLElement>, option?: IChoiceGroupOption) => {
                if (option) {
                    this._selectedKey=option.key as unknown as number;
                    this.notifyOutputChanged();
                }
            }
        };
        return React.createElement(HelloWorld, props);
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs {
        return { 
            sampleProperty:Number(this._selectedKey)
        };
    }
    // chnages are done here after getting the data
    public onRadioButtonChange= (newValue:string): void =>{
         this._selectedKey=newValue;
        this.notifyOutputChanged();
    }
    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
