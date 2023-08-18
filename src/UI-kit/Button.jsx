import './Button.scss'

const Button = ({type, text}) => {
  const cls = `btn_${type}`
  return (
    <button className={cls}>{text}</button>
  )
}

export default Button