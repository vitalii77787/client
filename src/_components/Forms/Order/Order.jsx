import React, { Component } from 'react';
import { Form, Input, Select, Icon, AutoComplete, message } from 'antd';
import { connect } from 'react-redux';
import { updateFields, setDefault, getAreas, PostOrder } from '../../../_actions/order.actions';

const Option = Select.Option;

const OrderForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      userDelivery: Form.createFormField({
        ...props.userDelivery,
        value: props.userDelivery.value,
      }),
      userName: Form.createFormField({
        ...props.userName,
        value: props.userName.value,
      }),
      userSurname: Form.createFormField({
        ...props.userSurname,
        value: props.userSurname.value,
      }),
      userPhone: Form.createFormField({
        ...props.userPhone,
        value: props.userPhone.value,
      }),
      userPay: Form.createFormField({
        ...props.userPay,
        value: props.userPay.value,
      }),
      userEmail: Form.createFormField({
        ...props.userEmail,
        value: props.userEmail.value,
      }),
      userArea: Form.createFormField({
        ...props.userArea,
        value: props.userArea.value
      }),
      userCity: Form.createFormField({
        ...props.userCity,
        value: props.userCity.value
      }),
      userStreet:Form.createFormField({
        ...props.userStreet,
        value: props.userStreet.value
      }),
      userHouse:Form.createFormField({
        ...props.userHouse,
        value: props.userHouse.value
      }),
      userFlat:Form.createFormField({
        ...props.userFlat,
        value: props.userFlat.value
      })
    };
  },
  // onValuesChange(props, values) {
  //   props.onChange(values);
  // },
})((props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 16 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 16 },
      sm: { span: 8 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 16,
        offset: 0,
      },
      sm: {
        span: 8,
        offset: 8,
      },
    },
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Item label="Payment Options"  {...formItemLayout}>
        {getFieldDecorator('userPay', {
          rules: [{ required: true, message: 'payment is required!' }],
        })(
          <Select prefix={<Icon type="pay-circle" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Payment Options"  {...formItemLayout}>
            {props.paymentOptions.map(item => (
              <Option value={item.id}>{item.value}</Option>
            ))}
          </Select>
        )}
      </Form.Item>
      <Form.Item label="Username"  {...formItemLayout}>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Username is required!' }, { min: 4, message: 'Must be over 4 symbols' }],
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
      </Form.Item>
      <Form.Item label="UserSurname"  {...formItemLayout}>
        {getFieldDecorator('userSurname', {
          rules: [{ required: true, message: 'UserSurname is required!' }, { min: 4, message: 'Must be over 4 symbols' }],
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserSurname" />)}
      </Form.Item>
      <Form.Item label="UserPhone"  {...formItemLayout}>
        {getFieldDecorator('userPhone', {
          rules: [{ required: true, message: 'Userphone is required!' }, { pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, message: 'Incorrect phoneNumber' }],
        })(<Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserPhone" />)}
      </Form.Item>
      <Form.Item label="UserEmail"  {...formItemLayout}>
        {getFieldDecorator('userEmail', {
          rules: [{ required: true, message: 'UserEmail is required!' }, { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Incorrect Email' }],
        })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserEmail" />)}
      </Form.Item>
      <Form.Item label="Delivery Options"  {...formItemLayout}>
        {getFieldDecorator('userDelivery', {
          rules: [{ required: true, message: 'delivery is required!' }],
        })(
          <Select placeholder="Delivery Options"  {...formItemLayout} >
            {props.deliveryOptions.map(item => (
              <Option value={item}>{item}</Option>
            ))}
          </Select>
        )}
      </Form.Item>
      <Form.Item label="Areas"  {...formItemLayout}>
        {getFieldDecorator('userArea', {
          rules: [{ required: true, message: 'area is required!' }],
        })(
          <Select  placeholder="Delivery Options"  {...formItemLayout} >
          {props.areas.length?props.areas.map(item=>
           <Select.Option key={item.id} value={item.name}>
           {item.name}
         </Select.Option>
          )
            :''}
        </Select>
        )}
      </Form.Item> 
      <Form.Item label="UserCity"  {...formItemLayout}>
        {getFieldDecorator('userCity', {
          rules: [{ required: true, message: 'City is required!' }],
        })(
          <Select  placeholder="City"  {...formItemLayout} >
          {props.cities?props.cities.map(item=>
           <Select.Option key={item.id} value={item.name}>
           {item.name}
         </Select.Option>
          )
            :''}
        </Select>
        )}
      </Form.Item> 
      <Form.Item label="UserStreet"  {...formItemLayout}>
        {getFieldDecorator('userStreet', {
          rules: [{ required: true, message: 'UserStreet is required!' }],
        })(<Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserStreet" />)}
      </Form.Item>
      <Form.Item label="UserHouse"  {...formItemLayout}>
        {getFieldDecorator('userHouse', {
          rules: [{ required: true, message: 'UserHouse is required!' }],
        })(<Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserHouse" />)}
      </Form.Item>
      <Form.Item label="UserFlat"  {...formItemLayout}>
        {getFieldDecorator('userFlat', {
          rules: [{}],
        })(<Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="UserFlat" />)}
      </Form.Item>
      <Form.Item   {...tailFormItemLayout}>
        <Input type='submit' value='Create Order'></Input>
      </Form.Item>
    </Form>
  );
});

class FormWrapper extends React.Component {
  componentDidMount() {
    this.props.getAreasData();
  }

  componentWillUnmount(){
    this.props.resetForm();
  }

  handleFormChange = (changedFields) => {
    this.props.updateOrder(changedFields);
  }

  handleSubmit = (values) => {
    this.props.submitData(values, this.props.fields.orderLine);
  }
  render() {
    const { fields } = this.props;
    return (
      <div className='container'>
        <OrderForm {...fields} onChange={this.handleFormChange} onSubmit={this.handleSubmit} />
        {/* <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre> */}
      </div>
    );
  }
}

export const OrderFormContainer = connect(
  (state, ownProps) => {
    return {
      ...ownProps,
      fields: state.order
    };
  },
  (dispatch) => {
    return {
      updateOrder: (changedFields) => dispatch(updateFields(changedFields)),
      resetForm: () => dispatch(setDefault()),
      getAreasData: () => dispatch(getAreas()),
      submitData: (values, orderLine)=>{dispatch(PostOrder(values,orderLine))}

    }
  }
)(FormWrapper);