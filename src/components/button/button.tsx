import style from './button.module.scss'

interface Props {
    label: string;
    secondary: boolean;
}

function Button({ label, secondary }: Props) {
    return (
        <button className={secondary ? style.secondaryButton : style.primaryButton}>{label}</button>
    )
}

export default Button