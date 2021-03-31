import React from 'react';
import {Input} from "../Common/FormsControls/FormControls";
import {Field, reduxForm} from "redux-form";
import FieldLevelValidationForm from "./FieldLevelValidationForm";
import {Texteria} from "./Texteria";

const SettingsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'wot wrong?'} name={'settings'}
                        component={Input}/>
            </div>
            <div>
                <Field  placeholder={'wot heppen?'} name={'next'}
                        component={Input}/>
            </div>
            <div>
                <Field  placeholder={'are yuo shure?'} name={'finish'}
                        component={Texteria}/>
            </div>
        </form>
    )
}

const SettingsReduxForm = reduxForm({form: 'Settings'})(SettingsForm)

export const Settings = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Settings</h1>
        <SettingsReduxForm onSubmit={onSubmit} />
        <FieldLevelValidationForm />
        {/*<Texteria />*/}
    </div>
}