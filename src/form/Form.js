import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      
      <div className='container'>
        <h2 className="bg-dark">Thông tin sinh viên</h2>
        <div >
        <div className="mb-3">
          <label htmlFor className="form-label">
            Mã SV
          </label>
          <input

            className="form-control"
            name
            id
          />
        </div>
        <div className="mb-3">
          <label htmlFor className="form-label">
            Họ và tên
          </label>
          <input
            type="text"
            className="form-control"
            name
            id
          />
        </div>
        <div className="mb-3">
          <label htmlFor className="form-label">
            Số điện thoại
          </label>
          <input

            className="form-control"
            name
            id
          />
        </div>
        <div className="mb-3">
          <label htmlFor className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name
            id
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
        </div>
        </div>
      </div>
    )
  }
}



