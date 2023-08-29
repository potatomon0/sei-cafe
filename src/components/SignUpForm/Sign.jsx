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

// import { signUp } from '../../utilities/users-service'
// import {Component} from 'react'
// export default class SignUpForm extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     }

//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.name]: evt.target.value,
//             error: ''
//         })
//     }

//     handleSubmit = async (evt) => {
//         evt.preventDefault()
//         try {
//             // We don't want to send the 'error' or 'confirm' property,
//             // so let's make a copy of the state object, then delete them
//             // const newFormData = {...formData};
//             // delete newFormData.error;
//             // delete newFormData.confirm;
//             // or
//             // const {name, email, password} = formData

//             const user = await signUp(this.state)
//             console.log(user)
//         } catch (err) {
//             // An error occurred
//             this.setState({ error: 'Sign Up Failed - Try Again' })
//         }
//     }

//     render() {
//         const disable = this.state.password !== this.state.confirm;
//         return (
//             <div>
//                 <div className="form-container">
//                     <form autoComplete="off" onSubmit={this.handleSubmit}>
//                         <label>Name</label>
//                         <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//                         <label>Email</label>
//                         <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//                         <label>Password</label>
//                         <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//                         <label>Confirm</label>
//                         <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//                         <button type="submit" disabled={disable}>SIGN UP</button>
//                     </form>
//                 </div>
//                 <p className="error-message">&nbsp;{this.state.error}</p>
//             </div>
//         );
//     }
// }

//=====================================================================================

// import React, { useState } from 'react'
// import { signUp } from '../../utilities/users-service'

// function SignUpForm() {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     })
//     // const [name, setName] = useState('')
//     // const [email, setEmail] = useState('')
//     // const [password, setPassword] = useState('')
//     // const [confirm, setConfirm] = useState('')
//     // const [error, setError] = useState('')

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             // We don't want to send the 'error' or 'confirm' property,
//             //  so let's make a copy of the state object, then delete them
//             // const form = { ...form};//this will not work because form is a state variable
//             setForm({ ...form })
//             delete form.error;
//             delete form.confirm;
//             //or
//             // const {name, email, password} = form
//             // console.log('in handleSubmit', form)
//             // The promise returned by the signUp service method
//             // will resolve to the user object included in the
//             // payload of the JSON Web Token (JWT)
//             const user = await signUp(form)
//         } catch (err) {
//             setForm({...form,  error: 'Sign Up Failed - Try Again' })//if we don't spread the form state, we will end up replacing the object format with just the error. Which result in the uncontrolled state error
//         }
//     }
//     // const handleSubmit = async (e) => {
//     //     // Prevent form from being submitted to the server
//     //     e.preventDefault()
//     //     try {
//     //         // We don't want to send the 'error' or 'confirm' property,
//     //         // so let's make a copy of the state object, then delete them
//     //         const newFormData = { ...form };
//     //         delete newFormData.error;
//     //         delete newFormData.confirm;
//     //         // or
//     //         // const {name, email, password} = formData

//     //         const user = await signUp(newFormData)
//     //         console.log(user)
//     //     } catch (err) {
//     //         // An error occurred
//     //         setFormD({ error: 'Sign Up Failed - Try Again' })
//     //     }
//     // }
//     const disable = form.password !== form.confirm
//     return (
//         <div>
//             <div className="form-container">
//                 <form autoComplete='off' onSubmit={handleSubmit}>
//                     <label>Name</label>
//                     <input type="text" name="name" value={form.name} onChange={handleChange} required />
//                     <label>Email</label>
//                     <input type="email" name="email" value={form.email} onChange={handleChange} required />
//                     <label>Password</label>
//                     <input type="password" name="password" value={form.password} onChange={handleChange} required />
//                     <label>Confirm</label>
//                     <input type="password" name="confirm" value={form.confirm} onChange={handleChange} required />
//                     <button type='submit' disabled={disable}>Sign Up</button>
//                 </form>
//             </div>
//             <p className="error-message">&nbsp;{form.error}</p>
//         </div>
//     )
// }

// export default SignUpForm
