import css from './UserSocial.module.css'


export const UserSocial = () => { 
    return (
        <>
        <div className={css.description}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>Petra Marica</p>
    <p className={css.tag}>@pmarica</p>
    <p className={css.location}>Salvador, Brasil</p>
  </div>
        </>
    )
}