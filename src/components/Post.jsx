// import {useParams} from "react-router-dom";
import {Navigate, useNavigate, Routes, Route} from "react-router-dom"

function Post() {
    // const params = useParams()
    const navigate = useNavigate()
    const status = 200

    const handleClick = () => {
        console.log('handle click')
        navigate('/about')
    }

    if (status === 404) {
        return (
            <Navigate to="/NotFoundPage"/>
        )
    }

    return (
        <div>
            {/*Post {params.id}*/}
            {/*<p>Name: {params.name}</p>*/}
            <h1>Post</h1>
            <button onClick={handleClick}>Click Me</button>
            <Routes>
                <Route path="/show" element={<h1>Hello World!</h1>}/>
            </Routes>
        </div>
    )
}

export default Post
