import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import Button from "../Button";
import Modal from "../Modal/Modal";

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState<{userId : number, id : number, title : string, body : string}[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const input = useInput();
    
    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
            setIsLoading(false);
        } 

        fetchPosts();
    }, []);

    return <section>
        <h3 style={{margin: "0.5rem 1rem"}}>Effects</h3>

        <Button isActive={true} onClick={() => setModal(prev => !prev)}>Show modal</Button>

        <Modal opened={modal}>
            <>
                <h3 style={{margin: "0.5rem 1rem"}}>Modal window</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt illum qui at totam nulla corporis, reprehenderit modi suscipit dicta necessitatibus! Iure nobis rerum adipisci, repudiandae reprehenderit labore necessitatibus voluptas.</p>
                <Button isActive={true} onClick={() => setModal(prev => !prev)}>Close</Button>
            </>
        </Modal>

        {isLoading && <p>Loading...</p>}
        {(!isLoading && posts !== null) && 
        <div>
            <label htmlFor="title">Search by title:</label>
            <input className="input" id="title" {...input}/>
            <ul>{posts.filter(post => post.title.toLowerCase().includes(input.value.toLowerCase())).map(post => 
                    <li className="card" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                )}
            </ul>
        </div>
            }
    </section>
}