import './TapButton.css'

export default function TapButton(props) {
    return (
        <li>
            <button id={props.id}
                    data-cy={props.dataCy}>
                {props.label}
            </button>
        </li>
    );
}