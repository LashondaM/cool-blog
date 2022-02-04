// video #10
import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'luigi', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'peaches', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3 }
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => ( // blog is an item that we're calling each of the blogs as it goes through them
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} {/* fires a callback function for each item and returns a bit of a JSX templet */}
        </div>
     );
}
 
export default Home;