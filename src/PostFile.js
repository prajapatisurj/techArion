import React from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'     

function PostFile(e) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [data, setData] = React.useState(null);


    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
        const data = {
            name:name,
            email:email,
            message:message,
        }
        axios.post(' https://admin.srkprojects.com/web/api/client/v1/contact-us/',data).then(res => {
            setData(res.data);
            setName('');
            setEmail('');
            setMessage('');
            setLoading(false)
        }).catch(err => {
            setLoading(false);
            setIsError(true)
        })
        console.log(data);
    }
    return (
        <div>
            <h1>Post Request</h1>
            <div className="form-grup">
                <label htmlFor="name">name</label>
                <input
                className="formControl"
                id="name"
                value={name}
                onChange={e=>setName(e.target.value)}
                /><br/>
                <label htmlFor="email">email</label>
                <input
                 className="formControl"
                 id="mail"
                 value={email}
                 onChange={e=>setEmail(e.target.value)}
                /><br/>
                <label htmlFor="message">message</label>
                <input
                 className="formControl"
                 id="message"
                 value={message}
                 onChange={e=>setMessage(e.target.value)}
                />
            </div>
            {
                isError && <small className="text-denger">wrong</small>
            }
            <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            >{loading ? 'Loding...':'submit'}</button>
            {data && <div>
                <strong>output</strong>
                <pre>{JSON.stringify(data,null,3)}</pre>
                </div>
                }
        </div>
    )
}

export default PostFile
