import React, { useState } from 'react'

function SignUpForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const handleChange = (e) => {
        setForm({
            [e.target.name]: e.target.value,
            error: ''
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(form))
    }
    const disable = form.password !== form.confirm
    return (
        <div>
            <div className="form-container">
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} />
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} />
                    <label>Password</label>
                    <input type="password" name="password" value={form.password} />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={form.confirm} />
                    <button type='submit' disabled={disable}>Sign Up</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{form.error}</p>
        </div>
    )
}

export default SignUpForm