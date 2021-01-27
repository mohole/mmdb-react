import styles from './styles.module.scss';

const Alert = (props) => {
  const message = props.message || 'Something happened...';

  // Conditionally combine multiple classes from a CSS Module
  const visibility = props.visible ? 
    [styles.alertwrapper, styles.visible] : [styles.alertwrapper];

  // Function received from a parent as a prop
  const clickHandler = () => props.dismiss();

  return (
    <section 
      className={visibility.join(' ')}
      onClick={clickHandler}
    >
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    </section>
  )
}

export {
  Alert
}