import './TapButton.css'

export default function TapButton({id, dataCy, label, onSelect, isSelected}) {
    return (
        <li>
            <button id={id}
                    className={isSelected ? 'active' : undefined}
                    data-cy={dataCy}
                    onClick={onSelect}>
                {label}
            </button>
        </li>
    );
}