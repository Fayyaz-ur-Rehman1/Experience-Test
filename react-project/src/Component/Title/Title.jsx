import { useEffect, useState } from "react";
import { getTitle } from "../../service/titleService";
import "../Title/Title.css"

function TitleFetch() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getTitle()
            .then((response) => {
                setPosts(response.slice(0, 5));
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div className="title-container">
            <h2>First 5 Post Titles</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TitleFetch;
