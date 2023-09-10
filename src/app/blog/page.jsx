import getData from "../../service/getData";

// const getData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         next: {
//             revalidate: 60
//         }
//     });
//     return response.json();
// }

//-- Blog 
const Blog = async () => {

    const data = await getData('https://jsonplaceholder.typicode.com/posts');
    const elements = data.map((item, i) => {
        return(
            <div className="block" key={i}>
                <h2>{item.title}</h2>
            </div>
        )
    });

    return(
        <>
            <h1>Blog</h1>
            {elements}
        </>
    )
}

export default Blog;