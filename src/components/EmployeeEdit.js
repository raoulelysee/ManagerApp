import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Buttons, Confirm } from './common';


class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    //The following code allow us to copy the value from the employee model to
    //our form reducer employeeUpdate
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    //Open the phone text message app
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onClickOpenModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Card>
      <EmployeeForm />
        <CardSection>
          <Buttons onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Buttons>
        </CardSection>

        <CardSection>
          <Buttons onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Buttons>
        </CardSection>

        <CardSection>
          <Buttons onPress={this.onClickOpenModal.bind(this)}>
            Fire Employee
          </Buttons>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
