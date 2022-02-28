import React, { useState } from 'react'
import RadioButton from './RadioButton'
import CheckBox from './CheckBox'
import './HTML5Form.css'

function HTML5Form(props) {
  // 使用物件值作為狀態值，儲存所有的欄位
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    likeList: [],
  })

  // 儲存所有的欄位錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  // RadioButton用的項目(! RadioButton元件有修改)
  const genderOptions = ['男', '女', '不提供']

  // Checkbox用的項目
  const fruitOptions = ['西瓜', '芒果']

  // 專門處理每個欄位的輸入用
  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)

    const name = e.target.name
    const value = e.target.value
    const type = e.target.type

    // 預設值為輸入值
    let newValue = value

    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理

    if (type === 'checkbox') {
      // toggle
      // 如果目前這個值在陣列中 -> 移出陣列
      // 反之如果目前這個值"沒在"陣列中 -> 加入陣列
      newValue = fields[name].includes(value)
        ? fields[name].filter((v, i) => {
            return v !== value
          })
        : [...fields[name], value]
    }

    // "合併"原有物件值的語法
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const updatedFields = { ...fields, [name]: newValue }

    // 3. 設定回狀態
    setFields(updatedFields)
  }

  // 當表單檢查有不合法的訊息時會呼叫
  const handleFormInvalid = (e) => {
    // 阻擋form的預設送出行為(錯誤泡泡訊息)
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    // 3. 設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors)
  }

  // 當整個表單有更動時會觸發
  // 認定使用者輸入某個欄位(更正某個有錯誤的欄位)
  // 清空某個欄位錯誤訊息
  const handleFormChange = (e) => {
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors)
  }

  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用 FormData 獲取各欄位的值(另一種得到表單值的方式)
    // 注意：FormData 是利用各欄位的 name 屬性
    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    console.log(formData.get('gender'))
    // 獲取同名稱的checkbox
    console.log(formData.getAll('likeList'))

    // 作驗証

    // 驗証成功，用fetch或ajax送到伺服器
  }

  return (
    <>
      <h1>HTML5 表單驗証</h1>
      <form
        onSubmit={handleSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        {/* 如果有錯誤訊息，呈現出來 */}
        {fieldErrors.username !== '' && (
          <div className="error">{fieldErrors.username}</div>
        )}
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        {/* 如果有錯誤訊息，呈現出來 */}
        {fieldErrors.email !== '' && (
          <div className="error">{fieldErrors.email}</div>
        )}
        <br />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="6"
        />
        {/* 如果有錯誤訊息，呈現出來 */}
        {fieldErrors.password !== '' && (
          <div className="error">{fieldErrors.password}</div>
        )}
        <br />
        <label>性別</label>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton
              key={i}
              name="gender"
              value={v}
              checkedValue={fields.gender}
              handleFieldChange={handleFieldChange}
            />
          )
        })}
        <br />
        <label>喜好的水果</label>
        {fruitOptions.map((v, i) => {
          return (
            <CheckBox
              key={i}
              name="likeList"
              value={v}
              onChange={handleFieldChange}
              checked={fields.likeList.includes(v)}
            />
          )
        })}
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default HTML5Form
