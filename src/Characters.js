import styles from './Character.module.css';

const Characters = ({pic, name, cast, intro}) => {
    return(
        <div className={styles.container}>
            <div className={styles.imgDiv}>
                <img src={pic} alt={name}/>
            </div>
            <div className={styles.details}>
                <h2 style={{fontSize:"30px", fontWeight:"bold", marginTop:"10px", marginBottom:"5px"}}>{name}</h2>
                <h4 style={{fontSize:"23px", fontWeight:"bold", color:"grey", marginBottom:"30px"}}>{cast}</h4>
                <p style={{fontSize:"18px", width:"600px"}}>{intro}</p>
            </div>
        </div>
    );
}

export default Characters;