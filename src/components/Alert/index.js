import styles from './styles.module.scss';

const Alert = (props) => {
  const message = props.message || 'Something happened...';

  const visibility = props.visible ? 
    [styles.alert, styles.visible] : [styles.alert];

  const clicked = () => props.clicked();

  return (
    <section 
      className={visibility.join(' ')}
      onClick={clicked}
    >
      <p>{message}</p>
    </section>
  )
}

export {
  Alert
}