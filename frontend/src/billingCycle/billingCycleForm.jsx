import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import LabelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
    render(){
        const { handleSubmit, readOnly, credits, debts } = this.props;
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                </div>
                <div className='box-footer' >
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm);