import React from 'react'
import { Formik, Field, FormikProps, Form, FormikActions, ErrorMessage } from 'formik'
import {isEmpty} from 'lodash'

interface FormValues {
    comment: string
}
interface Props {
    onComment: (comment: string) => Promise<string>
}

function validateComment(value:string) {
   if(isEmpty(value)){
       return 'required'
   }
}
const EditComment:React.FunctionComponent<Props> = (props) => {
    const onSubmit= (values: FormValues, actions: FormikActions<FormValues>) => {
        props.onComment(values.comment)
        .then(() => {
            actions.resetForm()
        })
        .catch(() => {
            actions.setFieldError('comment', 'Could not add comment')
        })
    }
    return (<Formik 
    initialValues={{ comment: '' }}
    onSubmit={onSubmit}
    render={(formProps: FormikProps<FormValues>) => {
        return <Form>
            <Field type='text' name='comment' validate={validateComment}/>
            <ErrorMessage name="comment" /><br />
            <button type="submit">Submit</button>
        </Form>
    }}
    />)
}
export default EditComment