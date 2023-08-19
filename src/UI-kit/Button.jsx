import './Button.scss'

const Button = ({type, text, onClick}) => {
  const cls = `btn_${type}`
  return (
    <button onClick={onClick} className={cls}>{text}</button>
  )
}

export default Button