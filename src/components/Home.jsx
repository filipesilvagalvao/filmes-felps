import Card from './Card'
import styles from './Home.module.css'
const { home } = styles
function Home() {
    return (
        <main className={home}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </main>
    )
}

export default Home