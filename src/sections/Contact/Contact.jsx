import styles from './ContactStyles.module.css'
function Contact() {
  return (
    <section id='contact' className={styles.container}>
     <h1 className='sectionTitle'>Contact</h1>
        <form action="https://formspree.io/f/xeojjdaz" method="post">
         <div className='formGroup'>
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name="name" id="name" placeholder='Name' required></input>
         </div>
         <div className='formGroup'>
            <label htmlFor="email" hidden>Email</label>
            <input type="text" name="email" id="email" placeholder='Email' required></input>
         </div>
         <div className='formGroup'>
            <label htmlFor="mesg" hidden>Message</label>
            <textarea name="msg" id="msg" placeholder='Message' required></textarea>
         </div>
         <input className='hover_b' type="submit" value='Submit' />
        </form>
        
        
        </section>
   
  )
}

export default Contact