import styles from '../../styles/People.module.css'
import Link from 'next/dist/client/link';
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { peoples: data }
    }
}

const People = ({ peoples }) => {
    return ( 
        <div>
            <h1>All people</h1>
            {peoples.map(people =>(
                <Link href={'/people/' + people.id} key={people.id}>
                    <a className={styles.single}>
                        <h3>{ people.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default People;