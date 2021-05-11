// import React from 'react';
// import {Input} from "../Common/FormsControls/FormControls";
// import {Field, reduxForm} from "redux-form";
// import FieldLevelValidationForm from "./FieldLevelValidationForm";
// import {Texteria} from "./Texteria";
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';
//
// const SettingsForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'wot wrong?'} name={'settings'}
//                        component={Input}/>
//             </div>
//             <div>
//                 <Field placeholder={'wot heppen?'} name={'next'}
//                        component={Input}/>
//             </div>
//             <div>
//                 <Field placeholder={'are yuo shure?'} name={'finish'}
//                        component={Texteria}/>
//             </div>
//         </form>
//     )
//
//     const SettingsReduxForm = reduxForm({form: 'Settings'})(SettingsForm)
//
//     export const Settings = (props) => {
//         const onSubmit = (formData) => {
//             console.log(formData);
//         }
//         return <div>
//             <h1>Settings</h1>
//             <SettingsReduxForm onSubmit={onSubmit}/>
//             <FieldLevelValidationForm/>
//             {/*<Texteria />*/}
//             <Container maxWidth="sm">
//                 <Box my={4}>
//                     <Typography variant="h4" component="h1" gutterBottom>
//                         Create React App v4-beta example
//                     </Typography>
//                     <ProTip/>
//                     <Copyright/>
//                 </Box>
//             </Container>
//         </div>
//
//
//         function Copyright() {
//             return (
//                 <Typography variant="body2" color="textSecondary" align="center">
//                     {'Copyright © '}
//                     <Link color="inherit" href="https://material-ui.com/">
//                         Your Website
//                     </Link>{' '}
//                     {new Date().getFullYear()}
//                     {'.'}
//                 </Typography>
//             );
//         }
//     }
// }