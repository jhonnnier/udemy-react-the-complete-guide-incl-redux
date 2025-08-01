import './TapButton.css'

export default function TapButton({id, dataCy, label, onSelect}) {
    return (
        <li>
            <button id={id}
                    data-cy={dataCy}
                    onClick={onSelect}>
                {label}
            </button>
        </li>
    );
}