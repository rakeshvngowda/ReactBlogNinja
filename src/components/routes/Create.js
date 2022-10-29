import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending,SetIspending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        SetIspending(true)
        fetch('http://localhost:8000/blogs/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("new blogs is addeds");
            SetIspending(false)
            // history.go(-1)
            history.push('/')
        })
    }


    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Blog body</label>
                <textarea
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="joshio">Joshio</option>

                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding .....</button>}
            </form>

        </div>
    );
}

export default Create;