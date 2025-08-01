import './Card.css'

export default function Card({name, children}) {
    return (
        <article className="card">
            <h2>{name} {children}  </h2>
            <p>{name} is a professor of Computer Science at the University of Illinois. </p>
            <a href={"mailto: " + {name} + {children} + "@example.com"}>Email {name}</a>
        </article>
    );
}