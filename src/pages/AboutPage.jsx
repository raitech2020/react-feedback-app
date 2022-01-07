import {Link} from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>Project details</h1>
                <p>React project to leave feedback for a product or service</p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
