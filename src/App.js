import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage"
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import AboutIconLink from "./components/AboutIconLink";
// import Post from "./components/Post"
import {FeedbackProvider} from "./context/FeedbackContext";

const App = () => {
    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={
                            // fragment tag
                            <>
                                <FeedbackForm/>
                                <FeedbackStats/>
                                <FeedbackList/>
                            </>
                        }/>
                        <Route path="/about" element={<AboutPage/>}/>
                        {/*<Route path="/post" element={<Post/>}/>*/}
                        {/*<Route path="/post/:id/:name" element={<Post/>}/>*/}
                        {/*<Route path="/post/*" element={<Post/>}/>*/}
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App
