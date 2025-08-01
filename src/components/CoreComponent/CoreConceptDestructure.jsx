export default function CoreConceptDestructure({image, title, description}) {
    return (
        <li>
            <img src={image} alt="..."/>
            <h3>{title} </h3>
            <p>{description}</p>
        </li>
    );
}