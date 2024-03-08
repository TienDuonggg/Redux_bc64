import React, { Component } from "react";

export default class Form extends Component {
  state = {
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    students: [], // Mảng lưu danh sách sinh viên
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Thêm thông tin sinh viên vào mảng students
    const newStudent = {
      code: this.state.inputValue1,
      fullName: this.state.inputValue2,
      phoneNumber: this.state.inputValue3,
      email: this.state.inputValue4,
    };
    this.setState((prevState) => ({
      students: [...prevState.students, newStudent],
      inputValue1: "",
      inputValue2: "",
      inputValue3: "",
      inputValue4: "",
    }));
  };

  handleChange = (event, inputName) => {
    this.setState({ [inputName]: event.target.value });
  };

  handleDelete = (studentId) => {
    this.props.deleteStudent(studentId);
  };

  handleEdit = (studentId, updatedData) => {
    this.props.editStudent(studentId, updatedData);
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="bg-dark text-light">Thông tin sinh viên</h2>
          <div className="row">
            <div className="mb-3 col-6">
              <label htmlFor className="form-label">
                Mã SV
              </label>
              <input
                className="form-control"
                name="input1"
                value={this.state.inputValue1}
                onChange={(event) => this.handleChange(event, "inputValue1")}
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor className="form-label">
                Họ và tên
              </label>
              <input
                type="text"
                className="form-control"
                name="input2"
                value={this.state.inputValue2}
                onChange={(event) => this.handleChange(event, "inputValue2")}
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor className="form-label">
                Số điện thoại
              </label>
              <input
                className="form-control"
                name="input3"
                value={this.state.inputValue3}
                onChange={(event) => this.handleChange(event, "inputValue3")}
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="input4"
                value={this.state.inputValue4}
                onChange={(event) => this.handleChange(event, "inputValue4")}
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
              />
            </div>
          </div>
          <button className="btn btn-success" onClick={this.handleSubmit}>
            Thêm sinh viên
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Mã SV</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student, index) => (
                <tr key={index}>
                  <td>{student.code}</td>
                  <td>{student.fullName}</td>
                  <td>{student.phoneNumber}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(student.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.handleEdit(student.id, student)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
